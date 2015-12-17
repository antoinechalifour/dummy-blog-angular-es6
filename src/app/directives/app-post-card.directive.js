function link() {
  return function(scope, el, attrs) {
    const vm = scope;

    vm.cardStyle = function(post) {
      const image = post.image;

      if(!image) return;

      return {
        'background-image': `url("${image}")`,
        'background-position': 'bottom',
        'background-size': 'cover',
        'min-height': '256px',
        'color': '#fff'
      };
    };
  };
}

export function appPostCard() {
  return {
    restrict: 'EA',
    scope: {
      post: '='
    },
    templateUrl: 'app/views/app-post-card.template.html',
    link: link(),
    controller: 'AppPostCardCtrl',
    controllerAs: 'apppostcard',
    bindToController: true
  };
}