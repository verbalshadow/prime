import { writable } from 'svelte/store'
import { Client } from "@hiveio/dhive";

export const posts = writable([]);

const client = new Client(["https://api.hive.blog", "https://api.hivekings.com", "https://anyx.io", "https://api.openhive.network"]);

var query = {
  tag: 'verbalshadow', // This tag is used to filter the results by a specific post tag
  limit: 25, // This limit allows us to limit the overall results returned to 5
};

client.database.getDiscussions('blog', query)
.then((results) =>{
  posts.update(value => [...value, ...results]);
})
