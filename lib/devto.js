import axios, { AxiosResponse } from 'axios';

import { convertMarkdownToHtml, sanitizeDevToMarkdown } from './markdown';

const username = 'm_ahmad';
const blogURL = 'https://dev.to/m_ahmad';

// Get all users articles from Dev.to and filter by ones with a canonical URL to your blog
export const getAllArticles = async () => {
  const params = { username, per_page: 1000 };
  const headers = { 'api-key': process.env.DEVTO_APIKEY };

  const { data } = await axios.get(`https://dev.to/api/articles/me`, {
    params,
    headers
  });
  const articles = data.map(convertDevtoResponseToArticle);
  return articles;
};

const blogFilter = (article) => article.canonical.startsWith(blogURL);

export const getAllBlogArticles = async () => {
  const articles = await getAllArticles();
  return articles.filter(blogFilter);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const convertDevtoResponseToArticle = (data) => {
  const slug = convertCanonicalURLToRelative(data.canonical_url);
  const markdown = sanitizeDevToMarkdown(data.body_markdown);
  const html = convertMarkdownToHtml(markdown);

  const article = {
    id: data.id,
    title: data.title,
    description: data.description,
    publishedAt: data.published_at,
    devToSlug: data.slug,
    devToPath: data.path,
    devToURL: data.url,
    commentsCount: data.comments_count,
    publicReactionsCount: data.public_reactions_count,
    positiveReactionsCount: data.positive_reactions_count,
    coverImage: data.cover_image,
    tags: data.tag_list,
    canonical: data.canonical_url,
    collectionId: data.collection_id || -1,
    slug,
    markdown,
    html
  };
  return article;
};
