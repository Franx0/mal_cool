import Image from 'next/image'

export default function Header({dictionary}: any) {
  return (
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
        { dictionary.title }
      </div>
    </div>
  )
}
