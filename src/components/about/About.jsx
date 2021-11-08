import "./about.css";
import softEng from "../../images/software_eng1.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function About() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg" style={{backgroundColor: darkMode ? "White" : "#333"}}></div>
        <div className="a-card">
          <img src={softEng} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm a double-majored Engineer. "Electrical & Electronics Engineer" and
          "Computer Engineer".
        </p>
        <p className="a-desc">
          As you can see the details in my resume, I have experience in a lot of
          working areas. I have worked on Embedded Systems, so I know most of
          the Communication Protocols. I developed small-scale mobile
          applications. I designed HMI GUI's. I developed large-scale Desktop
          Applications (Winform, WPF) that communicates with Embedded Products
          with variant Communications Protocols. GUI Designs, WPF and React
          projects are my most liked experiences.
        </p>
      </div>
    </div>
  );
}
export default About;
