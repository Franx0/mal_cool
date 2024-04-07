import Link from 'next/link'
import Image from 'next/image'
import dictionarySearcher from '@/utilities/dictionary'

export default function Header() {
  const dictionary: any = dictionarySearcher("header");

  return (
    <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:mb-20 items-center justify-between text-lg text-gray-600 text-justify">
      <Link className="flex grow-0 mx-auto mb-6 justify-center lg:pr-2 lg:m-0 lg:w-1/5" title="StopMadcool" href="/" passHref>
        <Image
          src="/images/StopMadcoolLogo.png"
          alt={"Stop MadCool"}
          width={200}
          height={100}
          priority
        />
      </Link>
      <div className="flex grow w-full justify-center text-justify lg:m-0 lg:w-4/5">
        { dictionary.title }
      </div>
    </div>
  )
}
