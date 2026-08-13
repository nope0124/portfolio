import { Link } from 'react-router-dom'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import MuiLink from '@material-ui/core/Link'

export type VideoType = 'landscape' | 'short'

export interface VideoCardProps {
  videoId: string
  title: string
  type: VideoType
  pinned?: boolean
  featured?: boolean
  date: string
}

export const getThumbnailUrl = (videoId: string): string =>
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

export const getVideoUrl = (videoId: string, type: VideoType): string =>
  type === 'short'
    ? `https://www.youtube.com/shorts/${videoId}`
    : `https://www.youtube.com/watch?v=${videoId}`

export const VideoCard = (props: VideoCardProps) => {
  const thumbnailUrl = getThumbnailUrl(props.videoId)
  const videoUrl = getVideoUrl(props.videoId, props.type)

  return (
    <div className="xl:w-1/3 md:w-1/2 w-full p-4">
      <div className="bg-white rounded-none p-6 border-4 border-black h-full ml-auto mr-auto">
        <MuiLink href={videoUrl} target="_blank" underline="none" color="inherit">
          <div className="relative w-full overflow-hidden mb-8 aspect-video cursor-pointer">
            <img
              loading="lazy"
              decoding="async"
              src={thumbnailUrl}
              alt={props.title}
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayArrowIcon style={{ fontSize: 64, color: 'rgba(255,255,255,0.85)' }} />
            </div>
            {(props.pinned || props.featured) && (
              <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 border-2 border-white">
                FEATURED
              </span>
            )}
          </div>
        </MuiLink>
        <h3 className="tracking-wide text-gray-800 text-xl font-bold">
          {props.title}
        </h3>
        <span className="text-xs mr-2">{props.date}</span>
      </div>
    </div>
  )
}

export const videos: VideoCardProps[] = [
  {
    videoId: 'rA6yoDUYWtI',
    title: '【視聴者コーチング】プロが教える『戦う姿勢』XP停滞の原因を辛口指導【SPIX】',
    type: 'landscape',
    pinned: true,
    date: '2026/08',
  },
  {
    videoId: 'D7KCQvOq9hg',
    title: '最強52ガロンの連続ワイプアウト たけのこ｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    date: '2026/08',
  },
  {
    videoId: 'JZvgQvbYmn8',
    title: '斬り開く覚醒の一閃 トド｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    pinned: true,
    date: '2026/05',
  },
  {
    videoId: '-4lVT3lkb48',
    title: 'るすが感動する天才カーリングボム｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    pinned: true,
    date: '2026/04',
  },
  {
    videoId: '9Q_gkPG-WGM',
    title: '頂きへと至る天才の一手 るす｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    date: '2026/05',
  },
  {
    videoId: 'jCR1TSsftiI',
    title: '全てを飲み込む破滅の一撃 一口たべる｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    date: '2026/05',
  },
  {
    videoId: 'jEpkRe-ii1s',
    title: '新時代の若き超新星 シューマ｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    date: '2026/05',
  },
  {
    videoId: 'TYVGlepZRkE',
    title: '決勝八連勝の覇道 ストリーマーせな｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    date: '2026/04',
  },
  {
    videoId: 'hYGNyWUXTjU',
    title: '『全部斬った!!!』『なんだこの男...!!!』試合を一刀両断するあーとデンタル｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    date: '2026/02',
  },
  {
    videoId: 'UeDxbQMAeO8',
    title: '『恐怖です...!!!』実況さえ恐怖するるびぃたんR-PEN｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    date: '2026/02',
  },
  {
    videoId: 'HyUNPlXVhU4',
    title: '勝ち筋を破壊するよっちゃんいか｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    featured: true,
    date: '2026/01',
  },
  {
    videoId: '2OkZ3hyxo-A',
    title: 'のりしおの天才ショクワンダー｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    featured: true,
    date: '2025/12',
  },
  {
    videoId: 'xWW5VpW5dys',
    title: 'ろぶすた〜の鬼追撃｜エリア杯決勝名シーン【AREA CUP】',
    type: 'short',
    date: '2025/12',
  },
  {
    videoId: 'ra_4RE2C5Xo',
    title: '全一スクイックリン きゅ〜｜エリア杯決勝名シーン【AREA CUP】',
    type: 'short',
    date: '2025/11',
  },
  {
    videoId: 'ytMMdrDWSZ4',
    title: '最強前衛のりしおの大無双｜エリア杯決勝名シーン【AREA CUP】',
    type: 'short',
    date: '2025/10',
  },
  {
    videoId: '60eV7iThoNM',
    title: '次世代最強ブラスターちらし｜エリア杯名シーン【AREA CUP】',
    type: 'short',
    date: '2025/10',
  },
  {
    videoId: 'GbTdJMQ_ANE',
    title: '最強マルチウェポナーひまじん｜エリア杯決勝名シーン【AREA CUP】',
    type: 'short',
    date: '2025/09',
  },
  {
    videoId: 'LjhTmDf9IJY',
    title: '勝ち筋メーカー よっちゃんいか｜エリア杯決勝名シーン【AREA CUP】',
    type: 'short',
    date: '2025/09',
  },
  {
    videoId: 'o4jNMB50M-0',
    title: '【スプラトゥーン3】第61回 AREA CUP(エリア杯) れたえるっとたん VS Full house',
    type: 'landscape',
    date: '2026/07',
  },
  {
    videoId: '2W2LnuA0DrM',
    title: '【スプラトゥーン3】Canvas Cup 12th. ちぇけら VS 弓',
    type: 'landscape',
    date: '2026/06',
  },
  {
    videoId: 'FwjuBeRC0uY',
    title: '【スプラトゥーン3】Canvas Cup 11th. 極上 VS 邁進',
    type: 'landscape',
    date: '2026/06',
  },
  {
    videoId: 'EG4FvZuAolk',
    title: '【スプラトゥーン3】AREA CUP Crown～3rd Anniversary～【決勝戦後半】',
    type: 'landscape',
    date: '2026/06',
  },
  {
    videoId: 'Hxs9enuklDU',
    title: '【スプラトゥーン3】AREA CUP Crown～3rd Anniversary～【決勝戦前半】',
    type: 'landscape',
    date: '2026/06',
  },
  {
    videoId: 'MU6p8IVvzMg',
    title: '【スプラトゥーン3】第57回 AREA CUP(エリア杯) 色は匂へど散りぬるを VS きんぐおぶはむ',
    type: 'landscape',
    date: '2026/05',
  },
  {
    videoId: '-otAsxHYWp4',
    title: '【スプラトゥーン3】第39回 AREA CUP(エリア杯) UNG VS Vamos！',
    type: 'landscape',
    date: '2025/08',
  },
  {
    videoId: 'r_ZaL5WQI4w',
    title: '【スプラトゥーン3】第38回 AREA CUP(エリア杯) UNG VS ゴリゴリーズ',
    type: 'landscape',
    date: '2025/07',
  },
  {
    videoId: 'DylnUpw3_EE',
    title: '【スプラトゥーン3】第37回 AREA CUP(エリア杯) ニースパ！電光石火！VS 勇気8ぜう%',
    type: 'landscape',
    date: '2025/06',
  },
  {
    videoId: 'z6Krsnw6pCM',
    title: '【スプラトゥーン3】第36回 AREA CUP(エリア杯) Explosion VS 妖怪ガッツリK',
    type: 'landscape',
    date: '2025/06',
  },
]

export const sortVideos = (v: VideoCardProps[]) =>
  [...v].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return 0
  })

export const VideoGrid = ({ items }: { items: VideoCardProps[] }) => (
  <div className="flex flex-wrap mx-2 w-full">
    {items.map((video) => (
      <VideoCard key={video.videoId} {...video} />
    ))}
  </div>
)

const Videos = () => {
  const pinned = sortVideos(videos).filter(v => v.pinned)

  return (
    <div className="container mx-auto text-gray-700 mt-14 pt-14 font-bold">
      <div className="flex flex-col justify-center items-center px-8">
        <span className="text-4xl text-gray-800 mb-8">Videos</span>
        <VideoGrid items={pinned} />
        <Link to="/videos" className="mt-8 px-8 py-3 border-2 border-black text-gray-800 hover:bg-black hover:text-white text-sm tracking-widest transition-colors">
          View More →
        </Link>
      </div>
    </div>
  )
}

export default Videos
