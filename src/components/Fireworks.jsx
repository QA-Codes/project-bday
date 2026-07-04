import Fireworks from "react-fireworks";

export default function BirthdayFireworks() {
  return (
    <Fireworks
      options={{
        rocketsPoint: {
          min: 15,
          max: 85,
        },
      }}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}