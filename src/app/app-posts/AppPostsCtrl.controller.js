export default class AppPostsCtrl {
  constructor(PostService) {
    this.postService = PostService;
    this.postService.getPosts()
      .then(posts => this.posts = posts);
  }

  filterposts(search) {
    return function(post) {
      return post.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    }
  }
}

AppPostsCtrl.$inject = ['PostService'];