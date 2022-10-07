import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      edge: false,
      split: false
    })
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess(),
		mdsvex({
		  extensions: ['.md'],
		//   layout: {
		// 	blog: 'src/routes/blog/post.svelte'
		//   },
		})
	  ]
};

export default config;
