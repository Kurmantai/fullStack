import React from "react";
import Artist from "../MusicPageImg/artist.jpg";
import Check from "../MusicPageImg/check.png";
import { FaEllipsisH, FaHeadphones, FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://images.pexels.com/photos/3920847/pexels-photo-3920847.jpeg?cs=srgb&dl=pexels-dmitry-demidov-3920847.jpg&fm=jpg"
        alt="img"
        className="bannerImg"
      />
      <div className="bannerText">
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          harum aut reprehenderit sit. Magni voluptatum ex voluptate! Ullam
          dicta commodi tenetur repudiandae nihil libero ipsa exercitationem
          praesentium odit doloremque odio debitis ad voluptatum quos,
          laboriosam optio harum beatae nesciunt rerum reprehenderit? Id quo,
          maiores molestias vitae earum aliquid asperiores eius dolorum, magnam
          iure expedita non iusto eum optio, rerum necessitatibus. Provident,
          ratione incidunt odio accusantium pariatur repudiandae dolorum. Neque
          ratione minus doloremque exercitationem placeat illum aliquid, natus
          itaque cum recusandae quas obcaecati! Molestias, ducimus omnis et
          distinctio aliquid illum veritatis ullam error labore maxime
          recusandae voluptatibus dolorum debitis quae doloribus! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Cupiditate harum aut
          reprehenderit sit. Magni voluptatum ex voluptate! Ullam dicta commodi
          tenetur repudiandae nihil libero ipsa exercitationem praesentium odit
          doloremque odio debitis ad voluptatum quos, laboriosam optio harum
          beatae nesciunt rerum reprehenderit? Id quo, maiores molestias vitae
          earum aliquid asperiores eius dolorum, magnam iure expedita non iusto
          eum optio, rerum necessitatibus. Provident, ratione incidunt odio
          accusantium pariatur repudiandae dolorum. Neque ratione minus
          doloremque exercitationem placeat illum aliquid, natus itaque cum
          recusandae quas obcaecati! Molestias, ducimus omnis et distinctio
          aliquid illum veritatis ullam error labore maxime recusandae
          voluptatibus dolorum debitis quae doloribus!
        </h4>
      </div>
      <div className="content">
        <div className="breadCrump">
          <div>
            <i>
              <FaBars />
            </i>
            <i>
              <BsXLg />
            </i>
          </div>

          <p>
            PLAY <span>/ The Premium Music</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>Premium Music</h2>
              <img src={Check} alt="" />
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,1116
              <span>Monthly listeners</span>
            </p>
          </div>
          {/* <div className="right">
            <a href="#">Play</a>
          </div> */}
        </div>
      </div>
      <div className="bottomLayer"></div>
    </div>
  );
};

export default Banner;
