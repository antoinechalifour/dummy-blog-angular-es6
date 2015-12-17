import { constants } from '../utils/constants';
import * as url from 'url';

let POSTS_URI = url.resolve(constants.host, constants.uris.posts);

export class PostService {
  constructor($http) {
    this.$http = $http;
    this._posts = [];
  }

  getPosts() {
    return this.$http.get(POSTS_URI)
    .then(response => {
      return response.data;
    })
    .then(posts => {
      return posts.map(post => {
        post.image = 'http://placekitten.com/800/400';
        return post;
      });
    })
  }
}