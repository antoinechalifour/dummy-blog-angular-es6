export function appPosts() {
  return {
    restrict: 'EA',
    templateUrl: 'app/views/app-posts.template.html',
    controller: 'AppPostsCtrl',
    controllerAs: 'appposts',
    bindToController: true
  };
}