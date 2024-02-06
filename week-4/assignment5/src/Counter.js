import React from "react";

const Counter = ({ count, onIncrement }) => {
  const handleIncrement = () => {
    onIncrement();
  };

  return (
    <div style={{ display: "flex", alignItems: "center",marginLeft: "20px" }}>
      <button onClick={handleIncrement}>+1</button>
      <p style={{ marginLeft: "10px" }}>{count}</p>
    </div>
  );
};

export default Counter;