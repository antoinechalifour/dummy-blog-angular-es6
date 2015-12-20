import './app-post.css';
import controller from './AppPostCtrl.controller';
import template from './app-post.template.html';

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

export default function appPost() {
  return {
    restrict: 'EA',
    template,
    link: link(),
    controller,
    controllerAs: 'apppost',
    bindToController: true
  };
}