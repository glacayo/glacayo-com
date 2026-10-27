import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import { getAllPosts, type Post } from '../../../lib/posts';

export const getStaticPaths = (async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({ params: { lang: post.lang, slug: post.slug }, props: { post } }));
}) satisfies GetStaticPaths;

/** Serves the post's original Markdown source, frontmatter included. */
export const GET: APIRoute<{ post: Post }> = async ({ props }) => {
  const filePath = props.post.entry.filePath;
  const source = filePath ? await readFile(filePath, 'utf8') : (props.post.entry.body ?? '');
  return new Response(source, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
