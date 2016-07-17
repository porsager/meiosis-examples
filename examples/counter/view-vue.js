/*global Vue*/
(function(ref) {
  ref.vueView = function(model) {
    return function(propose) {
      //return Vue.component("counter", {
      return new Vue({
        el: "#vueApp",
        data: { model: model },
        template: "#view-vue",
        methods: {
          onInc: function() {
            propose({ add: 4 });
          },
          onDecr: function() {
            propose({ add: -4 });
          }
        }
      });
    };
  };
})(window);
