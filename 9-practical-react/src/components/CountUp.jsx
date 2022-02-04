import React from "react";
import CountUp, { useCountUp } from "react-countup";

export const CountUpComponent = () => {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 1234567,
    duration: 5,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div>
        <div ref={countUpRef} />
        <br />
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>

      <br />

      <CountUp end={100} />
      <CountUp end={100} duration={5} />
      <CountUp start={500} end={1000} duration={5} />
      <CountUp end={1000} duration={5} prefix="$" decimals={2} />
    </div>
  );
};
