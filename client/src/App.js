import ArrowIcon from "./svgs/Arrow";
import AboutIcon from "./svgs/About";
import AdobeIcon from "./svgs/Adobe";
import AtomIcon from "./svgs/Atom";
import BackendIllustration from "./svgs/Backend";
import CodeIllustration from "./svgs/Code";
import CssIcon from "./svgs/Css";
import DiscordIcon from "./svgs/Discord";
import ExpressIcon from "./svgs/Express";
import FigmaIcon from "./svgs/Figma";
import FrontendIllustration from "./svgs/Frontend";
import GithubIcon from "./svgs/Github";
import HtmlIcon from "./svgs/Html";
import JavascriptIcon from "./svgs/Javascript";
import MenuIcon from "./svgs/Menu";
import MongodbIcon from "./svgs/Mongodb";
import NodeIcon from "./svgs/Node";
import ReactIcon from "./svgs/React";
import ReduxIcon from "./svgs/Redux";
import ResponsiveIllustration from "./svgs/Responsive";
import SlackIcon from "./svgs/Slack";
import SublimeIcon from "./svgs/Sublime";
import TelegramIcon from "./svgs/Telegram";
import VSIcon from "./svgs/VS";
import axios from "axios";
import { Link, animateScroll as scroll } from "react-scroll";

import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [responsiveNav, toggleResponsiveNav] = useState(false);
  const [scrollNav, toggleScrollNav] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      toggleScrollNav(true);
    } else {
      toggleScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const { name, email, title, message } = contactInfo;

  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      setContactInfo({ ...contactInfo, [name]: value });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/send_email ", {
        contactInfo,
      });
      setContactInfo({
        name: "",
        email: "",
        title: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div id="bgWrapper">
        <nav className={scrollNav ? "scrollNav" : undefined}>
          <h1>Berniko</h1>
          <ul className={responsiveNav ? "responsive-nav" : undefined}>
            <li>
              <Link
                activeClass="active"
                to="bgWrapper"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div onClick={() => toggleResponsiveNav(!responsiveNav)}>
            <MenuIcon />
          </div>
        </nav>
        <header>
          <div id="socialmedia-wrapper-one">
            <TelegramIcon />
            <GithubIcon />
            <DiscordIcon />
            <SlackIcon />
          </div>
          <h1>
            I am <span>Giorgi</span>
          </h1>
          <h2>Full Stack Web Developer And Web Designer</h2>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-110}
          >
            <span>Contact</span> <ArrowIcon id="anim-svg" />
          </Link>
          <div id="forest-image"></div>
        </header>
      </div>
      <section id="about">
        <div id="header-wrapper">
          <div></div>
          <h1>About me</h1>
        </div>
        <article>
          <aside>
            <h4>Greetings!</h4>
            <p>
              I am full stack web developer, as well as web designer with 3-4
              years of experience in this field. I was born in Georgia, Tbilisi.
            </p>
            <p>
              I am willing to advance in my career and become professional
              website developer
            </p>
          </aside>
          <aside>
            <AboutIcon />
          </aside>
        </article>
      </section>
      <section id="skills">
        <div id="header-wrapper">
          <div></div>
          <h1>Skills</h1>
        </div>
        <article>
          <h2>Front end</h2>
          <aside>
            <div className="skillArea">
              <div className="skillWrapper">
                <HtmlIcon />
                <span style={{ color: "#FFAF40" }}>HTML</span>
              </div>
              <div className="skillWrapper">
                <CssIcon />
                <span style={{ color: "#7EFFF5" }}>CSS</span>
              </div>
              <div className="skillWrapper">
                <JavascriptIcon />
                <span style={{ color: "#FFF200" }}>Javascript</span>
              </div>
              <div className="skillWrapper">
                <ReduxIcon />
                <span style={{ color: "#BE7BE0" }}>Redux</span>
              </div>
              <div className="skillWrapper">
                <ReactIcon />
                <span style={{ color: "#30D7D5" }}>React</span>
              </div>
            </div>
            <FrontendIllustration />
          </aside>
          <h2>Back end</h2>
          <aside>
            <BackendIllustration />
            <div className="skillArea">
              <div className="skillWrapper">
                <NodeIcon />
                <span style={{ color: "#32FF7E" }}>Node.js</span>
              </div>
              <div className="skillWrapper">
                <ExpressIcon />
                <span style={{ color: "#FFFFFF" }}>Express.js</span>
              </div>
              <div className="skillWrapper">
                <MongodbIcon />
                <span style={{ color: "#55E6C1" }}>MongoDB</span>
              </div>
            </div>
          </aside>
        </article>
      </section>
      <section id="projects">
        <div id="header-wrapper">
          <div></div>
          <h1>Projects</h1>
        </div>
        <article>
          <div
            onClick={() =>
              window.open("https://berniko-store.herokuapp.com", "_blank")
            }
          >
            <div></div>
            <aside>
              <h5>
                Name: <span>Berniko-store</span>
              </h5>
              <h5>
                Description:
                <span>
                  Ecommerce type website where you can sell virtual products.
                  Accepts crypto payment and has full authentication
                </span>
              </h5>
            </aside>
          </div>
          <div
            onClick={() =>
              window.open("https://skillsense-5df5e.web.app/", "_blank")
            }
          >
            <div></div>
            <aside>
              <h5>
                Name: <span>Skillsense</span>
              </h5>
              <h5>
                Description:
                <span>A static landing page</span>
              </h5>
            </aside>
          </div>
          <div
            onClick={() =>
              window.open("https://berniko-bluemeg.herokuapp.com", "_blank")
            }
          >
            <div></div>
            <aside>
              <h5>
                Name: <span>Berniko-bluemag</span>
              </h5>
              <h5>
                Description:
                <span>
                  I made this landing page for a client for his company
                </span>
              </h5>
            </aside>
          </div>
          <div
            onClick={() =>
              window.open("https://berniko-mirtillo.herokuapp.com", "_blank")
            }
          >
            <div></div>
            <aside>
              <h5>
                Name: <span>Berniko-mirtillo</span>
              </h5>
              <h5>
                Description:
                <span>I made this website for a client for his company</span>
              </h5>
            </aside>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://www.figma.com/file/5ERpQvCHeWAeU0ZEw5x9aT/Untitled?node-id=0%3A1",
                "_blank"
              )
            }
          >
            <div></div>
            <aside>
              <h5>
                Name: <span>Berniko BIMPBIT</span>
              </h5>
              <h5>
                Description:
                <span>Revamped design I made for the client website.</span>
              </h5>
            </aside>
          </div>
          <div
            onClick={() =>
              window.open("https://pvphit.herokuapp.com/Steam", "_blank")
            }
          >
            <div></div>
            <aside>
              <h5>
                Name: <span>Berniko PVPHIT</span>
              </h5>
              <h5>
                Description:
                <span>I wrote backend to this website.</span>
              </h5>
            </aside>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://www.figma.com/file/27JPVmGkh5wp4oAGVkz8EQ/Untitled?node-id=0%3A1",
                "_blank"
              )
            }
          >
            <div></div>
            <aside>
              <h5>
                Name: <span>Bernstore</span>
              </h5>
              <h5>
                Description:
                <span>
                  I made this e commerce design, I can also build it and give it
                  full store functionallity. But I am lazy
                </span>
              </h5>
            </aside>
          </div>
        </article>
      </section>
      <section id="services">
        <div id="header-wrapper">
          <div></div>
          <h1>Services</h1>
        </div>
        <article>
          <div>
            <CodeIllustration />
            <aside>
              <h3>Web development</h3>
              <h4>
                I have been web developer for 3-4 years, currently working as of
                full stack web developer
              </h4>
            </aside>
          </div>
          <div>
            <aside>
              <h3>Web design</h3>
              <h4>
                I have been designing templates for few months. Technologies I
                use for design are Figma and adobe Xd
              </h4>
            </aside>
            <ResponsiveIllustration />
          </div>
        </article>
      </section>
      <section id="tech">
        <article>
          <AtomIcon />
          <FigmaIcon />
          <AdobeIcon />
          <VSIcon />
          <SublimeIcon />
        </article>
      </section>
      <section id="contact">
        <div id="header-wrapper">
          <div></div>
          <h1>Contact</h1>
        </div>
        <article>
          <form action="" autoComplete="off" onSubmit={handleSubmit}>
            <div id="grid-wrapper">
              <div>
                <input
                  type="text"
                  placeholder="Name:"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email:"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Title:"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <textarea
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <button>Send</button>
          </form>
        </article>
      </section>
      <footer>
        <h6>Berniko</h6>
        <div id="socialmedia-wrapper-one">
          <TelegramIcon />
          <GithubIcon />
          <DiscordIcon />
          <SlackIcon />
        </div>
      </footer>
    </div>
  );
};

export default App;
