import { persist, createIndexedDBStorage } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store'
import { hiveId, hiveAPIs, hideCrossPosts } from './Settings';
import { Client } from "@hiveio/dhive";

export const posts = persist(writable([]), createIndexedDBStorage(), "posts");
export const postComments = persist(writable({}), createIndexedDBStorage(), "postcomments");
// export const tags = writable(new Set());

let postsCache;
let commentCache;

postComments.subscribe(value => {
  commentCache = value
})
posts.subscribe(value => {
  postsCache = value;
})

const client = new Client(hiveAPIs);

var query = {
  tag: hiveId, // This tag is used to filter the results by a specific post tag
  limit: 25, // This limit allows us to limit the overall results returned to 5
};

client.database.getDiscussions('blog', query)
  .then((results) => addPosts(results))

export async function findSinglePost(permlink) {
  let post = await postsCache.find(element => element.permlink === permlink);
  if (post) {
    return post
  } else {
    await getSinglePost(permlink);
    return await postsCache.find(element => element.permlink === permlink);
  };
}

async function getSinglePost(permlink) {
  return await client.database.call('get_content', [hiveId, permlink])
    .then((results) => addPosts([results]));
}

function addPosts(items) {
  posts.update(value => [...value, ...items
    .reduce((hold, current) => {
      let post = current;
      post.json_metadata = JSON.parse(current.json_metadata);
      if (post.json_metadata.tags.includes("cross-post") && hideCrossPosts) return hold;
      hold.push(post);
      return hold;
    }, [])
  ]);
}

export async function findPostComments(author, permlink) {
  let comments = commentCache[permlink]
  if (comments) {
    return comments
  } else {
    await getPostComments(author, permlink);
    return commentCache[permlink];
  }
}

async function getPostComments(author, permlink) {
  let cmnts = await client.database.call('get_content_replies', [author, permlink])
    .then((results) => addPostComments(results, permlink));
  return cmnts;
}

function addPostComments(items, permlink) {
  postComments.update(current => Object.assign({}, current, { [permlink]: items }))
}