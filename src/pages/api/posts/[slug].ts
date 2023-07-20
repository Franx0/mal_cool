import { NextApiRequest, NextApiResponse } from 'next'
import postsData from '@/data/posts'
import type { Post } from '@/pages/api/posts/index'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug: postSlug } = req.query as { slug: string};
  const data: Post | undefined = Array.from(postsData).find(({ slug }) => slug === postSlug);

  if(data)
    return res.status(200).json(data);
  else
    return res.status(404).json({
      code: `NoEncontrado`,
      message: `No hemos encontrado ningún artículo`
    });
}
