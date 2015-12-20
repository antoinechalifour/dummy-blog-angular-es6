import './app-author.css';
import controller from './AppAuthorCtrl.controller';
import template from './app-author.template.html';

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
      return {
        'background-image': `url("${background}")`,
        'background-size': 'cover'
      };
    };
  }
}

export default function appAuthor() {
  return {
    restrict: 'EA',
    template,
    link: link(),
    controller,
    controllerAs: 'appauthor',
    bindToController: true
  };
}