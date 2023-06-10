'use client'

import type { Pagination } from '@/utilities/pagination/index'

export default function Pagination(
  { pagination, onPageChange}: { pagination: Pagination, onPageChange: Function }
) {
  const { totalPages, currentPage } = pagination;
  if (totalPages === 1) return null;

  const pages = () => {
    const rangedPages = Math.min(totalPages, 3);
    const currentPg = currentPage == totalPages ? (currentPage - 1) : currentPage;
    const minPage = Math.min(totalPages, (currentPg - 1));
    const minMaxPage = Math.max(1, minPage);
    let pagesArray: any = [];

    for(let i: number = 0; i < rangedPages; i++) {
      pagesArray[i] = pagesArray[i - 1] + 1;

      if(i >= rangedPages) continue
      if(i == 0) pagesArray[i] = minMaxPage;
      if(i == (rangedPages - 1)) pagesArray[i] = Math.min(pagesArray[i]);
    };

    return pagesArray
  };

  const links = () => {
    return pages().map((page: number) => {
      return (
        <li
          key={page}
          className={
            `lg:mx-2 mx-4
            ${page === currentPage ? 'font-bold' : 'font-normal'}
            `
          }
        >
          <a className="cursor-pointer" onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      )
    });
  }

  const initialLink = () => {
    if(pages().includes(1)) return

    return (
      <li
        key="Inicio"
        className="lg:mx-4 mx-6"
      >
        <a className="cursor-pointer" onClick={() => onPageChange(1)}>
          Inicio
        </a>
        &nbsp;...
      </li>
    )
  }

  const lastLink = () => {
    if(pages().includes(totalPages)) return

    return (
      <li
        key="Fin"
        className="lg:mx-4 mx-6"
      >
        ...&nbsp;
        <a className="cursor-pointer" onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </a>
      </li>
    )
  }

  return (
    <div>
      <ul className="flex lg:justify-start justify-center overflow-hidden">
        {initialLink()}
        {links()}
        {lastLink()}
      </ul>
    </div>
  );
};
