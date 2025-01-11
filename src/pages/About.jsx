import "./About.css";
import { FaEnvelope, FaPhone, FaPersonBooth } from "react-icons/fa";
import momoPic from "../assets/momo.png";

const About = () => {
  return (
    <div className="about-us">
      {/* Intro Section */}
      <section className="intro">
        <h1>About</h1>
        <p>
          Grace Medical Foundation is a non-profit organization that empowers
          women and girls through health education, mentorship, skills
          development, and STEM. We aim to promote preventive health measures,
          empowering individuals to prioritize their health and make informed
          decisions for a healthier life.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To promote preventive health measures and empower individuals to
            take charge of their health through intensive health education,
            health screening, donations, community-based projects, and
            mentorship.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To ensure good health and well-being by winning the fight against
            almost every disease through the promotion of a healthy lifestyle.
          </p>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="focus-areas">
        <h2>Our Focus Areas</h2>
        <p>
          We focus on empowering women, adolescents, and the elderly through
          education, preventive health measures, and mentorship. Our aim is to
          create a culture of wellness through sustainable interventions.
        </p>
      </section>

      {/* Board Members Section */}
      <section className="board-members">
        <h2>Board Members</h2>
        <div className="members-grid">
          {/* Board Members */}
          <div className="member">
            <img src="/assets/Marian.JPG" alt="Board Member 1" />
            <h3>Miss Marian Grace Mensah</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="member">
            <img src="/assets/Patricia.JPG" alt="Board Member 2" />
            <h3>Patricia Mensah</h3>
            <p>Deputy Director</p>
          </div>
          <div className="member">
            <img src="/assets/Richard.JPG" alt="Board Member 3" />
            <h3>Richard  Dezermy Tenga</h3>
            <p>Director of Finance</p>
          </div>
        </div>
      </section>

      <section className="board-members">
        <h2>Executive Team</h2>
        <div className="members-grid">
          {/* Executive Team */}
          <div className="executive-member">
            <img src="/assets/Marian.JPG" alt="Executive Member 1" />
            <h3>Miss Marian Grace Mensah</h3>
            <p>Chairperson</p>
          </div>
          <div className="executive-member">
            <img src="/assets/Iss.JPG" alt="Executive Member 2" />
            <h3>Amina Salifu Abugri</h3>
            <p>Vice Chairperson</p>
          </div>
          <div className="executive-member">
            <img src="/assets/Bernadine.JPG" alt="Executive Member 3" />
            <h3>Bernardine Essel</h3>
            <p>General Secretary</p>
          </div>
          <div className="executive-member">
            <img src="/assets/Helena.JPG" alt="Executive Member 4" />
            <h3>Helena Acquah</h3>
            <p>Financial Secretary</p>
          </div>
          <div className="executive-member">
            <img src="/assets/Emmanuella.JPG" alt="Executive Member 5" />
            <h3>Emmanuella Asomaning</h3>
            <p>Programs Coordinator</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Get Involved</h2>
        <p>
          Join us in promoting health, education, and skills development for
          women and girls in Ghana. Together, we can make a difference!
        </p>
        <div className="contact-container">
        <div className="contact-info">
          <h3>Reach Out to Us</h3>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p>info@gracemedicalfoundation.online</p>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <p>0546915200</p>
          </div>
          <div className="volunteer-form">
            <FaPersonBooth className="icon" />
            <div className="volunteer-link">
            <a href="https://8vp71rt8.forms.app/membership-application-form">Become a Volunteer/Member</a>
            </div>
          </div>
          </div>
          <div className="contact-info">
            <h3>Donate to Our Cause</h3>
            <p>Send all donations to our mobile money account below:</p>
            <div className="contact-item" style={{marginTop:"12px"}}>
              <img style={{width: "90px", height: "60px", marginRight: "15px"}} src={momoPic} alt="" />
              <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px"}}>
              <div style={{fontSize: "15px", padding: "0px", margin: "0px"}}>+233 546 915 200</div>
              <div style={{fontSize: "14px", padding: "0px", margin: "0px"}}>Grace Medical Foundation</div>
              </div>
            </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default About;
