var css = require("../scss/application.scss");
var Vue = require('vue');
var Utils = require('./helpers/utils');
var forEach = Utils.forEach;

Vue.component('highlight-reel', {
  template: '#highlight-reel',
  props: ['dribbbleUsername'],

  data: function() {
    return {
      shots: []
    }
  },

  created: function() {
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
});

new Vue({
  el: '#vue-dribbble'
});
