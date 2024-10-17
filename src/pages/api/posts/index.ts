import { NextApiRequest, NextApiResponse } from 'next'
import { paginate } from "@/utilities/pagination/index"

import postsData from '@/data/posts'

export type Post = {
  slug: string,
  title: string,
  subtitle?: string
  imageUrl: string,
  html: string
}

const index = (req: NextApiRequest, res: NextApiResponse) => {
  const page: number = parseInt(req.query.page as string) || 1;
  const pageSize: number = parseInt(req.query.pageSize as string) || 10;
  const data: Array<Post> = Array.from(postsData);
  const posts = paginate({ posts: data }, page, pageSize);

  return res.status(200).json(posts);
}

export default index
