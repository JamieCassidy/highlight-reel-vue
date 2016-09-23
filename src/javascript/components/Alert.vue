<template>
  <div class="alert alert-{{ type }}"
    v-show="show"
    transition="fade">
    <slot></slot>
    <span class="alert-close"
      @click="show = false"
      v-show="important">
      x
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      type: { default: 'info' },
      timeout: { default: 3000 },
      important: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return { show: true };
    },

    ready() {
      if(!this.important) {
        setTimeout(
          () => this.show = false,
          this.timeout
        );
      }
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
      border: solid 1px green;
      color: green;
    }

    &-error {
      background: lighten(red, 45%);
      border: solid 1px red;
      color: red;
    }

    &-info {
      background: lighten(#00a1e0, 50%);
      border: solid 1px #00a1e0;
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

  .fade-transition{
    transition: opacity .4s ease;
  }

  .fade-leave {
    opacity: 0;
  }
</style>
