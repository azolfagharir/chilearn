import React from "react";
import { useState } from "react";
import Header from "../component/Header";
import GameScreen from "../component/GameScreen";

const TheTutorial = [
  {
    Title: "سلام",
    VideoAdress: "/salam.mp4",
    discription:
      "سلام یک کلمه خیلی خوب و دوست داشتنیه! وقتی به کسی سلام می‌کنی، احساس خوبی بهش منتقل می‌شه. همیشه باید با مهربونی و لبخند به کسی سلام بگی.  ",
  },
  {},
];

function TutorialYoung() {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const toggleSound = () => {
    setIsSoundPlaying(!isSoundPlaying);
  };

  return (
    <div className="container mx-auto py-8 xl:mx-1 2xl:mx-16">
      <br />
      <br />
      <h1 className="text-3xl font-bold mb-4 text-center">
        {TheTutorial[0].Title}
      </h1>

      <br />
      <br />
      <div className="relative w-full h-auto aspect-widescreen">
        <video className="w-full h-full object-cover" controls>
          <source src={TheTutorial[0].VideoAdress} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 right-0 m-4 bg-white p-2 rounded-full">
          {/* You can replace the icon with your speaker icon */}
        </div>
      </div>
      <p dir="rtl" className="mt-4 text-lg text-gray-800 text-center">
        {TheTutorial[0].discription}
      </p>
      <br />
      <div className="grid justify-center">
        <button onClick={toggleSound}>
          <img className="w-16" src="/volume.png" alt="" />
        </button>
        {isSoundPlaying && (
          <audio autoPlay>
            <source src="/salam.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
}

export default TutorialYoung;
