<template>
  <ul>
    <li v-for="shot in shots">
      <a v-bind:href="shot.html_url">
        <h1>{{ shot.title }}</h1>
        <img v-bind:src="shot.images.normal" alt="{{ shot.title }}" />
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      dribbleUsername: { default: 'JamieCassidy' }
    },

    data() {
      return { shots: [] }
    },

    ready() {
      var requestURL = 'https://api.dribbble.com/v1/users/' + this.dribbbleUsername + '/shots?access_token=75c7d4e3de51b464f3eedee1e2e8ce0a7a4d9becac21696d675ee57c35d14098';
      //cache this.
      this.requestShots(requestURL);
    },

    methods: {
      requestShots: function(requestURL) {
        var self = this;
        this.getJSON(requestURL, function(response) {
          forEach(response, function(shot) {
            console.log(shot);
          });
          self.shots = response;
        })
      },

      getJSON: function(url, callback) {
        request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
          if(request.status >= 200 && request.status < 400) {
            response = JSON.parse(request.responseText);
          } else {
            response = request.status;
          }

          return callback(response);
        }

        request.send();
      }
    }
  }
</script>

<style lang="sass">

</style>
