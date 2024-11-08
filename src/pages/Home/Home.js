import React from "react";
import "./Home.css";
import "./responsive.css";
import user from "../../assests/user.png";
import Developer from "../../assests/developer.png";
import Dev from "../../assests/dev.png";
import mentor from "../../assests/mentor.jpg";
import cd from "../../assests/cd.jpg";
import Hotelbooking from "../../assests/hotel-booking.jpg";
import digitalmarket from "../../assests/digitalmarket.jpg";
import discordbot from "../../assests/discordbot.jpg";
import shoolay from "../../assests/shoolay.jpg";
import amazon from "../../assests/amazoneclone.jpg";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Mern Developer & Mentor</h1>
        <p className="home-description">
          I create and code clean, elegant designs, and I’m passionate about my
          work.
        </p>
      </div>
      <div className="image-container">
        <img src={user} alt="user-image" className="user-image" />
        <img
          src={Developer}
          alt="developer-image"
          className="developer-image"
        />
      </div>
      {/* -----bio start----- */}
      <div className="bio-container">
        <h1 className="bio-title">Hey! I'm Dilmohan Let's have some fun.</h1>
        <p className="bio-description">
          MERN developer on a mission to create engaging web applications that
          wow users. With a strong grip on MongoDB, Express, React, and Node.js,
          I thrive on turning ideas into interactive realities. I’m all about
          innovation, collaboration, and having a blast while coding
        </p>
      </div>
      {/* -----bio end------ */}
      {/* -------skills-start----- */}
      <div className="skills-container">
        <div className="skill-card">
          <img src={Dev} alt="" className="skill-image" />
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
        <div className="skill-card-2">
          <img src={mentor} alt="" className="skill-image" />
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
        <div className="skill-card-3">
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
      {/* -------skills-end----- */}
      <div className="recent-work-container">
        <h1 className="recent-work-title">My Recent Work</h1>
        <p className="recent-work-description">
          Here are a few past design projects I've worked on. Want to see more?
          <span className="email-link">
            <a href="mailto:kdilmohan101@gmail.com" className="email-me">
              Email me
            </a>
          </span>
        </p>
      </div>
      {/* ------------ */}
      {/* -------------project-cards-start-------- */}
      <div className="project-cards-container">
        <div className="project-card-1">
          <img src={Hotelbooking} alt="Project screenshot" class="card-image" />
          {/* <div className="card"> */}
          <div class="card-content">
            <p class="card-description">
              Hotelbooking webiste with backend data storing on MongoDB and with
              user authenticaion system
            </p>
            <a
              href="https://hotel-booking-coral-pi.vercel.app/home"
              class="card-link"
            >
              View Project
            </a>
            {/* </div> */}
          </div>
        </div>
        <div className="project-card-1">
          <img
            src={digitalmarket}
            alt="Project screenshot"
            class="card-image"
          />
          <div class="card-content">
            <p class="card-description">
              Simple frontend digital marketing website with react
            </p>
            <a
              href="https://digital-marketing-opal.vercel.app/"
              class="card-link"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-card-1">
          <img src={shoolay} alt="Project screenshot" class="card-image" />
          <div class="card-content">
            <p class="card-description">On Progess...</p>
            <a href="/project-link" class="card-link">
              On Progess
            </a>
          </div>
        </div>
        <div className="project-card-1">
          <img src={discordbot} alt="Project screenshot" class="card-image" />
          <div class="card-content">
            <p class="card-description">basic discordbot setup code...</p>
            <a
              href="https://github.com/dilmohankumar/discord-bot"
              class="card-link"
            >
              View Code
            </a>
          </div>
        </div>
        <div className="project-card-1">
          <img src={amazon} alt="Project screenshot" class="card-image" />

          <div class="card-content">
            <p class="card-description">
              Amazon Clone with React, Card Storing System, and Authentication
              System
            </p>
            <a
              href="https://amazon-clone-hazel-zeta.vercel.app/"
              class="card-link"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-card-1">
          <img src={Developer} alt="Project screenshot" class="card-image" />
          <div class="card-content">
            <p class="card-description">ON PROGESS</p>
            <a href="/project-link" class="card-link">
              ON PROGESS
            </a>
          </div>
        </div>
      </div>

      {/* -------------project-cards-end---------- */}
    </div>
  );
};
export default Home;
