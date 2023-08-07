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
            <Item date="2023/07" title="株式会社Cygames サマーインターン" />
            <Item date="2023/04" title="大学院入学" />
            <Item date="2023/03" title="PIXIV SPRING BOOT CAMP 2023" />
            <Item date="2022/11 ~ " title="株式会社DONUTS 長期インターン" />
            <Item date="2022/03" title="ICPCアジア地区横浜大会2021出場 (Team:shichifuku)" />
            <Item date="2021/11" title="株式会社Cygames 短期インターン" />
            <Item date="2021/07 ~ " title="株式会社インフラトップ 長期インターン" />
            <Item date="2021/03" title="ICPCアジア地区横浜大会2020出場 (Team:shichifuku)" />
            <Item date="2020/05" title="AtCoder水達成" />
            <Item date="2019/11 ~ 2020/12" title="母校パソコン部部活動指導員" />
            <Item date="2019/04" title="大学入学" />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Timeline