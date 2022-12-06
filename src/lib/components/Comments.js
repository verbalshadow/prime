import {postComments, commentCache, client } from "../stores/HiveStore";

export async function findPostComments(author, permlink) {
  if (!commentCache[permlink]) {
    await getPostComments(author, permlink);
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