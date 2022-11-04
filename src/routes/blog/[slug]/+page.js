/** @type {import('./$types').PageLoad} */
import { posts, findSinglePost, findPostComments } from '$lib/stores/HiveStore'
export const prerender = false;

let workingPosts;
posts.subscribe( value => {
  workingPosts = value;
})

export async function load({ params }){
  let rtn = {};
  rtn["post"] = await findSinglePost(params.slug);
  rtn["comments"] = await findPostComments(rtn["post"].author, params.slug);
  return rtn;
}