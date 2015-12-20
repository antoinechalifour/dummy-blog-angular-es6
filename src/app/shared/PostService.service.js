import constants from './constants';
import * as url from 'url';

const POSTS_URI = url.resolve(constants.host, constants.uris.posts);

export default class PostService {
  constructor($http) {
    this.$http = $http;
    this._posts = [];
  }

  getPosts() {
    return this.$http.get(POSTS_URI)
    .then(response => response.data)
    .then(posts => {
      return posts.map(p => {
        p.posted = new Date(p.posted).getTime();
        return p;
      });
    });
  }

  getPost(id) {
    const URI = `${POSTS_URI}/${id}`;
    return this.$http.get(URI)
      .then(response => response.data);
  }
}

PostService.$inject = ['$http'];