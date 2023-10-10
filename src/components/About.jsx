import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import "./About.css";
import aboutImage from "../assets/europeAbout.jpg";

export default function About() {
  return (
    <>
      {/* <Navbar /> */}

      <div id="about" className="about-container">
        <div className="about-content">
          <div className="center-container">
            <div className="image-container">
              <img
                src={aboutImage}
                alt="Europe Map"
                className="centered-image"
              />
              <h1 className="about-title">
                WELCOME TO THE MOST EXTRAORDINARY CONTINENT
              </h1>
            </div>

            <h2 className="about-subtitle">
              <h2 className="sub-heading">
                Discover Why Europe Is the Top Pick for New Travelers
              </h2>
            </h2>
            <p className="about-description">
              "Europe is a tapestry of diversity, where countless cultures
              intertwine. Within its relatively compact borders, you'll
              encounter a kaleidoscope of nations, each with its own language,
              traditions, and stories. But Europe is not just a patchwork of
              countries; it's a symphony of landscapes that range from the
              majestic Alps to the serene Mediterranean coast. Its cities bear
              the weight of history in every cobblestone street and grand
              cathedral. When you visit Europe, you're not just traveling;
              you're embarking on a sensory journey. The rich tapestry of
              European culture offers a cornucopia of flavors, from
              mouthwatering pastries in Paris to savory tapas in Barcelona. And
              let's not forget the history and architecture that envelop you at
              every turn. The ancient ruins, medieval castles, and iconic
              landmarks tell stories that span millennia. In Europe, you don't
              just see the world; you experience it in all its splendid
              diversity." This version emphasizes the cultural richness, diverse
              landscapes, culinary delights, and historical treasures of Europe
              in a more engaging and appealing manner.
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
