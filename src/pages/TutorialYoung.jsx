import React from "react";
import Header from "../component/Header";
import GameScreen from "../component/GameScreen";

function Tutorial() {
  return (
    <>
      <GameScreen />
      <div>
        <h1>درباره ما</h1>
        <p>خوش آمدید به صفحه درباره ما!</p>
        <p>
          ما یک تیم از توسعه دهندگان هستیم که به ارائه راهکارهای نرم‌افزاری با
          کیفیت برای مشتریان علاقه‌مند هستیم. ما به دنبال بهبود تجربه کاربری و
          ارائه راهکارهای مبتنی بر فناوری هستیم که به افراد و کسب‌وکارها کمک
          کنند به دستاوردهای بزرگ‌تری دست یابند.
        </p>
        <p>اگر سوالی دارید، با ما تماس بگیرید!</p>
      </div>
    </>
  );
}

export default Tutorial;