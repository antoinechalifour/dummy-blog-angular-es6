import template from '../views/app-albums.template.html';

export function appAlbums() {
  return {
    restrict: 'EA',
    template,
    controller: 'AppAlbumsCtrl',
    controllerAs: 'appalbums',
    bindToController: true
  };
}