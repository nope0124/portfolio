import { Link } from 'react-router-dom'

import Takosen from '../static/images/works/takosen.png'
import AREACUP from '../static/images/works/areacup.png'
import MBTY from '../static/images/works/mbty_exam.gif'
import Promisee from '../static/images/works/promisee.jpg'
import Tsumihoroboshi from '../static/images/works/tsumihoroboshi.png'
import AutoBicycleBlinker from '../static/images/works/auto_bicycle_blinker.gif'
import MusclePit from '../static/images/works/muscle_pit.jpg'
import LinkHub from '../static/images/works/linkhub.png'
import Nagi from '../static/images/works/hisakawa.gif'
import MisereNim from '../static/images/works/misere_nim.jpg'
import Portfolio from '../static/images/my_avatar.jpg'

import LaunchIcon from '@material-ui/icons/Launch'
import GitHubIcon from '@material-ui/icons/GitHub'
import MuiLink from '@material-ui/core/Link'

export interface WorkCardProps {
  links: { [key: string]: string }
  alt: string
  src: string
  title: string
  description: string
  tags: string[]
  date: string
  featured?: boolean
}

export const Card = (props: WorkCardProps) => {
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
        {props.links["GitHub"] !== "" && (
          <MuiLink href={`${props.links["GitHub"]}`} target="_blank">
            <GitHubIcon className="mr-2" />
          </MuiLink>
        )}
        {props.links["External"] !== "" && (
          <MuiLink href={`${props.links["External"]}`} target="_blank">
            <LaunchIcon className="mr-2"/>
          </MuiLink>
        )}

        <p className="leading-relaxed text-gray-700 text-base mt-4">
          {props.description}
        </p>

        {props.tags.map((tag: string) =>
          <p key={tag} className="mt-2 mr-2 text-xs inline-flex items-center font-bold px-3 py-1 rounded-full bg-white text-gray-700 border">{tag}</p>
        )}
      </div>
    </div>
  )
}

export const works: WorkCardProps[] = [
  {
    title: "AREA CUP Webサイト",
    src: AREACUP,
    alt: "AREA CUP",
    description: 'Splatoon非公式コミュニティ大会「AREA CUP（エリア杯）」のWebサイトの開発を行いました。',
    links: {"GitHub": "", "External": "https://areacup.com"},
    tags: ["React", "Ruby on Rails"],
    date: "2025/03",
    featured: true,
  },
  {
    title: "MBTY試験",
    src: MBTY,
    alt: "MBTY試験",
    description: '16性格タイプと、16性格タイプ"っぽい"文字列を見分けるゲームです。50問正解してMBTY合格を目指しましょう。',
    links: {"GitHub": "", "External": "https://unityroom.com/games/mbty_exam"},
    tags: ["Unity(C#)"],
    date: "2024/08",
    featured: true,
  },
  {
    title: "ポケモン界における最強タイプを遺伝的アルゴリズムで求めてみた",
    src: Portfolio,
    alt: "pokemon",
    description: "遺伝的アルゴリズムによるシミュレーションでポケモン界における最強タイプを求めました。第25回進化計算研究会で発表しました。",
    links: {"GitHub": "https://github.com/nope0124/pokemon-genetic-algorithm", "External": "https://qiita.com/nope0124/items/507d9097c834926b04ca"},
    tags: ["Python"],
    date: "2024/02",
    featured: true,
  },
  {
    title: "原宿蛸煎 LP",
    src: Takosen,
    alt: "原宿蛸煎 LP",
    description: '「原宿の新しい定番、サクサクたこせん🐙」原宿蛸煎様のLPを作成しました。',
    links: {"GitHub": "", "External": "https://harajuku-takosen.com"},
    tags: ["HTML/CSS", "WordPress"],
    date: "2025/03",
  },
  {
    title: "promisee",
    src: Promisee,
    alt: "promisee",
    description: "enPiT-BizSysD x 筑波大学にて友達との約束に遅刻したくない人向けのリマインダーLINEBotを開発しました。",
    links: {"GitHub": "https://github.com/enpitut2023/promisee_linebot", "External": "https://liff.line.me/1645278921-kWRPP32q/?accountId=745fdrtq"},
    tags: ["LINEBot", "Flask"],
    date: "2024/01",
  },
  {
    title: "Tsumihoroboshi",
    src: Tsumihoroboshi,
    alt: "Tsumihoroboshi",
    description: "enPiT-BizSysD x 筑波大学にて積読を解決することを目的としたプロダクトを開発しました。スクラムマスターとして機能開発の進捗管理を行いました。",
    links: {"GitHub": "https://github.com/enpitut2023/tsumihoroboshi", "External": ""},
    tags: ["Ruby on Rails", "Heroku"],
    date: "2023/07",
  },
  {
    title: "Auto自転車ウインカー",
    src: AutoBicycleBlinker,
    alt: "Auto自転車ウインカー",
    description: "目的地までのナビをしてくれる自転車用のIoTウインカーです。交差点で左右どちらに曲がればいいかを教えてくれます。",
    links: {"GitHub": "https://github.com/nope0124/auto-bicycle-blinker", "External": ""},
    tags: ["Java", "RaspberryPi"],
    date: "2023/06",
  },
  {
    title: "Muscle Pit LP",
    src: MusclePit,
    alt: "MusclePit",
    description: "痩身サロン Muscle Pit様のLPを作成しました。",
    links: {"GitHub": "", "External": "https://muscle-pit.jp"},
    tags: ["HTML/CSS"],
    date: "2022/11",
  },
  {
    title: "LinkHub",
    src: LinkHub,
    alt: "LinkHub",
    description: "リンク集を共有するサービスです。日常で得た知見、役立つ情報を他のユーザーたちと共有していきましょう。技育展2022にて登壇しました。",
    links: {"GitHub": "", "External": "https://colink.jp/nope/themes/NjgC12"},
    tags: ["Ruby on Rails", "AWS"],
    date: "2022/07",
  },
  {
    title: "久川姉妹の顔識別",
    src: Nagi,
    alt: "",
    description: "SSD_Kerasを使って久川姉妹の顔識別をしました。精度は7割くらいです。かわいい。",
    links: {"GitHub": "https://github.com/nope0124/ssd_keras_hisakawa", "External": ""},
    tags: ["Python"],
    date: "2022/04",
  },
  {
    title: "考察ゲーム",
    src: MisereNim,
    alt: "考察ゲーム",
    description: "数年前の頭脳王で出題された、ターン制でコンピュータと駒を取り合うゲームです。",
    links: {"GitHub": "https://github.com/nope0124/misere-nim", "External": "https://apps.apple.com/au/app/misere-nim/id1584398139"},
    tags: ["Unity(C#)"],
    date: "2021/09",
  },
]

export const WorksGrid = ({ items }: { items: WorkCardProps[] }) => (
  <div className="flex flex-wrap mx-2 w-full">
    {items.map((work) => (
      <Card key={work.title} {...work} />
    ))}
  </div>
)

const Works = () => {
  const featured = works.filter(w => w.featured)

  return (
    <div className="container mx-auto text-gray-700 mt-14 pt-14 font-bold">
      <div className="flex flex-col justify-center items-center px-8">
        <span className="text-4xl text-gray-800 mb-8">Works</span>
        <WorksGrid items={featured} />
        <Link to="/works" className="mt-8 px-8 py-3 border-2 border-black text-gray-800 hover:bg-black hover:text-white text-sm tracking-widest transition-colors">
          View More →
        </Link>
      </div>
    </div>
  )
}

export default Works
