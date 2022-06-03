<template>
  <main>
    <article>
      <a href="https://yuki-itclass.com/">
        <p>ユキのIT教室</p>
        <img class="yukiTop" src="@/assets/img/yukiTop.png" alt="ユキのIT教室">
      </a>
      <p><button @click="increment">Good</button></p>
      <p>いいね({{ number }})</p>
    </article>
  </main>
</template>

<script>
export default {
  data: function() {
    return {
      number: 5
    }
  },
  methods: {
      increment() {
          this.number += 1;
      }
  }
}
</script>

<style scoped>
  main {
    border: 1px solid red;
  }
  img.yukiTop {
    height: 100px;
    width: 150px;
  }
</style>