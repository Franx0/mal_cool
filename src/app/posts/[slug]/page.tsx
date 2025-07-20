import { cache } from 'react'
import { notFound } from 'next/navigation'
import DOMPurify from 'isomorphic-dompurify'
import PostsLayout from '@/app/layouts/postsLayout'
import metadataBuilder from '@/utilities/metadata'
import type { Post } from '@/pages/api/posts/index'

export async function generateMetadata(props: Props): Promise<any> {
  const params = await props.params;

  const {
    slug
  } = params;

  const post: PostData = await getPost(slug);

  return metadataBuilder({
    title: post.title,
    description: post.subtitle!,
    image: post.imageUrl,
    imageAlt: post.title
  });
}

type Props = {
  params: Promise<{
    slug: string
  }>
}

type PostData = {
  slug: string,
  title: string,
  subtitle?: string,
  imageUrl: string,
  html: string
}

export const revalidate = 300;

const getPost: Function = cache(async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL!}/api/posts/${slug}`,
    { cache: 'force-cache' }
  );

  if(response.status == 404) return notFound();

  return response.json()
})

export default async function Page(
  props: {
    params: Promise<{ slug: string }>
  }
) {
  const params = await props.params;

  const {
    slug
  } = params;

  const post: Post = await getPost(slug);
  const markup = { __html: DOMPurify.sanitize(
    post.html,
    {
      ALLOWED_TAGS: ["iframe", "img", "h1", "h2", "span", "br", "p", "i", "blockquote"],
      ADD_ATTR: ["allow", "allowfullscreen", "frameborder"] }
  ) };

  return (
    <PostsLayout>
      <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:pl-10 items-center justify-between text-lg text-justify">
        <div dangerouslySetInnerHTML={markup}></div>
      </div>
    </PostsLayout>
  )
}
