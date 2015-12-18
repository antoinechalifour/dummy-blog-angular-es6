import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { appPosts } from './directives/app-posts.directive';
import { appPost } from './directives/app-post.directive';
import { appAlbums } from './directives/app-albums.directive';
import { appPostCard } from './directives/app-post-card.directive'; 

import { AppCtrl } from './controllers/AppCtrl.controller';
import { AppPostsCtrl } from './controllers/AppPostsCtrl.controller';
import { AppPostCardCtrl } from './controllers/AppPostCardCtrl.controller';
import { AppPostCtrl } from './controllers/AppPostCtrl.controller';
import { AppAlbumsCtrl } from './controllers/AppAlbumsCtrl.controller';

import { AlbumService } from './services/AlbumService.service';
import { PostService } from './services/PostService.service';
import { AuthorService } from './services/AuthorService.service';

import appTemplate from './views/app.template.html';

function moduleConfig($stateProvider, $urlRouterProvider) {
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
      template: '<app-post></app-post>',
    });

  $urlRouterProvider.otherwise('/posts/');
}

moduleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

const app = angular.module('dummyblog', ['ui.router'])
  .config(moduleConfig)
  .directive('appPosts', appPosts)
  .directive('appPost', appPost)
  .directive('appAlbums', appAlbums)
  .directive('appPostCard', appPostCard)
  .controller('AppCtrl', AppCtrl)
  .controller('AppPostsCtrl', AppPostsCtrl)
  .controller('AppPostCtrl', AppPostCtrl)
  .controller('AppPostCardCtrl', AppPostCardCtrl)
  .controller('AppAlbumsCtrl', AppAlbumsCtrl)
  .service('AlbumService', AlbumService)
  .service('PostService', PostService)
  .service('AuthorService', AuthorService)
  .run(() => {
    console.log('Dummy blog running');
  });

export default 'dummyblog';