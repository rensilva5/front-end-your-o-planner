// Hero contains main picture of video
// Maybe a breaf description
// import { Container } from "@mantine/core";
import video from "../assets/ItalyPen-10sec.mp4";

export default function Hero() {
  return (
    // <Container>
    <div>
      <div className="overlay"></div>
      {/* description or Summary about Europe comes here*/}
      <video className="video" src={video} autoPlay loop muted />

      <div className="content">
        <h1>Welcome</h1>
        <p>to my Site.</p>
      </div>
      </div>
    // </Container>
  );
}
