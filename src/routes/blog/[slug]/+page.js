/** @type {import('./$types').PageLoad} */
import { posts } from '../../../lib/stores/HiveStore'

let workingPosts;
posts.subscribe( value => {
  workingPosts = value;
})
export const prerender = false;
export async function load({ params }){
  return await workingPosts.find(element => element.permlink === params.slug);
}