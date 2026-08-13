import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { videos, sortVideos, VideoGrid } from './Videos'

const VideosPage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const featured = sortVideos(videos).filter(v => v.pinned || v.featured)
  const others = sortVideos(videos).filter(v => !v.pinned && !v.featured)

  return (
    <>
      <section>
        <Navbar />
      </section>
      <div className="container mx-auto text-gray-700 mt-14 pt-14 font-bold">
        <div className="flex flex-col justify-center items-center px-8">
          <span className="text-4xl text-gray-800 mb-8">Videos</span>
          <span className="text-2xl text-gray-800 mb-4 self-start">Featured</span>
          <VideoGrid items={featured} />
          <div className="w-full border-t border-gray-300 my-8" />
          <span className="text-2xl text-gray-800 mb-4 self-start">All Videos</span>
          <VideoGrid items={others} />
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </>
  )
}

export default VideosPage
