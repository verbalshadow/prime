import { persist, createIndexedDBStorage } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store'
import { hiveId, hiveAPIs, hideCrossPosts } from './Settings';
import { Client } from "@hiveio/dhive";

export const posts = persist(writable([]), createIndexedDBStorage(), "posts");
// export const tags = writable(new Set());

let postsCache;
posts.subscribe( value => {
  postsCache = value;
})
const client = new Client(hiveAPIs);

var query = {
  tag: hiveId, // This tag is used to filter the results by a specific post tag
  limit: 25, // This limit allows us to limit the overall results returned to 5
};

client.database.getDiscussions('blog', query)
  .then((results) => addPosts(results))

export async function findSinglePost(permlink){
  let post;
  try {
    post = await postsCache.find(element => element.permlink === permlink);
  } catch (error) {
    post = await getSinglePost(permlink);
  }
  return post ;
}

async function getSinglePost(permlink){
  return await client.database.call('get_content', [hiveId, permlink])
  .then((results) => addPosts(results));
}

function addPosts(items){
  posts.update(value => [...value, ...items
    .reduce((hold, current) =>{
      let post = current;
      post.json_metadata = JSON.parse(current.json_metadata);
      if (post.json_metadata.tags.includes("cross-post") && hideCrossPosts) return hold;
      hold.push(post);
      return hold;
    }, [])
  ]);
}