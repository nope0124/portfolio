import React from "react"
import TwitterBotClassifier from '../static/images/works/twitter_bot_classifier.jpg'
import CalculatorCanvas from '../static/images/works/calculator_canvas.jpg'
import MisereNim from '../static/images/works/misere_nim.jpg'
import SkatePuzzle from '../static/images/works/skate_puzzle.png'
import FifteenPuzzle from '../static/images/works/fifteen_puzzle.jpg'
import Ramen from '../static/images/works/ramen.jpg'

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
            title="考察ゲーム"
            src={MisereNim}
            alt="考察ゲーム"
            description="数年前の頭脳王で出題された、ターン制でコンピュータと駒を取り合うゲームです。"
            links={{"GitHub": "https://github.com/nope0124/misere-nim", "External": "https://apps.apple.com/au/app/misere-nim/id1584398139"}}
            tags={["Unity(C#)"]}
            date="2021/09"
          />

          <Card
            title="スケートパズル"
            src={SkatePuzzle}
            alt="スケートパズル"
            description="進んだ方向に滑る氷の床を活用して、ゴールを目指すゲームです。"
            links={{"GitHub": "https://github.com/nope0124/skate-puzzle", "External": "https://apps.apple.com/au/app/skate-puzzle/id1617595229"}}
            tags={["Unity(C#)"]}
            date="2022/04"
          />

          <Card
            title="電卓キャンバス"
            src={CalculatorCanvas}
            alt="電卓キャンバス"
            description="描いた数式を自動で計算してくれます。現在符号は+-×÷に対応しています。"
            links={{"GitHub": "https://github.com/nope0124/Calculator", "External": "https://calculatorcanvas.herokuapp.com"}}
            tags={["Django(Python)", "JavaScript"]}
            date="2021/03"
          />

          <Card
            title="RAMEN"
            src={Ramen}
            alt="RAMEN"
            description="enPiT-BizSysD x 筑波大学にて、マイナンバーカードを用い仮想通貨を送受金するシステムを試作しました。結果、完成には至らず送金部分のみ完成しました。"
            links={{"GitHub": "https://github.com/enpitut2021/ramen-frontend", "External": ""}}
            tags={["Plasmic"]}
            date="2021/07"
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

          <Card
            title="Twitter Bot Classifier"
            src={TwitterBotClassifier}
            alt="Twitter Bot Classifier"
            description="FF数などのユーザー情報を元に、そのユーザーがどれだけBotに近いかを測定します。"
            links={{"GitHub": "https://github.com/nope0124/TwitterBotClassifier", "External": ""}}
            tags={["Django(Python)"]}
            date="2021/03"
          />

          
          
          
          
        </div>
      </div>
    </div>
  )
}
export default Works