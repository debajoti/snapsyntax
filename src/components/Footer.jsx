import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="outer-container font-poppins">
        <div className="left-container text-white">
          <p className="left-text text-[20px] font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            omnis{" "}
          </p>
          <p className="left-text-bottom text-[10px]">
            Let's get this lorem ipsum sit dolor amet something
          </p>
          <img className="left-image" src="../../public/avatar.png" />
        </div>

        <div className="right-container">
          <div className="right-text">
            {" "}
            Impressed with my resume? lorem ipsumsometh<br/> Let's connect.
          </div>
          <div className="button-container">
            <button>CONNECT WITH ME</button>
          </div>
          <div className="right-division">
            <div className="selected-projects">
              <p className="font-bold text-[20px] text-white">
                SELECTED PROJECTS
              </p>

              <h2>See some of my best projects</h2>
              <h1>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                omnis sint ab at sapiente explicabo ipsam possimus dolorem,
                impedit itaque distinctio, ea incidunt blanditiis minus.
              </h1>
            </div>
            <div className="socials text-white">
              <p className="font-bold text-[20px]">SOCIALS</p>

              <ul className="social-icons">
                <div className="social-icons-left">
                  <li>
                    <p>Facebook</p>
                  </li>
                  <li>
                    <p>Instagram</p>
                  </li>
                </div>
                <div className="social-icons-right">
                  <li>
                    <p>Snapchat</p>
                  </li>
                  <li>
                    <p>LinkedIn</p>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
