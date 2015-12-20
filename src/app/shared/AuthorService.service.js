import constants from './constants';
import * as url from 'url';

let AUTHORS_URI = url.resolve(constants.host, constants.uris.authors);

export default class AuthorService {
  constructor($http) {
    this.$http = $http;
  }

  getAuthor(id) {
    return this.$http.get(`${AUTHORS_URI}/${id}`)
      .then(response => response.data);
  }

  getPosts(authorId) {
    return this.$http.get(`${AUTHORS_URI}/${authorId}/${constants.uris.posts}`)
      .then(response => response.data);
  }
}

AuthorService.$inject = ['$http'];