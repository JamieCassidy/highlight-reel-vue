<template>
  <div class="alert alert-{{ type }}"  v-show="show">
    <slot></slot>
    <span class="alert-close" @click="show = false">x</span>
  </div>
</template>

<script>
  export default {
    props: {
      type: { default: 'info' }
    },

    data() {
      return { show: true };
    },

    ready() {
      setTimeout(
        () => this.show = false,
        5000
      );
    }
  }
</script>

<style lang="sass">
  body {
    font-family: Gotham, verdana, sans-serif;
    font-size: 16px;
    line-height: 24px;
  }

  .alert {
    background: #ddd;
    border: 1px solid darken(#ddd, 20%);
    padding: 1em;
    position: relative;

    &-success {
      background: lighten(green, 70%);
      border: 1px solid lighten(green, 30%);
      color: green;
    }

    &-error {
      background: lighten(red, 45%);
      border: solid 1px lighten(red, 30%);
      color: red;
    }

    &-info {
      background: lighten(#00a1e0, 50%);
      border: solid 1px lighten(#00a1e0, 10%);
      color: #00a1e0;
    }
  }

  .alert-close {
    position: absolute;
    top: 1em;
    right: 1em;
    font-weight: bold;
    cursor: pointer;
  }
</style>
