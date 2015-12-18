import '../../style/app-author.css';
import template from '../views/app-author.template.html';

function link() {
  return function(scope, el, attrs){
    const vm = scope;

    vm.computeProfilePicture = function(author) {
      console.log(author);
      if(!author) return;

      let background = 'http://api.randomuser.me/portraits/men/20.jpg';
      if(author.gender === 'female') {
        background = 'http://api.randomuser.me/portraits/women/7.jpg';
      }
      console.log(background);
      return background;
    };
  }
}

export function appAuthor() {
  return {
    restrict: 'EA',
    template,
    link: link(),
    controller: 'AppAuthorCtrl',
    controllerAs: 'appauthor',
    bindToController: true
  };
}