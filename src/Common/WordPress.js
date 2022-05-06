import ParentChildMap from './ParentChildMap';

const config = window.config;

export const BLOG_ROUTE = '/page';
export const PERMALINK_ROUTE = '/post';
export const REST_ROUTE = '/wp-json/wp/v2'

const defaultMenu = [
  {
    'url': '/',
    'title': 'Home',
  },
  {
    'url': `${BLOG_ROUTE}/`,
    'title': 'Posts'
  }
];

export const WP_TITLE = config.title;
export const WP_TAGLINE = config.tagline;
export const WP_MENU = [...defaultMenu, ...ParentChildMap(config.menu)];
export const FRONT_PAGE = config.frontPage;
export const POSTS_PER_PAGE = parseInt(config.postsPerPage);
export const POST_COUNT = parseInt(config.postCount);
export const WP_PAGES = ParentChildMap(config.pages);
export const WP_IMAGES = config.images;
export const WP_FOOTER = config.footer;

export const TAG_TYPE = {
  value: 'tag',
  param: 'tags',
  route: `${PERMALINK_ROUTE}/tag`,
  list: config.taxonomies.tags
}

export const CATEGORY_TYPE = {
  value: 'category',
  param: 'categories',
  route: `${PERMALINK_ROUTE}/category`,
  list: config.taxonomies.categories
}

export const POST_TYPE = {
  value: 'post',
  param: 'posts'
}

export const PAGE_TYPE = {
  value: 'page',
  param: 'pages'
}