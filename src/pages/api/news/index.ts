import { NextApiRequest, NextApiResponse } from 'next'
import { paginate } from "@/utilities/pagination/index"

import newsData from '@/data/news'

export type New = {
  name: string,
  alt: string,
  url: string,
  date: string
}

const index = (req: NextApiRequest, res: NextApiResponse) => {
  const page: number = parseInt(req.query.page as string);
  const data: Array<New> = Array.from(newsData).reverse();
  const news = paginate({ news: data }, page);

  return res.status(200).json(news);
}

export default index
