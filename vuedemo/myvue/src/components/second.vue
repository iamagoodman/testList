<template>
    <div style="width: 100%;height: 200px;background: red">
      <h1>i am second page</h1>
      <div class="container">fdsafsdafsafsafsdfsafsafsa</div>
      <div class="box">13245646464534152341352</div>
    </div>
</template>

<script>
    export default {
        name: "second",

    }
</script>

<style scoped lang="less">
  @import "../libs/style";
  @width:20rem;
  @height:100px;
  @bgColor:#23fe21;
  .greenbg{
    background: #006600;
  }
  #colors(){
    red:red;
    blue:blue;
    yellow:yellow
  }
  .container{
    width: @width;
    height: @height;
    .greenbg();
    color: #colors[yellow];
  }
  .box{
    width: @width;
    height:@height;
    color: #baseColor[titleColor];
    background: #baseColor[titleBg];
  }
</style>
