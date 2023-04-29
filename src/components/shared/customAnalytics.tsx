import { isProd } from '@/utilities'
import { Analytics } from '@vercel/analytics/react'
import va from '@vercel/analytics';

export const trackEvent: Function = (eventText: string) => {
  if(isProd()) return va.track(eventText);
}

export default function CustomAnalytics() {
  return (
    isProd() ? <Analytics /> : null
  )
};
