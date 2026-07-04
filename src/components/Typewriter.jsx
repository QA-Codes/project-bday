import { useEffect, useState } from "react";

export default function TypeWriter() {
  const text = "I Love You ❤️";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setDisplay(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return <h1 className="title">{display}</h1>;
}