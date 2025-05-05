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
import { Link } from "react-router-dom"; // Fix import for Link
import cd from "../../assests/cd.jpg";
import Developer from "../../assests/developer.png";
import "./Partnership.css";
import "./responsive.css";
import Maptree from "../../assests/maptree.jpg";
import sn from "../../assests/sn.png";
import facebook from "../../assests/facebook.png";
import indeed from "../../assests/indeed.png";
import microsoft from "../../assests/microsoft.png";
import netflix from "../../assests/netflix.png";
import sony from "../../assests/sony.png";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import BalanceSharpIcon from "@mui/icons-material/BalanceSharp";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import { useEffect, useState } from "react";

const Partnership = () => {
  const currency = "INR";

  const paymentHandler = async (amount, receipt, e) => {
    const response = await fetch("https://personal-portfolio-4rrr.onrender.com/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receipt,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);
    var options = {
      key: "rzp_live_Q2f9ZiFest4znE",
      amount,
      currency,
      name: "Onest Coder",
      description: "Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: async function (response) {
        const body = {
          ...response,
        };
        const validateRes = await fetch(
          "https://personal-portfolio-4rrr.onrender.com/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        name: "Dilmohan kumar",
        email: "kdilmohan101@gmail.com",
        contact: "9218600126",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  const slides = [
    {
      text: "problem-solver who truly cares about growth and development. His guidance has been invaluable in helping me refine my skills and think critically about my work",
      name: "Danish",
      title: "Creative Lead",
      company: " Digital marketing",
      image: Developer,
    },
    {
      text: "Dilmohan enthusiasm for design and fresh approach consistently challenged me to think differently and improve my problem-solving skills. He’s highly skilled and deeply invested in the growth of those he mentors",
      name: "johan",
      title: "Tech Co.",
      company: "Amazon",
      image: Developer,
    },
    {
      text: "Dilmohan not only helped pave the way for my career growth but did so with warmth and an approachable demeanor. His determination is contagious, and spending time with him will leave you inspired to develop the same resilience.",
      name: "khalid",
      title: "Shoolay Inc.",
      company: "Shoolay",
      image: Developer,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
    });
  };
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  });

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
            ₨ 0
          </h1>
          <p className="skill-languages-list">
            1 hour of open and honest conversation tailored to your needs,
            providing actionable advice without any ongoing commitment
          </p>
          <p className="skill-tools">Perfect for:</p>
          <ul className="skill-mentor-stats-list">
            <li>All Developers</li>
          </ul>
          <button
            className="comman-booklink"
            onClick={(e) => paymentHandler(200000, "receipt#1", e)}
          >
            Book a session
          </button>
        </div>
        <div className="skill-card-2" id="skill-cards-2">
          <img src={cd} alt="" className="skill-image" />
          <h1 className="skill-title">Projects Support</h1>
          <h1 className="skill-description" id="skill-descriptions">
            ₨ 0
          </h1>
          <p className="skill-languages-list">
            Four hours of focused feedback and in-depth design critique to
            refine your ideas and help you achieve your best results
          </p>
          <p className="skill-tools">Optimal for:</p>
          <ul className="skill-mentor-stats-list">
            <li>Experienced Developers</li>
          </ul>
          <button
            className="comman-booklink"
            onClick={(e) => paymentHandler(1000000, "receipt#2", e)}
          >
            Improve your skills
          </button>
        </div>
        <div className="skill-card-3" id="skill-cards-3">
          <img src={cd} alt="" className="skill-image" />
          <h1 className="skill-title">Targeted Education</h1>
          <h1 className="skill-description" id="skill-descriptions">
            ₨ 0
          </h1>
          <p className="skill-languages-list">
            Twelve hours of dedicated professional coaching and collaborative
            support to guide you toward achieving your long-term goals
          </p>
          <p className="skill-tools">Ideal for:</p>
          <ul className="skill-mentor-stats-list">
            <li>New Developers</li>
          </ul>
          <button
            className="comman-booklink"
            onClick={(e) => paymentHandler(2000000, "receipt#3", e)}
          >
            Start your Learning
          </button>
        </div>
      </div>
      {/* ------end-container----- */}
      <div className="mparent">
        <div className="mentorship-containerr">
          <h1 className="mentorship-title">
            If you're looking to grow, mentorship can make a difference
          </h1>
          <p className="mentorship-description">
            Book a free consultation to ask questions, explore details, and see
            if it’s the right fit
          </p>
          <Link to="/learningintro" className="tellme-links-mentorship-link">
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
        <img
          src={Maptree}
          alt="Maptree"
          style={{ width: "80%", height: "auto" }}
        />
      </div>
      <div className="contributionp">
        <div className="contribution-container">
          <h1 className="contribution-title">
            countless professionals have contributed to renowned companies
          </h1>
          <div className="company-logos">
            <img src={sn} alt="Company Logo" className="company-logoo" />
            <img src={facebook} alt="Facebook Logo" className="company-logo" />
            <img src={indeed} alt="Indeed Logo" className="company-logo" />
            <img
              src={microsoft}
              alt="Microsoft Logo"
              className="company-logo"
            />
            <img src={netflix} alt="Netflix Logo" className="company-logo" />
            <img src={sony} alt="Sony Logo" className="company-logo" />
          </div>
        </div>
      </div>
      {/* ---------map-end------ */}
      <div className="bio-container" id="bio-containers">
        <h1 className="bio-title">The Way I Mentor</h1>
        <p className="bio-description">
          I aim to serve as a catalyst, inspiring you to develop both as a
          designer and as an individual. I value attention to detail and will
          motivate you to reflect, strategize, and envision
        </p>
      </div>
      <div className="authenticity-containerp">
        <div className="authenticity-container">
          <div className="authenticity-content" id="radiu">
            <li className="authenticity-icon">
              <FingerprintIcon />
            </li>
            <h1 className="authenticity-title">Genuineness</h1>
            <p className="authenticity-description">
              I believe in honest feedback because your growth matters to me.
              Together, we'll break things down and build them back stronger and
              better
            </p>
          </div>
          <div className="authenticity-content" id="radiu1">
            <li className="authenticity-icon">
              <YardOutlinedIcon />
            </li>
            <h1 className="authenticity-title">Simplicity</h1>
            <p className="authenticity-description">
              I don't claim to be the best in the design field, as I’m aware
              there’s always more to learn. Design is a constantly evolving goal
              I pursue tirelessly every day
            </p>
          </div>
          <div className="authenticity-content" id="radiu2">
            <li className="authenticity-icon">
              <BalanceSharpIcon />
            </li>
            <h1 className="authenticity-title">Justice</h1>
            <p className="authenticity-description">
              To me, you’re more than a mentee; you’re a fellow designer and an
              equal in the industry. Teaching and learning flow both ways in our
              collaboration
            </p>
          </div>
          <div className="authenticity-content" id="radiu3">
            <li className="authenticity-icon">
              <TakeoutDiningIcon />
            </li>
            <h1 className="authenticity-title">Openness</h1>
            <p className="authenticity-description">
              I may not have all the answers, but I’m eager to guide you to
              valuable resources and share insights from my own design
              experiences
            </p>
          </div>
        </div>
      </div>
      {/* ------mentoring-style-end----- */}
      {/* -------Testimonials-start------- */}
      <div className="slider">
        <div className="childslider">
          <h1>Grateful Mentees</h1>
          <p>Don’t just listen to me—hear it straight from them...</p>
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
              <p className="authorname"> {slides[currentIndex].name}</p>{" "}
              {slides[currentIndex].title}
              {slides[currentIndex].company &&
                ` - ${slides[currentIndex].company}`}
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

      {/* ----------banner-start--------- */}
      <div className="project-container">
        <div className="child-banner">
          <h1 className="project-title">Book Sessions</h1>
          <p className="project-description">
            Curious about mentorship? Let’s have a conversation. The first call
            is my treat.
          </p>
          <Link to="/learningintro" className="project-link">
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
