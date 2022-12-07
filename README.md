# Prime

A Quasi-Static blog for the [Hive Blockchain](https://hive.io).

## Setup

> git clone https://github.com/verbalshadow/prime

### Install dependencies

> cd prime

> npm install

### Replacing the following.

In _src/lib/stores/Settings.js_.

```js
// Site Configuration
export const hiveId = 'brianoflondon';
export const brand = 'World Peace of Mind';
export const hideCrossPosts = true;
export const hideReblogs = false;

// Configure Hive fallbacks if one or more fail
export const hiveAPIs = [
	'https://api.hive.blog',
	'https://api.hivekings.com',
	'https://anyx.io',
	'https://api.openhive.network'
];
```

1. **hiveId** with your hive username.
2. **brand** with the name you would like to call your blog.
3. If you want cross-posts in your blog. This is generally an unwanted behavior. Change **hideCrossPosts** to _false_. This will show the orginial post and the small crossposts as seperate posts.
4. **hideReblogs** is not currently implemented. These are currently shown as _Guest Posts_ in your blog.
5. **hiveAPIs** add or remove Hive API endpoints to ensure access.

### Update main page

In _src/routes/+page.svelte_.

### Build your site

> npm run build

Deploy your site to Netlify. Other hosts may need a different svelte-adaptor.
