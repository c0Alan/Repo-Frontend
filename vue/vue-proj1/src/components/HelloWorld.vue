<template>
  <div class="hello">
    <h1>欢迎访问国学团网站</h1>
    <ul>
      <li><img alt="Vue logo" src="../assets/beian_logo.png"><a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank" rel="noopener">粤ICP备2021117378号</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
