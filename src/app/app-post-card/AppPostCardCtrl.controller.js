export default class AppPostCardCtrl {
  constructor($state, AuthorService) {
    this.$state = $state;
    this.authorService = AuthorService;
    this.authorService
      .getAuthor(this.post.authorId)
      .then(author => this.author = author);
  }
}

AppPostCardCtrl.$inject = ['$state', 'AuthorService'];