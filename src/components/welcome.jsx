function WelcomeScreen({ onStart }) {
  return (
    <div
      className="welcome-screen"
      onClick={onStart}
    >
      <div className="welcome-card">

        <div className="welcome-heart">
          ❤️
        </div>

        <h3 className="welcome-small">
          A Little Surprise For You
        </h3>

        <h1 className="welcome-title">
          Happy Birthday
          <br />
          My Love
        </h1>

        <p className="welcome-text">
          Every love story deserves
          a beautiful beginning.
          <br /><br />
          I made something special just for you.
        </p>

        <div className="tap-button">
          ✨ Tap Anywhere To Begin ✨
        </div>

      </div>
    </div>
  );
}

export default WelcomeScreen;