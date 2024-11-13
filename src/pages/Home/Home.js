import { React, useState } from "react";
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
import sn from "../../assests/sn.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { Link } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
const Home = () => {
  const slides = [
    {
      text: "Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.",
      name: "Pascal Tremblay",
      title: "Creative Lead",
      company: "Good Kind",
      image: Developer,
    },
    {
      text: "Matt’s technical and design skills are exceptional. He always finds a way to deliver above expectations and on time.",
      name: "Developer Team",
      title: "Tech Co.",
      company: "fsdf",
      image: amazon,
    },
    {
      text: "Matt brought incredible creativity and clarity to our brand refresh. His work helped us connect with our audience in new ways.",
      name: "Marketing Director",
      title: "Shoolay Inc.",
      company: "fsdfs",
      image: shoolay,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  // const goToPrevious = () => {
  //   setCurrentIndex((prevIndex) => {
  //     return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
  //   });
  // };
  // const goToNext = () => {
  //   setCurrentIndex((prevIndex) => {
  //     return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
  //   });
  // };
  // useEffect(() => {
  //   const interval = setInterval(goToNext, 3000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);
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
      <div className="parent-card-container">
        <div className="project-cards-container">
          <div className="project-card-1">
            <img
              src={Hotelbooking}
              alt="Project screenshot"
              className="card-image"
            />
            <div className="card-content">
              <p className="card-description">
                Hotelbooking webiste with backend data storing on MongoDB and
                with user authenticaion system
              </p>
              <a
                href="https://hotel-booking-coral-pi.vercel.app/home"
                className="card-link"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project-card-1">
            <img
              src={digitalmarket}
              alt="Project screenshot"
              className="card-image"
            />
            <div className="card-content">
              <p className="card-description">
                Simple frontend digital marketing website with react
              </p>
              <a
                href="https://digital-marketing-opal.vercel.app/"
                className="card-link"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project-card-1">
            <img
              src={shoolay}
              alt="Project screenshot"
              className="card-image"
            />
            <div className="card-content">
              <p className="card-description">On Progess...</p>
              <a href="/project-link" className="card-link">
                On Progess
              </a>
            </div>
          </div>
          <div className="project-card-1">
            <img
              src={discordbot}
              alt="Project screenshot"
              className="card-image"
            />
            <div className="card-content">
              <p className="card-description">basic discordbot setup code...</p>
              <a
                href="https://github.com/dilmohankumar/discord-bot"
                className="card-link"
              >
                View Code
              </a>
            </div>
          </div>
          <div className="project-card-1">
            <img src={amazon} alt="Project screenshot" className="card-image" />

            <div className="card-content">
              <p className="card-description">
                Amazon Clone with React, Card Storing System, and Authentication
                System
              </p>
              <a
                href="https://amazon-clone-hazel-zeta.vercel.app/"
                className="card-link"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project-card-1">
            <img
              src={Developer}
              alt="Project screenshot"
              className="card-image"
            />
            <div className="card-content">
              <p className="card-description">ON PROGESS</p>
              <a href="/project-link" className="card-link">
                ON PROGESS
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="github-link">
        <a href="https://github.com/dilmohankumar">
          <p className="github-link-p">Check out more on Github</p>
        </a>
      </div>
      {/* -------------project-cards-end---------- */}
      {/* -------------collaboration-company-start------------- */}
      <div className="collaboration-container">
        <div className="collaboration-header">
          <h1>
            Proud to have collaborated with inspiring companies to bring
            innovative ideas to life and achieve impactful result
          </h1>
        </div>
        <div className="collaboration-image-container">
          <div className="collaboration-image">
            <img src={sn} alt="" />
          </div>
          <div className="collaboration-image">
            <img src={sn} alt="" />
          </div>
          <div className="collaboration-image">
            <img src={sn} alt="" />
          </div>
          <div className="collaboration-image">
            <img src={sn} alt="" />
          </div>
          <div className="collaboration-image">
            <img src={sn} alt="" />
          </div>
          <div className="collaboration-image">
            <img src={sn} alt="" />
          </div>
          <div className="collaboration-image">
            <img src={sn} alt="" />
          </div>
        </div>
      </div>
      {/* -------------collaboration-company-end------------- */}
      {/* -----------Startup-Projects-start--------- */}
      <div className="startup-journey-container">
        <h1 className="startup-journey-title"> My Startup Journey</h1>
        <p className="startup-journey-description">
          {" "}
          I’m a digital product addict. After diving into hundreds of web and
          mobile apps across all kinds of industries, I finally had the
          lightbulb moment: why not channel all this experience into designing
          and building my own creations? From endless scrolls to swipe-right
          magic, I’ve seen it all—and now, it’s time to make something uniquely
          mine
        </p>
      </div>
      {/* -----------Startup-Projects-end--------- */}
      {/* --------Startup-cards-start-------- */}
      <div className="startup-cards-container">
        <div className="startup-card">
          <img src={sn} alt="" className="startup-card-image" />
          <p className="startup-card-description">
            digital marketing website for digital services
          </p>
          <a href="https://socialnetworker.in/" className="startup-card-link-1">
            <span>
              <OpenInNewIcon className="icon-logo" />
              socialnetworker.in
            </span>
          </a>
        </div>
        <div className="startup-card">
          <img src={Developer} alt="" className="startup-card-image" />
          <p className="startup-card-description">
            shoolay best shoes eccomerce site...
          </p>
          <a href="/" className="startup-card-link-2">
            <span>
              <OpenInNewIcon className="icon-logo" />
              shoolay.com
            </span>
          </a>
        </div>
        <div className="startup-card">
          <img src={Developer} alt="" className="startup-card-image" />
          <p className="startup-card-description">
            PayLedger Make easy to track record of rent
          </p>
          <a href="/" className="startup-card-link-3">
            <span>
              <OpenInNewIcon className="icon-logo" />
              PayLedger
            </span>
          </a>
        </div>
        <div className="startup-card">
          <img src={Dev} alt="" className="startup-card-image" />
          <p className="startup-card-description">
            projects are on hold for some time...
          </p>
          <a href="/" className="startup-card-link-4">
            <span>
              <PauseCircleOutlineIcon className="icon-logo" />
              On Hold...
            </span>
          </a>
        </div>
        <div className="startup-card">
          <img src={Dev} alt="" className="startup-card-image" />
          <p className="startup-card-description">
            projects are on hold for some time...
          </p>
          <a href="/" className="startup-card-link-5">
            <span>
              <PauseCircleOutlineIcon className="icon-logo" />
              On Hold...
            </span>
          </a>
        </div>
        <div className="startup-card">
          <img src={Dev} alt="" className="startup-card-image" />
          <p className="startup-card-description">
            projects are on hold for some time...
          </p>
          <a href="/" className="startup-card-link-6">
            <span>
              <PauseCircleOutlineIcon className="icon-logo" />
              On Hold...
            </span>
          </a>
        </div>
        <div className="startup-card">
          <img src={Developer} alt="" className="startup-card-image" />
          <p className="startup-card-description">
            New websites is comming soon in 2025...
          </p>
          <a href="/" className="startup-card-link-7">
            <span>
              <HandshakeIcon className="icon-logo" />
              coming soon...
            </span>
          </a>
        </div>
        <div className="startup-card">
          <img src={Developer} alt="" className="startup-card-image" />
          <p className="startup-card-description">
            New websites is comming soon in 2025...
          </p>
          <a href="/" className="startup-card-link-8">
            <span>
              <HandshakeIcon className="icon-logo" />
              coming soon...
            </span>
          </a>
        </div>
        <div id="increase-width" className="startup-card">
          <img src={Developer} alt="" className="startup-card-image" />
          <p className="startup-card-description">
            New websites is comming soon in 2025...
          </p>
          <a href="/" className="startup-card-link-9">
            <span>
              <HandshakeIcon className="icon-logo" />
              coming soon...
            </span>
          </a>
        </div>
      </div>
      {/* --------Startup-cards-end-------- */}
      {/* --------collab-start------- */}
      <div className="collaboration-section">
        <h1 className="collaboration-title">Excited to collaborate with me?</h1>
        <p className="collaboration-text">
          I am always open to exploring opportunities for collaborating in
          product design or potential partnerships.
        </p>
        <Link to="/" className="collaboration-link">
          <ChatIcon className="collaboration-icon" />
          Let’s start a conversation
        </Link>
      </div>
      {/* --------collab-end------- */}
      {/* -------Testimonials-start------- */}
      <div className="slider">
        <div className="childslider">
          <h1>User Feedback</h1>
          <p>People I've worked with have said some nice things...</p>
          <div className="slide">
            <img
              src={slides[currentIndex].image}
              alt={`${slides[currentIndex].name}'s profile`}
              className="profile-image"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <p>{slides[currentIndex].text}</p>
            <div className="authorcontainer">
              <p className="authorname"> {slides[currentIndex].name}</p>,{" "}
              {slides[currentIndex].title}
              {slides[currentIndex].company &&
                `, ${slides[currentIndex].company}`}
            </div>
          </div>
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={index === currentIndex ? "dot active" : "dot"}
            ></span>
          ))}
        </div>
      </div>
      {/* -------Testimonials-end------- */}
    </div>
  );
};
export default Home;
