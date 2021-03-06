export default class AppPostCtrl {
  constructor($stateParams, PostService, AuthorService) {
    const id = $stateParams.id;
    this.service = PostService;
    this.service.getPost(id)
      .then(post => {
        this.post = post;

        return AuthorService.getAuthor(this.post.authorId);
      })
      .then(author => this.author = author);
  }
}

AppPostCtrl.$inject = ['$stateParams', 'PostService', 'AuthorService'];