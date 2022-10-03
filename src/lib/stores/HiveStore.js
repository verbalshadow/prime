import { writable } from 'svelte/store'
import { hiveId, hiveAPIs, hideCrossPosts } from './Settings';
import { Client } from "@hiveio/dhive";

export const posts = writable([]);
// export const tags = writable(new Set());

const client = new Client(hiveAPIs);

var query = {
  tag: hiveId, // This tag is used to filter the results by a specific post tag
  limit: 25, // This limit allows us to limit the overall results returned to 5
};

client.database.getDiscussions('blog', query)
.then((results) =>{
  posts.update(value => [...value, ...results
    .reduce((hold, current) =>{
      let post = current;
      post.json_metadata = JSON.parse(current.json_metadata);
      if (post.json_metadata.tags.includes("cross-post") && hideCrossPosts) return hold;
      hold.push(post);
      return hold;
    }, [])
  ]);
})
