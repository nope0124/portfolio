import { useState } from 'react'

import Donuts from '../static/images/timeline/donuts.png'
import Recruit from '../static/images/timeline/recruit.jpeg'
import Pixiv from '../static/images/timeline/pixiv.png'
import Cygames from '../static/images/timeline/cygames.png'
import GREE from '../static/images/timeline/gree.png'
import DMM from '../static/images/timeline/dmm.png'

interface ItemProps {
  date: string
  title: string
  text?: string
  image?: string
  imageContain?: boolean
}

const CareerItem = (props: ItemProps) => {
  return (
    <li className="mb-8">
      <div className="flex items-center mb-1">
        {props.image ? (
          <div className="relative z-10 rounded-full flex-shrink-0 overflow-hidden border border-gray-300 bg-white" style={{ height: "72px", width: "72px" }}>
            <img
              loading="lazy"
              decoding="async"
              src={props.image}
              alt={props.title}
              className={`h-full w-full ${props.imageContain ? 'object-contain' : 'object-cover'}`}
            />
          </div>
        ) : (
          <div className="relative z-10 bg-gray-800 rounded-full flex-shrink-0" style={{ height: "72px", width: "72px" }}></div>
        )}
        <div className="flex-1 ml-4">
          ({props.date}) &nbsp;&nbsp; {props.title}
        </div>
      </div>
    </li>
  )
}

const EducationItem = (props: ItemProps) => {
  return (
    <li className="mb-8">
      <div className="flex items-center mb-1">
        <div className="relative z-10 bg-gray-800 rounded-full h-8 w-8 flex-shrink-0"></div>
        <div className="flex-1 ml-4">
          ({props.date}) &nbsp;&nbsp; {props.title}
        </div>
      </div>
    </li>
  )
}

const careerItems: ItemProps[] = [
  { date: "2025/04 ~ ", title: "Webエンジニアとして勤務中" },
  { date: "2023/11 ~ 2024/09", title: "株式会社DONUTS ゲーム事業部 長期インターン", image: Donuts },
  { date: "2023/09 ~ 2023/10", title: "RECRUIT Internship for Engineers 2023", image: Recruit, imageContain: true },
  { date: "2023/08", title: "Cygames サマーインターンシップ 2023", image: Cygames },
  { date: "2023/08", title: "GREE Camp 2023", image: GREE },
  { date: "2023/03", title: "PIXIV SPRING BOOT CAMP 2023", image: Pixiv },
  { date: "2022/11 ~ 2023/08", title: "株式会社DONUTS ジョブカン事業部 長期インターン", image: Donuts },
  { date: "2021/07 ~ 2022/12", title: "株式会社インフラトップ 長期インターン", image: DMM },
]

const educationItems: ItemProps[] = [
  { date: "2023/04", title: "大学院入学" },
  { date: "2022/03", title: "ICPCアジア地区横浜大会2021出場 (Team:shichifuku)" },
  { date: "2021/03", title: "ICPCアジア地区横浜大会2020出場 (Team:shichifuku)" },
  { date: "2020/05", title: "AtCoder水達成" },
  { date: "2019/11 ~ 2020/12", title: "母校パソコン部部活動指導員" },
  { date: "2019/04", title: "大学入学" },
]

type Tab = 'career' | 'education'

const Timeline = () => {
  const [activeTab, setActiveTab] = useState<Tab>('career')

  return (
    <div className="container mx-auto text-gray-700 font-bold mt-14 pt-14">
      <div className="container mx-auto flex flex-col items-center w-11/12">
        <span className="text-4xl text-gray-800">Timeline</span>
        <div className="flex mt-8 mb-6">
          <button
            className={`px-6 py-2 text-sm tracking-widest border-2 transition-colors ${
              activeTab === 'career'
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-800 border-black hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('career')}
          >
            Career
          </button>
          <button
            className={`px-6 py-2 text-sm tracking-widest border-2 border-l-0 transition-colors ${
              activeTab === 'education'
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-800 border-black hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>
        <div className="relative w-9/12">
          <div
            className="border-r-2 border-gray-800 absolute h-full"
            style={{ left: activeTab === 'career' ? "35px" : "15px", zIndex: 0 }}
          ></div>
          <ul className="list-none m-0 p-0">
            {activeTab === 'career'
              ? careerItems.map((item, i) => <CareerItem key={i} {...item} />)
              : educationItems.map((item, i) => <EducationItem key={i} {...item} />)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Timeline
