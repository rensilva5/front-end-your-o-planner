// Needs a better Europe description

// import { Container } from "@mantine/core";
import video from "../assets/ItalyPen-10sec.mp4";

export default function Hero() {
  return (
    // <Container>
    <div>
      <div className="overlay"></div>
      <video className="video" src={video} autoPlay loop muted />
      {/* description or Summary about Europe comes here */}
      <h1>Europe and its best destinations</h1>
      <h2>Continent with a variarty of weathers, different cultures, and languages</h2>
      <div className="content">
        <p>Welcome</p>
        <p>to my Site.</p>
      </div>
      </div>
    // </Container>
  );
}