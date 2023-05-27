import Link from 'next/link'
import Separator from '@/components/shared/separator'
import { IconBrandTelegram, IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';

export default function Contact({dictionary}: any) {
  return (
    <div className="flex-wrap w-full max-w-7xl mb-10 lg:pl-10 items-center justify-between text-lg text-justify">
      <div className="lg:inline-flex"
           dangerouslySetInnerHTML={{ __html: dictionary.text }}
      ></div>
      <Separator displayBorder={false} />
      <div className="flex flex-wrap">
        <span className="mb-4">{dictionary.follow}</span>
        <div className="w-full inline-flex justify-around">
          <Link href={dictionary.telegram} target="_blank">
            <IconBrandTelegram className="m-auto" size={48} color={"#30a3e6"}/>
            <span className="text-sm">Telegram</span>
          </Link>
          <Link href={dictionary.facebook} target="_blank">
            <IconBrandFacebook className="m-auto" size={48} color={"#0e4892"}/>
            <span className="text-sm">Facebook</span>
          </Link>
          <Link href={dictionary.twitter} target="_blank">
            <IconBrandTwitter className="m-auto" size={48} color={"#1da1f2"}/>
            <span className="text-sm">Twitter</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
