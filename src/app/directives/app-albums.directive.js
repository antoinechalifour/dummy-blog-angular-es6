export function appAlbums() {
  return {
    restrict: 'EA',
    templateUrl: 'app/views/app-albums.template.html',
    controller: 'AppAlbumsCtrl',
    controllerAs: 'appalbums',
    bindToController: true
  };
}