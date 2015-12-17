import { constants } from '../utils/constants';
import * as url from 'url';

let POSTS_URI = url.resolve(constants.host, constants.uris.authors);

export class AuthorService {
  constructor($http) {
    this.$http = $http;
  }

  getAuthor(id) {
    return this.$http.get(`${POSTS_URI}/${id}`)
      .then(response => {
        return response.data;
      });
  }
}