import controller from './AppPostCardCtrl.controller';
import template from './app-post-card.template.html';

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

export default function appPostCard() {
  return {
    restrict: 'EA',
    scope: {
      post: '='
    },
    template,
    link: link(),
    controller,
    controllerAs: 'apppostcard',
    bindToController: true
  };
}