import React from "react";
import { BeatLoader, BounceLoader, PacmanLoader } from "react-spinners";

export const LoadingIndicators = () => {
  return (
    <div>
      <BounceLoader size={24} color="red" />
      <BeatLoader size={72} color="green" />
      <PacmanLoader size={48} color="yellow" />
    </div>
  );
};
