'use client'

import type { ReactElement } from 'react'
import VideoViewer from '@/components/shared/videoViewer'

export default function VideoRelease({dictionary}: any) {
  const videoList = (videoElements: any): Array<ReactElement> => {
    let videos: any = []

    Object.entries<any>(videoElements).map(([_date, video], i: number) => {
      videos.push(<VideoViewer key={i} url={video.src} text={video.text} />)
    })
    return videos
  }

  return (
    <div className="flex flex-wrap w-full max-w-7xl m-auto mb-10 lg:pl-10 items-center justify-center text-lg text-justify">
      { videoList(dictionary) }
    </div>
  )
}
