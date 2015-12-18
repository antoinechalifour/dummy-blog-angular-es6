import template from '../views/app-post.template.html';

export function appPost() {
  return {
    restrict: 'EA',
    template,
    controller: 'AppPostCtrl',
    controllerAs: 'apppost',
    bindToController: true
  };
}