import React, { useState } from "react";

const Button = ({handleClick}) => {
  return (
    <button  onClick={handleClick}>
      <i class="bx bx-revision"></i>
    </button>
  );
};

export default Button;
