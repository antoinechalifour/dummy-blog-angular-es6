import './app-posts.css';
import controller from './AppPostsCtrl.controller';
import template from './app-posts.template.html';

export default function appPosts() {
  return {
    restrict: 'EA',
    template,
    controller,
    controllerAs: 'appposts',
    bindToController: true
  };
}