import React from "react";
import "./uiassign2.css";
import qwazent from "./qwazent.png";

const UiAssign2 = () => {
  return (
    <div className="uicontainer">
      <div className="main_container">
        <div className="white_bag">
          <div className="ui_head">
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
            <div className="uibanner">
              <h3 className="uibanner_head">Password Reset Information</h3>
              <p className="uibanner_para">
                Please enter this confirmation code in the window where you
                started creating your account:
              </p>
            </div>
          </div>

          <div className="ui_body" style={{ padding: "0px 20px" }}>
            <div>
              <button className="pass_reset_btn">RESET YOUR PASSWORD</button>
            </div>

            <div>
              <p>
                After you click the button above, you'll be prompted to complete
                the following steps:
              </p>

              <div className="uibody_points">
                <p>1. Enter new Password.</p>
                <p>2. Confirm your new password.</p>
                <p>3. Hit submit</p>
              </div>
              <div>
                <p>
                  This link is valid for one use only. It will expire in 2
                  hours.
                </p>
                <p style={{ fontSize: "small", marginTop: "-10px" }}>
                  If you didn't request this password reset or you received this
                  message in error, please disregard this email
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "0px 20px" }}>
          <p style={{ textDecoration: "underline" }}>Terms of use</p>
          <p style={{ textDecoration: "underline" }}>Privacy</p>
        </div>

        <div className="uifooter" style={{ padding: "0px 20px" }}>
          <img
            className="header_img"
            src={qwazent}
            alt="img"
            width="100"
            height="100"
          />
        </div>
      </div>
    </div>
  );
};
export default UiAssign2;
