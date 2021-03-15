import React from "react";
import "../styles/InputOption.css";

function InputOption({ Icon, title, color }) {
  return (
    <div class="inputOption">
      <Icon styles={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
