/** @type {import('./$types').PageLoad} */
import { findSinglePost } from '$lib/stores/HiveStore';
export const prerender = false;

export async function load({ params }) {
	return await findSinglePost(params.slug);
}
