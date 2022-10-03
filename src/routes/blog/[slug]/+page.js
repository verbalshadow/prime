/** @type {import('./$types').PageLoad} */
import { posts } from '../../../lib/stores/HiveStore'
let workingPosts;
posts.subscribe( value => {
    workingPosts = value;
})

export async function load({ params }){
    return workingPosts.find(element => element.permlink === params.slug)
}