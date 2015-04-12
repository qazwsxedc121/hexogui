app.directive('ngnwdir', function() {
  return {
    scope: {
      'ngnwdir': '='
    },
    link: function(scope,element,attrs){
      $(element).change(function(evt){
        var val = $(this).val();
        scope.$apply(function(){
          scope.ngnwdir = val;
        });
      });
    }
  };
});
