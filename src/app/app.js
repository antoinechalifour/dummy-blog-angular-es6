import 'angular';
import uiRouter from 'angular-ui-router';
import { autoregister as register } from './utils/autoregister'

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

const app = angular.module('dummyblog', ['ui.router'])
  .config(moduleConfig)
  .run(() => {
    console.log('Dummy blog running');
  });

register(app, {
  directive: [
    appPosts,
    appPost,
    appAlbums,
    appPostCard
  ],
  controller: [
    AppCtrl,
    AppPostsCtrl,
    AppPostCardCtrl,
    AppPostCtrl,
    AppAlbumsCtrl
  ],
  service: [
    PostService,
    AlbumService,
    AuthorService
  ]
});

export default 'dummyblog';