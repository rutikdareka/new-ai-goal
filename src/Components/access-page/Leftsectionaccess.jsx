import React from "react";
import Socialloginbtn from "../small/Socialloginbtn";
import Google from "../../assets/Google.svg";
import apple from "../../assets/apple.svg";
import microsoft from "../../assets/microsoft.svg";
import { Link } from "react-router-dom";

function Leftsectionaccess() {
  return (
    <>
      <div className="left_section_access">
        <div className="left_sub_setion_access">
          <div className="left_wrapp_section">
            <div className="wrapp_three_section">
              <div className="intro_in_access">
                <img
                  src="https://pps.whatsapp.net/v/t61.24694-24/382357449_283159598001900_6919361805685243905_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQdEHKq-YoCOryR0Fx4DccM3JX5NWkS_1_xxgMARLEfkw&oe=65339199&_nc_sid=000000&_nc_cat=103"
                  alt="Loaded"
                />
                <span>Creto</span>
              </div>
              <div className="para_intro_access">
                <span>Sign in</span>
                <p>Welcome back, you've been missed</p>
              </div>
              <div className="social_login_container">
                <div className="wrapping_container">
                  <div id="line">
                    <div>Continue with</div>
                  </div>
                  <div className="login_btn">
                    <Socialloginbtn
                      src={Google}
                      func={""}
                      Socialname={"Google"}
                    />
                    <Socialloginbtn
                      src={microsoft}
                      func={""}
                      Socialname={"Microsoft"}
                    />
                    <Socialloginbtn
                      src={apple}
                      func={""}
                      Socialname={"Apple"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <footer>
              <div className="changes_route">
                <p>
                  Don't have an account? <Link>Sign up</Link>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leftsectionaccess;
