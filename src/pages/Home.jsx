import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import "./Home.css";
import CountUp from "react-countup";
import impactImg1 from "/src/assets/image4-1.jpeg";
import impactImg2 from "/src/assets/image6-1.jpeg";
import impactImg3 from "/src/assets/image1.jpeg";
import impactImg4 from "/src/assets/impact3.jpg";

import { useInView } from "react-intersection-observer"; // Import the hook

const Home = () => {
  // Using react-intersection-observer to detect when the stats section is in view
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false, // Trigger the animation only once when it comes into view
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <div className="home">
      {/* Hero Section with Carousel */}
      <section className="hero">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          className="carousel"
        >
          <img src={impactImg1} alt="The Grace Foundation" />

          <img src={impactImg2} alt="The Grace Foundation" />

          <img src={impactImg3} alt="The Grace Foundation" />

          <img src={impactImg4} alt="The Grace Foundation" />
        </Carousel>

        {/* <div className="hero-text">
          <h1>Empowering Women, Transforming Communities</h1>
          <p>
            Join us in promoting health, education, and skills for women in
            Ghana.
          </p>
        </div> */}
      </section>

      {/* About Section */}
      <section className="about">
        <h2>What We Do</h2>
        <p>
          Grace Medical Foundation is a non-profit organisation that seeks to
          empower women and girls in Ghana through health education, mentorship,
          and skills development. We focus on preventive health measures, aiming
          to promote a culture of wellness for women, adolescents, and the
          elderly.
        </p>
      </section>

      {/* Impact Section */}
      <section className="impact" ref={statsRef}>
        {" "}
        {/* Attach ref to this section */}
        <h2>Our Impact</h2>
        <div className="stats">
          <div className="stat">
            <h3>
              {statsInView && ( // Only start the count when statsInView is true
                <CountUp end={30000} duration={3} separator="," />
              )}
              +
            </h3>
            <p>Women and girls impacted</p>
          </div>
          <div className="stat">
            <h3>
              {statsInView && <CountUp end={50} duration={3} separator="," />}+
            </h3>
            <p>Communities reached</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
