import React from "react";
import { Link } from "react-router-dom"; // Fix import for Link
import WavingHandIcon from "@mui/icons-material/WavingHand";
import "./Partnership.css";
import "./responsive.css";
import Developer from "../../assests/developer.png";
import cd from "../../assests/cd.jpg";

const Partnership = () => {
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
      <div className="bio-container">
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
          <h1 className="skill-title">Mern Developer</h1>
          <p className="skill-description">
            I enjoy crafting projects from the ground up and turning ideas into
            interactive experiences in the browser.
          </p>
          <p className="skill-languages">Languages I speak</p>
          <p className="skill-languages-list">
            Reactjs, MongoDB, Nodejs, Expressjs, Tailwind, Git, javascript,
            Nextjs,
          </p>
          <p className="skill-tools">Dev Tools</p>
          <ul className="skill-mentor-stats-list">
            <li>VS Code</li>
            <li>Netlify</li>
            <li>vercel</li>
            <li>Github</li>
            <li>material-ui</li>
            <li>version control</li>
          </ul>
        </div>
        <div className="skill-card-2" id="skill-cards-2">
          <img src={cd} alt="" className="skill-image" />
          <h1 className="skill-title">Learning Partner</h1>
          <p className="skill-description">
            I’m passionate about supporting others and love helping them refine
            their skills and reach their potential.
          </p>
          <p className="skill-languages">Experiences I reflect on</p>
          <p className="skill-languages-list">web design, freelancing</p>
          <p className="skill-tools">Mentor stats</p>
          <ul className="skill-mentor-stats-list">
            <li>1+ years experience</li>
            <li>10+ courses</li>
            <li>100+ students</li>
            <li>100+ Learning sessions</li>
            <li>1000+ bits of feedback</li>
          </ul>
        </div>
        <div className="skill-card-3" id="skill-cards-3">
          <img src={cd} alt="" className="skill-image" />
          <h1 className="skill-title">Dilmohan</h1>
          <p className="skill-description">
            Dilmohan kumar dilmohan kumar dilmohan kumar dilmohan kumar dilmohan
            kumar
          </p>
          <p className="skill-languages">kumar dilmohan</p>
          <p className="skill-languages-list">dilmohankumarfdf</p>
          <p className="skill-tools">Deffv dfsd</p>
          <ul className="skill-mentor-stats-list">
            <li>VS dsffCode</li>
            <li>Nedsfftlify</li>
            <li>verdsfcel</li>
            <li>Githfdub</li>
            <li>matfdsferial-ui</li>
            <li>versfsdion control</li>
          </ul>
        </div>
      </div>

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
      {/* ----------banner-start--------- */}
    </>
  );
};

export default Partnership;
