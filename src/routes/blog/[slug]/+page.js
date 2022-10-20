/** @type {import('./$types').PageLoad} */
import { posts, getSinglePost } from '../../../lib/stores/HiveStore'
export const prerender = false;

let workingPosts;
posts.subscribe( value => {
  workingPosts = value;
})
export async function load({ params }){
  return await getSinglePost(params.slug);
}