import type { ReactElement } from 'react'

type Link = {
  name: string,
  alt: string,
  url: string,
  date: string
}

export default function News({dictionary}: any) {
  const newsList: Array<ReactElement> = dictionary.links.map((link: Link, i: number) => {
    return(
      <li key={i} className="mb-6 text-blue-400">
        <p className="text-sm text-blue-500">{link.date}</p>
        <a href={link.url} hrefLang="es" target="_blank" title={link.alt}>{link.name}</a>
      </li>
    )
  });

  return (
    <div className="w-full max-w-7xl lg:pl-10 items-center justify-between text-lg text-justify">
      <h4 className="mb-10">{ dictionary.title }</h4>
      <ul>
        { newsList }
      </ul>
    </div>
  )
}
