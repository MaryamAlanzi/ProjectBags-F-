import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div id="Home">
      <section id="main">
        <div>
          <div>
            <h2 id="h2">
              تتميز هذه الشركة العالمية بانها عنوان للنجاح المميز وهي تقدم لك
              الشنط العملية المناسبة لاطلالاتك اليومية وبالوانها المميزة مع
              مجموعة واسعة من التصاميم.
            </h2>
            <h2  id="h2">أشهر ماركات الشنط شنط بألوان واشكال رائعة</h2>
            <Link className=".btn" to={"/SignUp"} className="btn">
              للتسجيل
            </Link>
          </div>
          <br />

          <img
            className="img"
            src="https://ayyis.com/wp-content/uploads/2021/04/PicsArt_04-01-10.13.48.jpg"
            alt="..."
          />

          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOTgKV3fiSgPNcPatjL1w37cOP1Pq8bhetA&usqp=CAU"
            alt="..."
          />

          <img
            className="img"
            src="  https://cdn.salla.sa/WigY50sizuXeLQOQx2l1qxk6ZXlTqSDcq4tvPtwb.jpeg  "
            alt="..."
          />
        </div>
      </section>
    </div>
  );
}
