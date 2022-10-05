/** @type {import('./$types').PageLoad} */
import { posts } from '../../../lib/stores/HiveStore'
// import { compile } from 'mdsvex';

let workingPosts;
posts.subscribe( value => {
  workingPosts = value;
})

export async function load({ params }){
  // let goodPost = workingPosts.find(element => element.permlink === params.slug);
  // const body = await compile(goodPost.body);
  // const title = goodPost.title;
  return await workingPosts.find(element => element.permlink === params.slug);
  // return {name: title, content: body?.code}
}