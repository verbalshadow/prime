/** @type {import('./$types').PageLoad} */
import {findSinglePost, findPostComments } from '$lib/stores/HiveStore'
export const prerender = false;

export async function load({ params }){
  let rtn = {};
  rtn["post"] = await findSinglePost(params.slug);
  rtn["comments"] = await findPostComments(rtn["post"].author, params.slug);
  return rtn;
}