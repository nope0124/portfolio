import React from 'react'

import CPlusPlusLogo from '../static/images/skills/c_plusplus.png'
import PythonLogo from '../static/images/skills/python.png'
import RubyOnRailsLogo from '../static/images/skills/ruby_on_rails.png'
import CSharpLogo from '../static/images/skills/c_sharp.png'
import ProcessingLogo from '../static/images/skills/processing.png'


interface CardProps {
  alt: string
  src: string
  title: string
  description: string
}

const Card = (props: CardProps) => {
  return (
    <div className="xl:w-1/5 md:w-1/3 sm:w-full p-4 ml-auto mr-auto">
      <div className="bg-white rounded-none p-6 h-full">
        <img
          loading="lazy"
          decoding="async"
          src={`${props.src}`}
          alt={props.alt}
          className="h-24 w-auto object-cover ml-auto mr-auto mb-4"
        />
        <h3 className="tracking-wide text-gray-800 text-base font-bold text-center">
          {props.title}
        </h3>
        <p className="leading-relaxed text-gray-400 text-sm mt-4 text-center">
          {props.description}
        </p>
      </div>
    </div>
  )
}


const Skills: React.FC = () => {

  return (
    <div className="container mx-auto text-gray-700 mt-14 pt-14 font-bold" id="works">
      <div className="flex flex-col justify-center items-center px-8">
        <span className="text-4xl text-gray-800 mb-8">Skills</span>
        <div className="flex flex-wrap mx-2">
          <Card
            title="C++"
            src={CPlusPlusLogo}
            alt="C++ロゴ"
            description="競プロ / ゲームAI開発"
          />

          <Card
            title="C#"
            src={CSharpLogo}
            alt="C#ロゴ"
            description="Unityゲーム開発"
          />

          <Card
            title="Python"
            src={PythonLogo}
            alt="Pythonロゴ"
            description="AIアプリ開発 / 機械学習"
          />

          <Card
            title="Ruby on Rails"
            src={RubyOnRailsLogo}
            alt="RubyOnRailsロゴ"
            description="Webアプリ開発"
          />

          <Card
            title="Processing"
            src={ProcessingLogo}
            alt="Processingロゴ"
            description="デザイン作成"
          />
          
        </div>
      </div>
    </div>
  );
}

export default Skills;