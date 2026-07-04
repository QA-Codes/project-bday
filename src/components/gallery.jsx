import { useState } from "react";

import photo1 from "../assets/photos/photo1.jpeg";
import photo2 from "../assets/photos/photo2.jpeg";
import photo3 from "../assets/photos/photo3.jpeg";
import photo4 from "../assets/photos/photo4.jpeg";
import photo5 from "../assets/photos/photo5.jpeg";
import photo6 from "../assets/photos/photo6.jpeg";
import photo7 from "../assets/photos/photo7.jpeg";
import photo8 from "../assets/photos/photo8.jpeg";
import photo9 from "../assets/photos/photo9.jpeg";
import photo10 from "../assets/photos/photo10.jpeg";
import photo11 from "../assets/photos/photo11.jpeg";
import photo12 from "../assets/photos/photo12.jpeg";
import photo13 from "../assets/photos/photo13.jpeg";
import photo14 from "../assets/photos/photo14.jpeg";
import photo15 from "../assets/photos/photo15.jpeg";

const memories = [
  {
    image: photo1,
    title: "❤️ The Beginning",
    caption: "Every beautiful story starts with one unforgettable moment. "
  },
  {
    image: photo2,
    title: "😊 First Smile",
    caption: "The smile that quietly stole my heart."
  },
  {
    image: photo3,
    title: "💕",
    caption: "Your smile soothes me like nothing else ever could. ❤️"
  },
  {
    image: photo4,
    title: "🌸 Beautiful Days",
    caption: "Life became brighter because of you."
  },
  {
    image: photo5,
    title: "💖 My Favourite Person",
    caption: "No matter what, you're my my comfort space."
  },
  {
    image: photo6,
    title: "🎀🤌🏻🧿✨",
    caption: "Hoping every journey to be magical with you beside me."
  },
  {
    image: photo7,
    title: "😂 Endless Laughter",
    caption: "Your laughter is still my favourite sound."
  },
  {
    image: photo8,
    title: "🤍 My Peace",
    caption: "You make ordinary days feel extraordinary."
  },
  {
    image: photo9,
    title: "✨ This Precious Smile",
    caption: "Have to keep this smile protected 🤝"
  },
  {
    image: photo10,
    title: "Mera angry bird 🐥",
    caption: "If I had to choose again, I'd still choose you."
  },
  {
    image: photo11,
    title: "📖 Story",
    caption: "I remember every single moment you've shared with me"
  },
  {
    image: photo12,
    title: "🥰 Happiness",
    caption: "Thank you for filling my life with joy."
  },
  {
    image: photo13,
    title: "❤️ Forever",
    caption: "Every heartbeat whispers your name."
  },
  {
    image: photo14,
    title: " Remember this photo? 😁🧿",
    caption: "Promise to click your candid photos life-time"
  },
  {
    image: photo15,
    title: "💍 Forever & Always",
    caption: "Happy Birthday to the love of my life. ❤️"
  }
];

export default function Gallery({ onBack, onNext }) {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const next = () => {
    if (current < memories.length - 1) {
      setCurrent(current + 1);
    } else {
      onNext();
    }
  };

  return (
    <div className="overlay">

      <h3 className="tag">📸 Our Beautiful Memories</h3>

      <img
        src={memories[current].image}
        alt={memories[current].title}
        className="gallery-image"
      />

      <h2
        style={{
          color: "white",
          marginBottom: "10px"
        }}
      >
        {memories[current].title}
      </h2>

      <p className="subtitle">
        {memories[current].caption}
      </p>

      <p className="gallery-counter">
        ❤️ {current + 1} / {memories.length}
      </p>

      <div className="gallery-buttons">

        <button
          className="btn"
          onClick={previous}
          disabled={current === 0}
        >
          ◀ Previous
        </button>

        <button
          className="btn"
          onClick={next}
        >
          {current === memories.length - 1
            ? "Read My Letter 💌"
            : "Next ▶"}
        </button>

      </div>

      {onBack && (
        <button
          className="btn"
          onClick={onBack}
          style={{ marginTop: "15px" }}
        >
          ⬅ Back
        </button>
      )}

    </div>
  );
}