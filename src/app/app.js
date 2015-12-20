import angular from 'angular';
import uiRouter from 'angular-ui-router';

import moduleConfig from './shared/app.config';
import PostService from './shared/PostService.service';
import AuthorService from './shared/AuthorService.service';

import postFilter from './app-posts/postFilter.filter';
import appPosts from './app-posts/app-posts.directive';
import appPost from './app-post/app-post.directive';
import appPostCard from './app-post-card/app-post-card.directive';
import appAuthor from './app-author/app-author.directive';

angular.module('dummyblog', ['ui.router'])
  .config(moduleConfig)
  .directive('appPosts', appPosts)
  .directive('appPost', appPost)
  .directive('appPostCard', appPostCard)
  .directive('appAuthor', appAuthor)
  .service('PostService', PostService)
  .service('AuthorService', AuthorService)
  .run(() => {
    console.log('Dummy blog running');
  });

export default 'dummyblog';