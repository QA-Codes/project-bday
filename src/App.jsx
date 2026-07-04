import { useState } from "react";
import "./App.css";
import Gallery from "./components/gallery";
import MusicPlayer from "./components/MusicPlayer";
import Confetti from "react-confetti";
// import BirthdayFireworks from "./components/Fireworks";
import TypeWriter from "./components/Typewriter";

function App() {
  const [page, setPage] = useState(1);
  const [started, setStarted] = useState(false);

  return (
    <>
      {/* Welcome Screen */}
      {!started && (
        <div
          className="welcome-screen"
          onClick={() => setStarted(true)}
        >
          <div className="welcome-card">
            <div className="welcome-heart">❤️</div>

            <p className="welcome-small">
              A little surprise is waiting...
            </p>

            <h1 className="welcome-title">
              Happy Birthday
              <br />
              My Love 🎂
            </h1>

            <p className="welcome-text">
              This isn't just a website...
              <br />
              It's every memory,
              every smile,
              and every heartbeat
              I've shared with you.
              <br /><br />
              Tap anywhere to begin our journey.
            </p>

            <div className="tap-button">
              ✨ Tap Anywhere ✨
            </div>
          </div>
        </div>
      )}

      {/* Main Website */}
      {started && (
        <div className="app">
          <div className="progress-container">
  <div
    className="progress-bar"
    style={{
      width: `${((page - 1) / 6) * 100}%`,
    }}
  ></div>
</div>

          <MusicPlayer autoPlay={true} />

          {/* PAGE 1 */}
          {page === 1 && (
            <div className="overlay">
              <h3 className="tag">❤️ For Someone Very Special ❤️</h3>

              <h1 className="title">
                Happy Birthday,
                <br />
                My Love 🎂
              </h1>

              <p className="subtitle">
                Every beautiful chapter of my life began
                the day you entered it.
              </p>

              <button
                className="btn"
                onClick={() => setPage(2)}
              >
                Begin Our Story ❤️
              </button>
            </div>
          )}

          {/* PAGE 2 */}
          {page === 2 && (
            <div className="overlay">

              <h3 className="tag">
                📖 Chapter 1
              </h3>

              <h1 className="title">
                The Day Everything Changed ❤️
              </h1>

              <p className="subtitle">
                Every beautiful story has a beginning.
                <br /><br />
                Mine began the day I met you.
                <br /><br />
                I never imagined one day
                you would become
                my home,
                my happiness,
                and my favorite person.
              </p>

              <button
                className="btn"
                onClick={() => setPage(3)}
              >
                Next Chapter ➜
              </button>

            </div>
          )}

          {/* PAGE 3 */}
          {page === 3 && (
            <div className="overlay">

              <h3 className="tag">
                ✨ Chapter 2
              </h3>

              <h1 className="title">
                Our First Conversation 💕
              </h1>

              <p className="subtitle">
                Yaad hai na? 👀
                <br /><br />
                I had never thought we'll come this long! A simple Hi, and see, 
                where we are heading to now 😁🧿
              </p>

              <button
                className="btn"
                onClick={() => setPage(4)}
              >
                Continue ❤️
              </button>

            </div>
          )}

          {/* PAGE 4 */}
          {page === 4 && (
            <div className="overlay">

              <h3 className="tag">
                💖 Chapter 3
              </h3>

              <h1 className="title">
                Falling In Love
              </h1>

              <p className="subtitle">
                Slowly...
                <br />
                I realised that I'm falling for you, and that was so beautiful to feel. 🫠🤌🏻💗
                Your way of thinking, your responsible nature, your innocent smile! All this made it easier to fall for you.  
                <br /><br />
                You became the first person
                I wanted to talk to every day.
                <br /><br />
                Somewhere between our conversations,
                my heart quietly chose you.
              </p>

              <button
                className="btn"
                onClick={() => setPage(5)}
              >
                Our Memories 📸
              </button>

            </div>
          )}

          {/* PAGE 5 */}
          {page === 5 && (
            <Gallery
              onBack={() => setPage(4)}
              onNext={() => setPage(6)}
            />
          )}

          {/* PAGE 6 */}
          {page === 6 && (
            <div className="overlay">

              <h3 className="tag">
                💌 I know I'm not expressive, but please padh lo patiently 👀
              </h3>

              <h1 className="title">
                Dear Sonali ❤️
              </h1>

              <p className="letter">
                Every single day with you has been
                one of the greatest blessings
                of my life.
                <br /><br />

                Thank you for every smile,
                every laugh,
                every single of appriciation you gave,
                and every little moment
                that became a beautiful memory.

                <br /><br />

                I'm very proud of you for whatever you're doing in life.
                And promise to be supportive in all your phases 🤗 
                 

                <br /><br />

                On your birthday,
                I just want you to know
                how deeply you are loved. 

                <br /><br />

                I hope all your dreams come true,
                your smile never fades,
                and life always gives you
                reasons to stay happy and I become the primary of them 👀.

                <br /><br />

                Happy Birthday,
                Mera Cutie Pie ❤️.

                <br /><br />

                ❤️ Forever Yours ❤️
              </p>

              <button
                className="btn"
                onClick={() => setPage(7)}
              >
                Birthday Surprise 🎂
              </button>

            </div>
          )}

          {/* PAGE 7 */}
          {page === 7 && (
            <div className="overlay">
              <Confetti
                recycle={true}
                numberOfPieces={350}
              />
              {/* <BirthdayFireworks /> */}

  <div className="balloons">
    <span>🎈</span>
    <span>🎈</span>
    <span>🎈</span>
    <span>🎈</span>
    <span>🎈</span>
  </div>

  <h3 className="tag">
    🎉 Happy Birthday 🎉
  </h3>

 <TypeWriter />

              <p className="subtitle">
                Happy Birthday to the most
                beautiful person in my life.
                <br /><br />

                Thank you for making
                every day brighter,
                every smile bigger,
                and every moment unforgettable.
                <br /><br />

                May this year bring you
                endless happiness,
                success,
                good health,
                and everything
                your heart desires.

                <br /><br />

                ❤️ Forever & Always ❤️
              </p>

              <button
                className="btn"
                onClick={() => {
                  setPage(1);
                  setStarted(false);
                }}
              >
                Read Again 🔄
              </button>

            </div>
          )}

          {/* Floating Hearts */}

          <div className="heart h1">❤️</div>
          <div className="heart h2">❤️</div>
          <div className="heart h3">❤️</div>
          <div className="heart h4">❤️</div>
          <div className="heart h5">❤️</div>

        </div>
      )}
    </>
  );
}

export default App;