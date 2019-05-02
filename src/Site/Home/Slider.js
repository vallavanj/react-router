import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './style.css';
export default class SimpleSlider  extends Component {
  render() {
    function PrevButton({ onClick }) {
      return <button onClick={onClick} className="slick-prev slick_prev" style={{ background: '#000' }}>Prev</button>;
    }

    function NextButton({ onClick }) {
      return <button onClick={onClick} className="slick-next slick_next" style={{ right: 0,background: '#000' }}>Next</button>;
    }
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <PrevButton />,
      nextArrow: <NextButton />,
    };
   const pStyle = {
  textAlign: 'center'
};
    return (
      <div>

        <Slider {...settings}>
         <div style={pStyle}  >
                <div className="_3e_kl" >
                  <a href="/chennai/al-mabrook-tnagar-t-nagar">
                     <img width="260px" height="260px"  src={process.env.PUBLIC_URL + '/sample.jpg'} className="_1gDnr" />
                    </a>
               </div>
          </div>
          <div className={styles.slider} >
            <div className="_3e_kl" >
                  <a href="/chennai/al-mabrook-tnagar-t-nagar">
                     <img width="260px" height="260px" src={process.env.PUBLIC_URL + '/sample.jpg'} className="_1gDnr" />
                    </a>
               </div>
          </div>
          <div className={styles.slider} >
            <div className="_3e_kl" >
                  <a href="/chennai/al-mabrook-tnagar-t-nagar">
                     <img width="260px" height="260px" src={process.env.PUBLIC_URL + '/sample.jpg'} className="_1gDnr" />
                    </a>
               </div>
          </div>
          <div className={styles.slider} >
            <div className="_3e_kl" >
                  <a href="/chennai/al-mabrook-tnagar-t-nagar">
                     <img width="260px" height="260px" src={process.env.PUBLIC_URL + '/sample.jpg'} className="_1gDnr" />
                    </a>
               </div>
          </div>
          <div className={styles.slider}>
           <div className="_3e_kl" >
                  <a href="/chennai/al-mabrook-tnagar-t-nagar">
                     <img width="260px" height="260px" src={process.env.PUBLIC_URL + '/sample.jpg'} className="_1gDnr" />
                    </a>
               </div>
          </div>
          <div className={styles.slider}>
           <div className="_3e_kl" >
                  <a href="/chennai/al-mabrook-tnagar-t-nagar">
                     <img width="260px" height="260px" src={process.env.PUBLIC_URL + '/sample.jpg'} className="_1gDnr" />
                    </a>
               </div>
          </div>
          <div className={styles.slider}>
           <div className="_3e_kl" >
                  <a href="/chennai/al-mabrook-tnagar-t-nagar">
                     <img width="260px" height="260px" src={process.env.PUBLIC_URL + '/sample.jpg'} className="_1gDnr" />
                    </a>
               </div>
          </div>
        </Slider>
      </div>
    );
  }
}