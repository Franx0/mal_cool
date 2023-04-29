import type { ReactElement } from 'react'
import Separator from '@/components/shared/separator'
import Image from 'next/image'
import dictionary from '@/languages/es'

type Link = {
  name: string,
  alt: string,
  url: string,
  date: string
}

export default function Home() {
  const newsList: Array<ReactElement> = dictionary.news.links.map((link: Link, i: number) => {
    return(
      <li key={i} className="mb-6 text-blue-400">
        <p className="text-sm text-blue-500">{link.date}</p>
        <a href={link.url} hrefLang="es" target="_blank" title={link.alt}>{link.name}</a>
      </li>
    )
  })

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-12 font-mono font-medium">
      {/* Hader */}
      <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:mb-20 items-center justify-between text-lg text-gray-600 text-justify">
        <div className="flex grow-0 mx-auto mb-6 justify-center lg:pr-2 lg:m-0 lg:w-1/5">
          <Image
            src="/images/StopMadcoolLogo.png"
            alt={"Stop MadCool"}
            width={200}
            height={100}
            priority
          />
        </div>
        <div className="flex grow w-full justify-center text-justify lg:m-0 lg:w-4/5">
          { dictionary.header }
        </div>
      </div>
      {/* Press release */}
      <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:pl-10 items-center justify-between text-lg text-justify">
        <p className="w-full mb-6 justify-center">
          { dictionary.pressRelease.description }
        </p>
        <br/>
        <div className="w-full mx-auto mb-6" dangerouslySetInnerHTML={{ __html: dictionary.pressRelease.embed }}></div>
        <div className="w-full justify-center mb-2" dangerouslySetInnerHTML={{ __html: dictionary.pressRelease.download }}></div>
      </div>
      {/* Location */}
      <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:pl-10 items-center justify-between text-lg text-justify">
        <p className="mb-10" dangerouslySetInnerHTML={{__html: dictionary.location}} />
        <Image
          src="/images/Map.png"
          className="m-auto rounded-md"
          alt={"Localización Espacio Mad Cool"}
          width={600}
          height={300}
        />
      </div>
      <Separator />
      <div className="w-full max-w-7xl lg:pl-10 items-center justify-between text-lg text-justify">
        <h4 className="mb-10">{ dictionary.news.title }</h4>
        <ul>
          { newsList }
        </ul>
      </div>
    </main>
  )
}
