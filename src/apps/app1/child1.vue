<template>
  <h1 v-text="name"></h1>
</template>
<script>
  export default {
      data : function () {
          return {
              name : "child1"
          };
      }
  }
</script>
