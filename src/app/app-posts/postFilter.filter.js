export default function filterPost() {
  return function(posts, search) {
    console.log(`Filtering using ${search}`);
    if(!search) return posts;

    return posts.map(post => {
      console.log(post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      return post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  };
};