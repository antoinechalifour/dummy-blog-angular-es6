export default class AppAuthorCtrl {
  constructor($stateParams, AuthorService) {
    const id = $stateParams.id;
    this.authorService = AuthorService;
    this.authorService.getAuthor(id)
      .then(author => this.author = author);
    this.authorService.getPosts(id)
      .then(posts => this.posts = posts);
  }
}

AppAuthorCtrl.$inject = ['$stateParams', 'AuthorService'];