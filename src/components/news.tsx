'use client'

import React, { useState } from 'react';
import type { ReactElement } from 'react'
import useSWR from 'swr'
import { formatDate } from '@/utilities'
import { fetcher } from '@/utilities/fetcher'
import Pagination from '@/components/shared/pagination'
import type { New } from '@/pages/api/news/index'

export default function News({dictionary}: any) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error } = useSWR(`/api/news?page=${currentPage}`, fetcher);

  if (error) return <div>Fallo al cargar el listado de noticias</div>;
  if (!data) return <div>Cargando...</div>;

  const { news, pagination } = data
  const titlelize = (string: string) => {
    return string.toLowerCase().replace(/(?:^|[\s-/])\w/g, (match: string) => {
        return match.toUpperCase();
    }).replace('-', '');
  }

  const newsList = (news: Array<New>): Array<ReactElement> => {
    return news.map((nw: New, i: number) => {
      return(
        <li key={i} className="mb-6 text-blue-400">
          <div>
            <span className="text-sm text-blue-500">{formatDate(nw.date)} - </span>
            <span className="text-sm text-blue-800">{titlelize(nw.alt)}</span>
          </div>
          <a className="hover:text-blue-600" href={nw.url} hrefLang="es" target="_blank" title={nw.alt}>{nw.name}</a>
        </li>
      )
    })
  };

  return (
    <div className="w-full max-w-7xl lg:pl-10 items-center justify-between text-lg text-justify">
      <h4 className="mb-10">{ dictionary.title }</h4>
      <ul>
        {newsList(news)}
      </ul>
      <Pagination
        pagination={pagination}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  )
}
