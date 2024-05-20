import Link from 'next/link'
import Layout from '@/app/layouts'
import { IconArrowBackUp } from '@tabler/icons-react';

const PostsLayout: Function = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Link className= "fixed top-3 right-6" title="Volver" href="/" passHref>
        <IconArrowBackUp className="m-auto" size={32}/>
      </Link>
      <Layout>
        <div className="post-layout">
          {children}
        </div>
      </Layout>
    </>
  )
}

export default PostsLayout
