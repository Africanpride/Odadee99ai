import React from "react";
import { cardio } from "ldrs";


cardio.register();

const CadioAnimation = () => {
  return (
    <div>
      <l-cardio size="50" stroke="4" speed="2" color="#2563eb"></l-cardio>
    </div>
  );
};

export default CadioAnimation;
