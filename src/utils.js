import { blogposts } from '../cms/dataset.js'
export function getPosts() {
  return blogposts
}
export function getPostData(currentslug) {
  return blogposts.find((post) => post.slug == currentslug)
}
