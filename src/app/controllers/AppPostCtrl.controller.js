export class AppPostCtrl {
  constructor($stateParams) {
    console.log($stateParams);
  }
}

AppPostCtrl.$inject = ['$stateParams'];