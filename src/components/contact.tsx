import Link from 'next/link'
import Separator from '@/components/shared/separator'
import { IconBrandTelegram, IconBrandFacebook, IconBrandX } from '@tabler/icons-react';

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
          <Link href={dictionary.telegram} className="text-center text-sm" target="_blank">
            <IconBrandTelegram className="mx-auto" size={48} color={"#30a3e6"}/>
            <span>Telegram</span>
          </Link>
          <Link href={dictionary.facebook} className="text-center text-sm" target="_blank">
            <IconBrandFacebook className="mx-auto" size={48} color={"#0e4892"}/>
            <span>Facebook</span>
          </Link>
          <Link href={dictionary.x} className="text-center text-sm" target="_blank">
            <IconBrandX className="mx-auto" size={45} color={"#000000"}/>
            <span>X</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
