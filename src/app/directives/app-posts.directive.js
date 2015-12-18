import '../../style/app-posts.css';
import template from '../views/app-posts.template.html';

export function appPosts() {
  return {
    restrict: 'EA',
    template,
    controller: 'AppPostsCtrl',
    controllerAs: 'appposts',
    bindToController: true
  };
}