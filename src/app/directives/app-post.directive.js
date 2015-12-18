import '../../style/app-post.css';
import template from '../views/app-post.template.html';

function link() {
  return function(scope, el, attrs) {
    const vm = scope;

    vm.computeHeaderStyle = function(post) {
      if(!post) return;

      return {
        'background-image': `url("${post.image}")`,
        'background-size': 'cover',
        'background-position': 'center',
        'height': '300px'
      };
    };
  };
}

export function appPost() {
  return {
    restrict: 'EA',
    template,
    link: link(),
    controller: 'AppPostCtrl',
    controllerAs: 'apppost',
    bindToController: true
  };
}