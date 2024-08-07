import { VideoCard } from "./VideoCard"

const VIDEO = [
  {
    title: "Learn any stack in just 10 days | Hack yourself into learning a new stack",
    author: "Iron Ape",
    views: "100K",
    timestamp: "2 years ago",
    avatar: "iron_ape.jpeg",
    thumbnail: "ecofront.png"
  },
  {
    title: "Learn any stack in just 12 days | Learning a new tech stack",
    author: "Iron Monkey",
    views: "200K",
    timestamp: "1 years ago",
    avatar: "iron_ape.jpeg",
    thumbnail: "ecofront.png"
  },{
    title: "Learn guitar in just 10 days | Hack yourself into learning",
    author: "Iron Man",
    views: "300K",
    timestamp: "3 years ago",
    avatar: "iron_ape.jpeg",
    thumbnail: "ecofront.png"
  },{
    title: "Learn how to code in just 10 days | Hack yourself into learning",
    author: "Iron Man",
    views: "400K",
    timestamp: "2 years ago",
    avatar: "iron_ape.jpeg",
    thumbnail: "ecofront.png"
  }
]

export const VideoGrid = () => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
      {VIDEO.map(video => 
      <div>
        <VideoCard 
        title={video.title}
        author={video.author}
        views ={video.views}
        timestamp={video.timestamp}
        avatar = {video.avatar}
        thumbnail = {video.thumbnail}/>
      </div>)}
    </div>
  )
}
