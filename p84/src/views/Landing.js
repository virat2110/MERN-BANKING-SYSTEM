import React from "react";
import './Customer.css';
export default function Landing() {
  return (
      <div className="home-page">
        <div className="home-desc">This is a simple banking system app through which<br /> you can
                    create an account and transfer money<br /> with each other and see
                    the details of it.<br /><br/>
                    This was created as a part of our<br /> SDP-1 Project.
        </div>
        <div className="home-grid">
          <div className="home-card">
            <div className="home-title">CREATE</div>
            <div className="home-description">Add the basic details about yourself and some bank details to open an account.</div>
          </div>
          <div className="home-card">
            <div className="home-title">TRANSFER</div>
            <div className="home-description">Got to the customer page and tranfer money to any person by clicking on transfer.</div>
          </div>
          <div className="home-card">
            <div className="home-title">TRANSACTION HISTORY</div>
            <div className="home-description">Check the amount transfered in transactions.</div>
          </div>
          <div className="home-card">
            <div className="home-title">RULES</div>
            <div className="home-description">First you have to give
                  the details about yourself and then the bank detials and the
                  last step is to verify all your details..</div>
          </div>
        </div>
      </div>
  );
}
