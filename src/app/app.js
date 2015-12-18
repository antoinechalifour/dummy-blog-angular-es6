import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { moduleConfig } from './config';

import { appPosts } from './directives/app-posts.directive';
import { appPost } from './directives/app-post.directive';
import { appPostCard } from './directives/app-post-card.directive';
import { appAuthor } from './directives/app-author.directive';
import { appAlbums } from './directives/app-albums.directive';

import { AppCtrl } from './controllers/AppCtrl.controller';
import { AppPostsCtrl } from './controllers/AppPostsCtrl.controller';
import { AppPostCardCtrl } from './controllers/AppPostCardCtrl.controller';
import { AppPostCtrl } from './controllers/AppPostCtrl.controller';
import { AppAuthorCtrl } from './controllers/AppAuthorCtrl.controller';
import { AppAlbumsCtrl } from './controllers/AppAlbumsCtrl.controller';

import { PostService } from './services/PostService.service';
import { AuthorService } from './services/AuthorService.service';
import { AlbumService } from './services/AlbumService.service';

const app = angular.module('dummyblog', ['ui.router'])
  .config(moduleConfig)
  .directive('appPosts', appPosts)
  .directive('appPost', appPost)
  .directive('appPostCard', appPostCard)
  .directive('appAuthor', appAuthor)
  .directive('appAlbums', appAlbums)
  .controller('AppCtrl', AppCtrl)
  .controller('AppPostsCtrl', AppPostsCtrl)
  .controller('AppPostCtrl', AppPostCtrl)
  .controller('AppPostCardCtrl', AppPostCardCtrl)
  .controller('AppAuthorCtrl', AppAuthorCtrl)
  .controller('AppAlbumsCtrl', AppAlbumsCtrl)
  .service('AlbumService', AlbumService)
  .service('PostService', PostService)
  .service('AuthorService', AuthorService)
  .run(() => {
    console.log('Dummy blog running');
  });

export default 'dummyblog';