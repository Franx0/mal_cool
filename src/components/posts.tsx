'use client'

import React, { useState } from 'react'
import type { ReactElement } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'
import { fetcher } from '@/utilities/fetcher'
import Pagination from '@/components/shared/pagination'
import type { Post } from '@/pages/api/posts/index'

export default function Posts({dictionary}: any) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error } = useSWR(`/api/posts?page=${currentPage}&pageSize=3`, fetcher);

  if (error) return <div>Fallo al cargar el listado de artículos</div>;
  if (!data) return null;

  const { posts, pagination } = data
  const postsList = (posts: Array<Post>): Array<ReactElement> => {
    return posts.map((post: Post, i: number) => {
      return(
        <Link key={post.slug} className="h-fit md:inline-block block px-3 mx-1 md:mb-0 mb-4" href={`/posts/${post.slug}`}>
          <div className="md:w-96 min-w-fit rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out" >
            <Image
              className="w-full h-auto"
              src={post.imageUrl}
              alt={post.title}
              width={400}
              height={300}
              priority
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.title}</div>
              { post.subtitle &&
                <p className="text-gray-700 text-base md:h-min h-20 ellipsis md:mb-0 mb-1">
                  {post.subtitle}
                </p>
              }
            </div>
          </div>
        </Link>
      )
    })
  };

  return (
    <div className="w-full max-w-7xl lg:pl-10 items-center justify-between text-lg mb-12">
      { posts.length > 0 &&
        <div className="flex flex-col bg-white m-auto p-auto">
          <h4 className="mb-10">{ dictionary.title }</h4>
          <div className="flex md:h-full h-80 overflow-x-scroll overflow-y-scroll pb-10 no-scrollbar">
            <div className="w-full max-w-7xl md:flex md:flex-nowrap block">
              {postsList(posts)}
            </div>
          </div>
        </div>
      }
      <Pagination
        id="posts-pagination"
        pagination={pagination}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  )
}
