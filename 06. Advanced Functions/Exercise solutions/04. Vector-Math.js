(function () {
    return {
       add: function (a, b) {
          return [a[0] + b[0], a[1] + b[1]];
       },
       multiply: function (a, b) {
          return [a[0] * b, a[1] * b];
       },
       length: function (a) {
          return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
       },
       dot: function (a, b) {
          return a[0] * b[0] + a[1] * b[1];
       },
       cross: function (a, b) {
          return a[0] * b[1] - a[1] * b[0]
       }
    };
 })();