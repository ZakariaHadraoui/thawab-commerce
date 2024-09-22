import React from 'react'

function Intro() {
  return (
	<section className="box-light section-padding pt-0">
  {/* ==================== Start Intro ==================== */}
  <div className="intro-ds">
    <div className="container">
      <div className="layers" />
      <div className="box">
        <div className="comit bord-thin-bottom pb-30 mb-80">
          <div className="row">
            <div className="col-lg-4">
              <div className="item">
                <h6>Top-notch Experts</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item text-center">
                <h6>Dedicated Support 24/7</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item text-right">
                <h6>Flexible Pricing</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="founders">
          <div className="row justify-content-between">
            <div className="col-lg-3 md-mb30">
              <div className="imgs d-flex align-items-center">
                <div>
                  <div className="img img1">
                    <img src="assets/imgs/intro/f1.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <div className="img img2">
                    <img src="assets/imgs/intro/f2.jpg" alt="" />
                  </div>
                </div>
              </div>
              <p>
                Founders of <br /> Hubfolio
              </p>
            </div>
            <div className="col-lg-7">
              <div className="cont">
                <h4>
                  We help business elevate their value through custom software
                  development, product design, QA and consulting services.
                </h4>
                <a
                  href="https://uithemez.com/i/hubfolio_HTML/inner_pages/about.html"
                  className="butn butn-md butn-bg butn-rounded mt-40"
                >
                  <div className="d-flex align-items-center">
                    <span>More About Us</span>
                    <span className="icon ml-10">
                      <i className="fa-solid fa-chevron-right" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brand-ds pt-100 pb-100">
          <div className="row">
            <div className="col-lg-3 col-md-6 item">
              <div className="text-center">
                <div className="img">
                  <img src="assets/imgs/brands/1.svg" alt="" />
                </div>
                <p>
                  4.8/5 Star Rating on <br /> Goodfirms
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="text-center">
                <div className="img">
                  <img src="assets/imgs/brands/2.svg" alt="" />
                </div>
                <p>
                  Top 50 Global <br /> Companies on Clutch
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="text-center">
                <div className="img">
                  <img src="assets/imgs/brands/3.svg" alt="" />
                </div>
                <p>
                  95% Job Success <br /> on Upwork
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="text-center">
                <div className="img">
                  <img src="assets/imgs/brands/4.svg" alt="" />
                </div>
                <p>
                  Top 20 Global Team <br /> on Behance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ==================== End Intro ==================== */}
  {/* ==================== Start Portfolio ==================== */}
  <div className="works-ds">
    <div className="container pt-100 bord-thin-top">
      <div className="sec-head mb-70 d-flex align-items-center">
        <div>
          <h2>
            Featured <span>Works</span>
          </h2>
        </div>
        <div className="ml-auto">
          <a
            href="https://uithemez.com/i/hubfolio_HTML/inner_pages/portfolio-gallery.html"
            className="butn butn-md butn-bord butn-rounded"
          >
            <div className="d-flex align-items-center">
              <span>See All Projects</span>
              <span className="icon ml-10">
                <i className="fa-solid fa-chevron-right" />
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="work-box">
        <div className="swiper work-swiper swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="item">
                <div className="img">
                  <img src="assets/imgs/works/1.jpg" alt="" />
                </div>
                <div className="cont">
                  <h4>
                    <a href="#0">Archin Architecture Studio</a>
                  </h4>
                  <span className="sub-color">Prototype Design, Webflow</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="img">
                  <img src="assets/imgs/works/2.jpg" alt="" />
                </div>
                <div className="cont">
                  <h4>
                    <a href="#0">Zumar Construct Firm</a>
                  </h4>
                  <span className="sub-color">
                    Web Design &amp; Development
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="img">
                  <img src="assets/imgs/works/3.jpg" alt="" />
                </div>
                <div className="cont">
                  <h4>
                    <a href="#0">Archin Architecture Studio</a>
                  </h4>
                  <span className="sub-color">Prototype Design, Webflow</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="img">
                  <img src="assets/imgs/works/4.jpg" alt="" />
                </div>
                <div className="cont">
                  <h4>
                    <a href="#0">Archin Architecture Studio</a>
                  </h4>
                  <span className="sub-color">Prototype Design, Webflow</span>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </div>
  </div>
  {/* ==================== End Portfolio ==================== */}
</section>
 )
}

export default Intro