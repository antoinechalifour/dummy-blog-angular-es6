import appTemplate from './views/app.template.html';

export function moduleConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      abstract: true,
      template: appTemplate,
      controller: 'AppCtrl',
      controllerAs: 'app'
    })
    .state('app.posts', {
      url: '/posts/',
      views: {
        content: {
          template: '<app-posts></app-posts>'
        }
      }
    })
    .state('app.albums', {
      url: '/albums/',
      views: {
        content: {
          template: '<app-albums></app-albums>'
        }
      }
    })
    .state('post', {
      url: '/posts/:id',
      template: '<app-post></app-post>'
    })
    .state('author', {
      url: '/authors/:id',
      template: '<app-author></app-author>'
    });

  $urlRouterProvider.otherwise('/posts/');
}

moduleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
