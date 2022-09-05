// Hero contains main picture of video
// Maybe a breaf description
import video from '../assets/ItalyPen-10sec.mp4'

export default function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      

      <div className="content" >
        <h1>Welcome</h1>
        <p>to my Site.</p>
      </div>

    <div>
        I need video or img here
        And maybe a description or Summary about Europe
      <h1>Hero goes here with five or six country Cards</h1>
    </div>
    </div>
  )
}
