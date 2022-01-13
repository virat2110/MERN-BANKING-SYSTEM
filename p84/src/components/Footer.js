import React from "react";
import { Link } from "react-router-dom";
import linkedin1 from './linkedin1.png';
import './Foot.css';


export default function Footer() {
  return (
    <div>
    <div className="footer-txt"> 
      <h3>Check out our LinkedIn article</h3>
      <a href="https://www.linkedin.com/pulse/sdp-1-project-banking-finance-system-ava-banking-solution-virat-anand/" target="_blank" ><button className="linkedin">
        <img src={linkedin1} />
        </button>
      </a>
    </div>
    <div className="copyright">
    Copyright © {new Date().getFullYear()}{" "}{" "}
    <a
      href="https://www.linkedin.com/pulse/sdp-1-project-banking-finance-system-ava-banking-solution-virat-anand/"
      className="text-gray-600 hover:text-gray-900"
    >
      AVA BANKING SOLUTIONS.
    </a>.
    </div>
    </div>
  );
}
