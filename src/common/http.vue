// import $ from 'jquery'

let USE_CACHE = true;

let cache = {};

let copy = function(obj) {
	if (Array.isArray(obj)) {
		return obj.map(copy);
	} else if (typeof obj == 'object' && obj != null) {
		let c = {};
		Object.keys(obj).forEach(k => c[k] = copy(obj[k]));
		return c;
	}  
	else {
		return obj;
	}
};

let middleware = {
	list: [],
	add: function (middleware) {
		this.list.push(middleware);
	},
	run: function(method, url, res) {
		return this.list.reduce(
			(res, fun) => fun(method, url, res) || res,
			res
		);
	}
};

export default {
	get csrfToken() {
		return this._csrfToken || document.querySelector('meta[name=csrf-token]').content;
	},
	set csrfToken(value) {
		this._csrfToken = value;
	},
	get: function(useCache, ...args) {
		if (typeof useCache != 'boolean') {
			args.unshift(useCache);
			useCache = false;
		}

		let key = JSON.stringify(args);

		if (USE_CACHE && useCache && cache[key]) {
			return Promise.resolve(copy(cache[key]));
		} else {
			return this.request('get', ...args)
				.then(data => {
					cache[key] = data;
					return copy(data);
				});
		}
	},

	getJson: function(uri) {
		let req = new Promise((resolve, reject) => {
			$.getJSON(uri)
				.then(resolve, reject);
		});

		return this._parse("get", uri, req);
	},
	post: function(...args) {
		return this.request('post', ...args);
	},
	postJson : function(uri, data, opts = {}){
		uri = '/skyeye' + uri;
		data = data || {};
		data.csrf_token = this.csrfToken;
		data.r = Math.random();
		opts.contentType = "application/json; charset=utf-8";
		opts.dataType = "json";
		var method = opts.method || "POST";
		let req = new Promise((resolve, reject) => {
			$.ajax(Object.assign({
				method: method,
				url:  uri,
				data: JSON.stringify(data)
			}, opts))
				.then(resolve, reject);
		});

		return this._parse(method, uri, req);
	},
	request: function(method, uri, data, opts = {}) {
		uri = '/skyeye' + uri;
		data = data || {};
		data.csrf_token = this.csrfToken;
		data.r = Math.random();
		let req = new Promise((resolve, reject) => {
			$.ajax(Object.assign({
				method: method,
				url:  uri,
				data: data
			}, opts))
			.then(resolve, reject);
		});

	    return this._parse(method, uri, req);
	},
	upload: function(url, file) {
		url = '/skyeye' + url;
		let self = this;
		let req = new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest();
			let formData = new FormData();

			formData.append('csrf_token', self.csrfToken);
			formData.append('file', file);
			xhr.open('POST', url);
			xhr.onload = function () {
				let res = xhr.responseText;
				if (xhr.status > 200) {
					return reject(xhr);
				}
				try {
					resolve(JSON.parse(res));
				} catch(e) {
					resolve(res);
				}
			};
			xhr.send(formData);
		});

		return this._parse('upload', url, req);
	},
	download: function(url, name = '') {
		url = '/skyeye' + url;
		let link = document.createElement('a');
		link.setAttribute('download', name);
		link.setAttribute('href', url);
		Object.assign(link.style, {
			opacity : 0,
			position : 'absolute',
			top : 0
		});
		
		document.body.appendChild(link);
		
		link.click();

		setTimeout(() => document.body.removeChild(link), 30);
	},
	clearCache: function(...args) {
		if (args.length) {
			cache[JSON.stringify(args)] = null;
		} else {
			cache = {};
		}

	},
	_parse: function(method, url, req) {

		let self = this;
		return req.then(res => {
			self.csrfToken = res.token;
			res = middleware.run(method, url, res);
			if (res.status == 200 || typeof res.status == "undefined") {
				return res;
			} else {
				return Promise.reject(res);
			}
		}, xhr =>
			Promise.reject(['网络错误', xhr.status].join(' ')));
	}
};

export {middleware};
