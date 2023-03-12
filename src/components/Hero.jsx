// import { Container } from "@mantine/core";
import video from "../assets/ItalyPen-10sec.mp4";

export default function Hero() {
  return (
    // <Container>
    <div>
        <div className="overlay"></div>
      <video className="video" src={video} autoPlay loop muted />
      {/* </video> */}
      <div className="content">
        <p>Welcome</p>
        <p>to my Site.</p>
      </div>
      <h1 className="main-description">Europe the best destination</h1>
      <div className="content-description">
      <p>It is not a secret Europe is filled with beautiful places to travel and visit. It is described as a “peninsula of peninsula.”
      A peninsula is a piece of land surrounded by water on three sides. Europe is a home to majestic mountain ranges, captivating  coastlines, and idyllic islands as well as the Mediterranean, Black, and Caspian seas to the south; moreover, Europe boasts some of the most spectacular scenery on Earth.</p> 
      
      <p>While its world-class grand capitals of London, Paris, and Rome attract the most visitors the continent's 44 countries each have delightfully different grand cities and, fairytale-like towns, soaring mountain ranges, and gorgeous beaches, there is a seemingly endless list of gorgeous places and attractions to explore in addition to the combination of sunshine, beaches, scenery, and historical monuments.</p>
      <p>The outstanding growth industry of tourism—supplementing business, professional, and student travel—brings employment and foreign exchange to many Europeans. The variety of languages and cultures make Europe even a more exotic Continent.</p>
      </div>
      </div>
    // </Container>
  );
}