export class AppPostsCtrl {
  constructor(PostService) {
    this.postService = PostService;
    this.postService.getPosts()
      .then(posts => {
        this.posts = posts;
      });
  }
}