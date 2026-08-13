import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { works, WorksGrid } from './Works'

const WorksPage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const featured = works.filter(w => w.featured)
  const others = works.filter(w => !w.featured)

  return (
    <>
      <section>
        <Navbar />
      </section>
      <div className="container mx-auto text-gray-700 mt-14 pt-14 font-bold">
        <div className="flex flex-col justify-center items-center px-8">
          <span className="text-4xl text-gray-800 mb-8">Works</span>
          <span className="text-2xl text-gray-800 mb-4 self-start">Featured</span>
          <WorksGrid items={featured} />
          <div className="w-full border-t border-gray-300 my-8" />
          <span className="text-2xl text-gray-800 mb-4 self-start">All Works</span>
          <WorksGrid items={others} />
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </>
  )
}

export default WorksPage
