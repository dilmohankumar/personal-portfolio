import {
  faBezierCurve,
  faBookSkull,
  faNetworkWired,
  faRocket,
  faTablet,
} from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Fix import for Link
import cd from "../../assests/cd.jpg";
import Developer from "../../assests/developer.png";
import "./Partnership.css";
import "./responsive.css";
import Maptree from "../../assests/maptree.jpg";

const Partnership = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="tweak-notificationw">
        <div className="tweak-notification">
          <p className="tweak-message">
            Let me know if you'd like further tweaks...
          </p>
          <p className="guidance-message">
            If you're looking for guidance, feel free to reach out to me.
          </p>
        </div>
      </div>
      <div className="developer-image-containers">
        <img
          src={Developer}
          alt="Developer"
          className="developer-images"
          style={{ width: "50%", height: "auto" }}
        />
      </div>
      {/* --------bio-container-start-------- */}
      <div className="bio-container" id="bio-containers">
        <h1 className="bio-title">Being a designer is challenging</h1>
        <p className="bio-description">
          Designing can feel like a whirlwind with new trends to keep up with,
          tools to master, and countless articles demanding your attention. It’s
          no surprise it can feel overwhelming at times I’ve been there too. If
          you’re just starting out or looking for guidance and support, I’m here
          to help
        </p>
      </div>
      {/* --------bio-container-end-------- */}

      <div className="skills-container" id="skills-containers">
        <div className="skill-card" id="skill-cards">
          <img src={cd} alt="" className="skill-image" />
          <h1 className="skill-title">Instant guidance</h1>
          <h1 className="skill-description" id="skill-descriptions">
            $20
          </h1>
          <p className="skill-languages-list">
            1 hour of open and honest conversation tailored to your needs,
            providing actionable advice without any ongoing commitment
          </p>
          <p className="skill-tools">Perfect for:</p>
          <ul className="skill-mentor-stats-list">
            <li>All Developers</li>
          </ul>
          <div className="comman-booklink" onClick={() => navigate("/")}>
            Book a session
          </div>
        </div>
        <div className="skill-card-2" id="skill-cards-2">
          <img src={cd} alt="" className="skill-image" />
          <h1 className="skill-title">Projects Support</h1>
          <h1 className="skill-description" id="skill-descriptions">
            $100
          </h1>
          <p className="skill-languages-list">
            Four hours of focused feedback and in-depth design critique to
            refine your ideas and help you achieve your best results
          </p>
          <p className="skill-tools">Optimal for:</p>
          <ul className="skill-mentor-stats-list">
            <li>Experienced Developers</li>
          </ul>
          <div className="comman-booklink" onClick={() => navigate("/")}>
            Improve your skills
          </div>
        </div>
        <div className="skill-card-3" id="skill-cards-3">
          <img src={cd} alt="" className="skill-image" />
          <h1 className="skill-title">Targeted Education</h1>
          <h1 className="skill-description" id="skill-descriptions">
            $200
          </h1>
          <p className="skill-languages-list">
            Twelve hours of dedicated professional coaching and collaborative
            support to guide you toward achieving your long-term goals
          </p>
          <p className="skill-tools">Ideal for:</p>
          <ul className="skill-mentor-stats-list">
            <li>New Developers</li>
          </ul>
          <div className="comman-booklink" onClick={() => navigate("/")}>
            Start your Learning
          </div>
        </div>
      </div>
      {/* ------end-container----- */}
      <div className="mparent">
        <div className="mentorship-container">
          <h1 className="mentorship-title">
            If you're looking to grow, mentorship can make a difference
          </h1>
          <p className="mentorship-description">
            Book a free consultation to ask questions, explore details, and see
            if it’s the right fit
          </p>
          <Link to="/" className="tellme-links-mentorship-link">
            <WavingHandIcon className="mentorship-icon" />
            Tell me about you
          </Link>
        </div>
      </div>
      {/* ------indroduction-end------- */}
      <div className="mps">
        <div className="mentorship-rewards">
          <h1 className="mentorship-title">Rewards of Mentorship</h1>
          <p className="mentorship-description">
            I’ve gained valuable experience throughout my design career, and I’m
            dedicated to sharing that knowledge to help you succeed.
          </p>
        </div>
      </div>
      <div className="servicesp">
        <div className="services-container">
          <div className="service-item">
            <FontAwesomeIcon icon={faBezierCurve} className="service-icon" />
            <h1 className="service-title">Features</h1>
            <p className="service-description">
              I'll support you in developing confidence and proficiency with
              your design Features.
            </p>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faBookSkull} className="service-icon" />
            <h1 className="service-title">Materials</h1>
            <p className="service-description">
              I'll guide you to valuable learning resources.
            </p>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faNetworkWired} className="service-icon" />
            <h1 className="service-title">Socializing</h1>
            <p className="service-description">
              I'll help you network with professionals to broaden your
              opportunities.
            </p>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faTablet} className="service-icon" />

            <h1 className="service-title">Doorway</h1>
            <p className="service-description">
              I'll connect you with key people and assist in finding
              opportunities.
            </p>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faRocket} className="service-icon" />
            <h1 className="service-title">Progress</h1>
            <p className="service-description">
              I'll point out overlooked aspects and speed up your progress.
            </p>
          </div>
        </div>
      </div>
      {/* -------benifits-membership-end----- */}
      <div className="mentorship-container">
        <p className="mentorship-message">
          I’ve worked with and mentored talented designers across the globe.
        </p>
        <img src={Maptree} alt="Maptree" style={{ width: "80%", height: "auto" }} />
      </div>
      {/* ---------map-end------ */}

      {/* ----------banner-start--------- */}
      <div className="project-container">
        <div className="child-banner">
          <h1 className="project-title">Book Sessions</h1>
          <p className="project-description">
            Curious about mentorship? Let’s have a conversation. The first call
            is my treat.
          </p>
          <Link to="/" className="project-link">
            <WavingHandIcon />
            Tell me about you
          </Link>
        </div>
      </div>
      {/* ----------banner-end--------- */}
    </>
  );
};

export default Partnership;
