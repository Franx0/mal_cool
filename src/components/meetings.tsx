import type { ReactElement } from 'react'

type Meeting = {
  name: string,
  docUrl?: string,
}

export default function Meetings({dictionary}: any) {
  const meetingList: Array<ReactElement> = Object.entries(dictionary.all).map(([date, meeting]: [string, any], i: number) => {
    return(
      <li key={i} className="mb-6 text-blue-400">
        <div>
          <span className="text-sm text-blue-500">{date}</span>
        </div>
        <a href={meeting.docUrl} hrefLang="es" target="_blank">{meeting.description}</a>
      </li>
    )
  });

  return (
    <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:pl-10 items-center justify-between text-lg text-justify">
      <div className="flex grow w-full justify-center text-justify  mb-8 lg:mx-0 lg:w-4/5">
        { dictionary.description }
      </div>
      <ul>
        { meetingList }
      </ul>
    </div>
  )
}
