import React, { useState } from "react";

const pages = [
  {
    text: "یک روز در خانه اتفاق افتاد",
    image: "https://via.placeholder.com/150",
    color: "#FFC0CB",
  },
  {
    text: "Peter loved to explore the forest and play with his friends.",
    image: "https://via.placeholder.com/150",
    color: "#ADD8E6",
  },
  {
    text: "But one day, Peter got lost in the woods.",
    image: "https://via.placeholder.com/150",
    color: "#90EE90",
  },
];

const BookPage = ({ page }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speakText = () => {
    const speech = new SpeechSynthesisUtterance(page.text);
    speech.lang = "fa-IR"; // Set language to Farsi (Iran)
  
    speech.onstart = () => {
      setIsSpeaking(true);
      console.log("Speech started");
    };
  
    speech.onend = () => {
      setIsSpeaking(false);
      console.log("Speech ended");
    };
  
    speech.onerror = (event) => {
      setIsSpeaking(false);
      console.error("Speech error:", event.error);
    };
  
    speechSynthesis.speak(speech);
  };
  

  return (
    <div style={{ backgroundColor: page.color }}>
      <h1>{page.text}</h1>
      <img src={page.image} alt="Page" />
      <button onClick={speakText}>
        {isSpeaking ? "Stop Reading" : "Read Aloud"}
      </button>
    </div>
  );
};

export default function Book() {
  const [currentPage, setCurrentPage] = useState(0);

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="App">
      <h1>My Online Book</h1>
      <BookPage page={pages[currentPage]} />
      <button onClick={goToPreviousPage} disabled={currentPage === 0}>
        Previous Page
      </button>
      <button
        onClick={goToNextPage}
        disabled={currentPage === pages.length - 1}
      >
        Next Page
      </button>
    </div>
  );
}
