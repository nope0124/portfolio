import React from "react"

interface ItemProps {
  date: string
  title: string
  text?: string
}

const Item = (props: ItemProps) => {
  return (
    <li className="mb-6">
      <div className="flex items-center mb-1">
        <div className="bg-gray-800 rounded-full h-8 w-8"></div>
        <div className="flex-1 ml-12">
          ({props.date}) &nbsp;&nbsp; {props.title}
        </div>
      </div>
      <div className="ml-20">{props.text ?? ""}</div>
    </li>
  )
}

const Timeline = () => {
  return (
    <div className="container mx-auto text-gray-700 font-bold mt-14 pt-14">
      <div className="container mx-auto flex flex-col items-center w-11/12">
        <span className="text-4xl text-gray-800">Timeline</span>
        <div className="mt-8 relative w-9/12">
          <div
            className="border-r-2 border-gray-800 absolute h-full"
            style={{ left: "15px" }}
          ></div>
          <ul className="list-none m-0 p-0">
            <Item date="2019/04" title="筑波大学入学" />
            <Item date="2019/11 ~ 2020/12" title="日出学園パソコン部部活動指導員" />
            <Item date="2020/05" title="AtCoder水達成" />
            <Item date="2021/03" title="ICPC Asia Yokohama Regional 2020 (Team:shichifuku)" />
            <Item date="2021/07 ~ " title="Infratop Internship" />
            <Item date="2021/07" title="enPiT夏合宿でアジャイル開発を経験" />
            <Item date="2021/09" title="自作ゲームをAppStoreで初配信" />
            <Item date="2021/11" title="Cygames Internship" />
            <Item date="2022/03" title="ICPC Asia Yokohama Regional 2021 (Team:shichifuku)" />
            <Item date="現在" title="Webアプリ開発中..." />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Timeline