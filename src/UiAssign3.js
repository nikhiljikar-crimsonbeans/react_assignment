import React from "react";
import "./uiassign3.css";
import qwazent from "./qwazent.png";

const UiAssign3 = () => {
  return (
    <div className="ui_container">
      <div className="uimain_container">
        <div className="uiwhite_bag">
          <div className="uihead">
            <img
              className="header_img"
              src={qwazent}
              alt="img"
              width="100"
              height="100"
            />
            <button className="back_site_btn" type="submit">
              BACK TO SITE
            </button>
          </div>

          <div>
            <div className="ui_banner">
              <h3 className="ui3banner_head">Verify Email</h3>
              <p className="ui3banner_para">
                Please enter this confirmation code in the window where you
                started creating your account:
              </p>
            </div>
          </div>
          <div className="ui3_veri">
            <div className="ui3_vericode">650065</div>

            <div className="ui3_veridata">
              From Your mobile device use the code to confirm email
            </div>
          </div>

          <div className="ui3_emailconf">
            <div className="ui3_emailpar">
              Or Click This button to confirm Your Email
            </div>
            <div>
              <button className="ui3emailconf_btn">RESET YOUR PASSWORD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiAssign3;
