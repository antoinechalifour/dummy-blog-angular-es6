export function appPost() {
  return {
    restrict: 'EA',
    templateUrl: 'app/views/app-post.template.html',
    controller: 'AppPostCtrl',
    controllerAs: 'apppost',
    bindToController: true
  };
}