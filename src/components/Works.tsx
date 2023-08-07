import React from "react"
import Tsumihoroboshi from '../static/images/works/tsumihoroboshi.png'
import AutoBicycleBlinker from '../static/images/works/auto_bicycle_blinker.gif'
import MusclePit from '../static/images/works/muscle_pit.jpg'
import LinkHub from '../static/images/works/linkhub.png'
import Nagi from '../static/images/works/hisakawa.gif'
import CalculatorCanvas from '../static/images/works/calculator_canvas.jpg'
import MisereNim from '../static/images/works/misere_nim.jpg'
import SkatePuzzle from '../static/images/works/skate_puzzle.png'
import FifteenPuzzle from '../static/images/works/fifteen_puzzle.jpg'
import Ramen from '../static/images/works/ramen.jpg'
import Portfolio from '../static/images/my_avatar.jpg'

import LaunchIcon from '@material-ui/icons/Launch'
import GitHubIcon from '@material-ui/icons/GitHub'
import Link from '@material-ui/core/Link'
import { green, blue, purple } from '@material-ui/core/colors'

interface CardProps {
  links: { [key: string]: string }
  alt: string
  src: string
  title: string
  description: string
  tags: string[]
  date: string
}

const Card = (props: CardProps) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 sm:w-full p-4">
      <div className="bg-white rounded-none p-6 border-4 border-black h-full ml-auto mr-auto">
        <img
          loading="lazy"
          decoding="async"
          src={`${props.src}`}
          alt={props.alt}
          className="h-48 w-full object-cover object-center mb-8"
        />
        <h3 className="tracking-wide text-gray-800 text-xl font-bold">
          {props.title}
        </h3>
        <span className="text-xs mr-2">{props.date}</span>
        {props.links["GitHub"] != "" && (
          <Link href={`${props.links["GitHub"]}`} target="_blank">
            <GitHubIcon className="mr-2" />
          </Link>
          )}
          {props.links["External"] != "" && (
            <Link href={`${props.links["External"]}`} target="_blank">
              <LaunchIcon className="mr-2"/>
            </Link>
          )}
        
        <p className="leading-relaxed text-gray-700 text-base mt-4">
          {props.description}
        </p>
        
        {props.tags.map((tag: string) =>
          <p className="mt-2 mr-2 text-xs inline-flex items-center font-bold px-3 py-1 rounded-full bg-white text-gray-700 border">{tag}</p>
        )}
      </div>
    </div>
  )
}

const Works = () => {
  
  return (
    <div className="container mx-auto text-gray-700 mt-14 pt-14 font-bold">
      <div className="flex flex-col justify-center items-center px-8">
        <span className="text-4xl text-gray-800 mb-8">Works</span>
        <div className="flex flex-wrap mx-2">
          <Card
            title="Tsumihoroboshi"
            src={Tsumihoroboshi}
            alt="Tsumihoroboshi"
            description="enPiT-BizSysD x 筑波大学にて積読を解決することを目的としたプロダクトを開発しました。スクラムマスターとして機能開発の進捗管理を行いました。"
            links={{"GitHub": "https://github.com/enpitut2023/tsumihoroboshi", "External": ""}}
            tags={["Ruby on Rails", "Heroku"]}
            date="2023/07"
          />

          <Card
            title="Auto自転車ウインカー"
            src={AutoBicycleBlinker}
            alt="Auto自転車ウインカー"
            description="目的地までのナビをしてくれる自転車用のIoTウインカーです。交差点で左右どちらに曲がればいいかを教えてくれます。"
            links={{"GitHub": "https://github.com/nope0124/auto-bicycle-blinker", "External": ""}}
            tags={["Java", "RaspberryPi"]}
            date="2023/06"
          />

          <Card
            title="MusclePit"
            src={MusclePit}
            alt="MusclePit"
            description="痩身サロン MusclePitのHPを作成しました。現在運用を行っています。"
            links={{"GitHub": "", "External": "https://muscle-pit.jp"}}
            tags={["HTML/CSS"]}
            date="2022/11"
          />

          <Card
            title="LinkHub"
            src={LinkHub}
            alt="LinkHub"
            description="リンク集を共有するサービスです。日常で得た知見、役立つ情報を他のユーザーたちと共有していきましょう。技育展2022にて登壇しました。"
            links={{"GitHub": "", "External": "https://colink.jp/nope/themes/NjgC12"}}
            tags={["Ruby on Rails", "AWS"]}
            date="2022/07"
          />

          <Card
            title="スケートパズル"
            src={SkatePuzzle}
            alt="スケートパズル"
            description="進んだ方向に滑る氷の床を活用して、ゴールを目指すゲームです。"
            links={{"GitHub": "https://github.com/nope0124/skate-puzzle", "External": "https://apps.apple.com/au/app/skate-puzzle/id1617595229"}}
            tags={["Unity(C#)", "Firebase"]}
            date="2022/04"
          />

          <Card
            title="久川姉妹の顔識別"
            src={Nagi}
            alt=""
            description="SSD_Kerasを使って久川姉妹の顔識別をしました。精度は7割くらいです。かわいい。"
            links={{"GitHub": "https://github.com/nope0124/ssd_keras_hisakawa", "External": ""}}
            tags={["Python"]}
            date="2022/04"
          />

          <Card
            title="考察ゲーム"
            src={MisereNim}
            alt="考察ゲーム"
            description="数年前の頭脳王で出題された、ターン制でコンピュータと駒を取り合うゲームです。"
            links={{"GitHub": "https://github.com/nope0124/misere-nim", "External": "https://apps.apple.com/au/app/misere-nim/id1584398139"}}
            tags={["Unity(C#)"]}
            date="2021/09"
          />

          <Card
            title="RAMEN"
            src={Ramen}
            alt="RAMEN"
            description="enPiT-BizSysD x 筑波大学にて、マイナンバーカードを用い仮想通貨を送受金するシステムを試作しました。"
            links={{"GitHub": "https://github.com/enpitut2021/ramen-frontend", "External": ""}}
            tags={["Plasmic(TypeScript)"]}
            date="2021/07"
          />

          <Card
            title="電卓キャンバス"
            src={CalculatorCanvas}
            alt="電卓キャンバス"
            description="描いた数式を自動で計算してくれます。現在符号は+-×÷に対応しています。"
            links={{"GitHub": "https://github.com/nope0124/Calculator", "External": ""}}
            tags={["Django(Python)", "JavaScript"]}
            date="2021/03"
          />
          
          <Card
            title="ポートフォリオサイト"
            src={Portfolio}
            alt="ポートフォリオサイト"
            description="自分のポートフォリオサイトです。気分で更新します。"
            links={{"GitHub": "https://github.com/nope0124/portfolio", "External": ""}}
            tags={["React"]}
            date="2021/03"
          />
          
          <Card
            title="15パズル"
            src={FifteenPuzzle}
            alt="15パズル"
            description="有名な15パズルです。Runボタンで最善手を示してくれます。"
            links={{"GitHub": "", "External": "http://nope.soudesune.net/dotinstall/slidingpuzzle/index.html"}}
            tags={["JavaScript"]}
            date="2020/07"
          />
          
        </div>
      </div>
    </div>
  )
}
export default Works