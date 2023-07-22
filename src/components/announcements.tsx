import type { ReactElement } from 'react'
import Image from 'next/image'

type AnnouncementImage = {
  alt: string,
  url: string,
  imageUrl: string,
  width: number,
  height: number,
}

type Announcement = {
  title: string,
  subtitle: string,
  date?: string,
  all: Array<AnnouncementImage>
}

export default function Announcements({announcements}: any) {
  if(!announcements) return null

  const announcementsImages = (announcementsImages: Array<AnnouncementImage>): Array<ReactElement> => {
    return announcementsImages.map((announcementImage: AnnouncementImage, i: number) => {
      return(
        <a key={i} className="flex mt-20 mb-4" target="_blank" href={announcementImage.url}>
          <Image
            src={announcementImage.imageUrl}
            alt={announcementImage.alt}
            width={announcementImage.width}
            height={announcementImage.height}
            priority
          />
        </a>
      )
    })
  }

  const announcementsList = (announcements: Array<Announcement>): Array<ReactElement> => {
    return announcements.map((announcement: Announcement, i: number) => {
      return (
        <>
          <div className="flex flex-wrap grow w-full mb-6 justify-left lg:justify-center lg:text-justify text-justify lg:text-2xl text-xl">
            { announcement.date && <span className="flex flex-wrap w-full lg:justify-center text-blue-400 lg:text-xl text-base">{ announcement.date }</span> }
            { announcement.title }
          </div>
          <div className="flex flex-wrap grow w-full text-lg text-gray-600">
            { announcement.subtitle }
          </div>
          { announcement.all.length > 0 &&
            <div className="flex flex-wrap grow w-full justify-center text-justify">
              { announcementsImages(announcement.all)}
            </div>
          }
        </>
      )
    });
  }

  return (
    <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:pl-10 items-center justify-between text-lg text-justify">
      { announcementsList(announcements) }
    </div>
  )
}
