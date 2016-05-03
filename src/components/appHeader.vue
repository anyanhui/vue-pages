<style lang="less">
   .header {
       width : 100%;
       height : 1rem;
   }
</style>

<template>
    <header>
        <h2 v-text="msg"></h2>
    </header>
</template>

<script>
    export default {
        data () {
            return {
              msg: '这里是header'
            }
        }
    }
</script>
