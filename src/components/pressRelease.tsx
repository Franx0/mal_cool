'use client'

import { trackEvent } from '@/components/shared/customAnalytics'
import DocumentViewer from '@/components/shared/documentViewer'

export default function PressRelease({dictionary}: any) {
  return (
    <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:pl-10 items-center justify-between text-lg text-justify">
      <p className="w-full mb-6 justify-center">
        { dictionary.description }
      </p>
      <br/>
      <DocumentViewer url={dictionary.pressNoteUrl} className="embed-pdf mb-6" />
      <div className="w-full mx-auto">
        <span>{dictionary.download}</span>
        <a className='text-blue-400'
            onClick={() => trackEvent(dictionary.download)}
            href={dictionary.exportUrl}
            hrefLang='es'
            referrerPolicy='origin'
            rel='author'
            target='_blank'
            title={dictionary.exportTitle}
        >{dictionary.exportText}</a>
      </div>
    </div>
  )
};
