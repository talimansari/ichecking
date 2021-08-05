import React from "react";
import rightImg from "../images/laptop_man.png";
const HomeBanner = () => {
  return (
    <>
      <section className="banner_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner_lf_content">
                <h2>
                  Accelerating
                  <br />
                  Growth through
                  <br />
                  Intelligent Solutions
                </h2>
                <p>
                  We have the Mantra for Transforming your Digital Experience,
                  <br />
                  with the right team to execute it.
                </p>
                <div className="pop_btn_wrap">
                  <a href="#" class="common_btn popup_btn">
                    REQUEST A QUOTE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner_right_img">
                <img src={rightImg} alt="Right-Img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
