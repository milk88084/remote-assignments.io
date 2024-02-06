import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  const [counters, setCounters] = useState([]);

  const handleIncrementAll = () => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) => ({
        ...counter,
        localCount: counter.localCount + 1,
      }))
    );
  };

  const handleAddCounter = () => {
    setCounters((prevCounters) => [
      ...prevCounters,
      { key: prevCounters.length, localCount: 0 },
    ]);
  };

  useEffect(() => {
    // Initialize with 3 counters
    setCounters([
      { key: 0, localCount: 0 },
      { key: 1, localCount: 0 },
      { key: 2, localCount: 0 },
    ]);
  }, []);

  return (
    <div>
      <h1 style={{marginLeft: "20px"}}>Assignment 5</h1>

      {/* Button to increment all counters */}
      <button onClick={handleIncrementAll} style={{marginLeft: "20px"}}>All +1</button>

      {/* Render counters */}
      {counters.map((counter) => (
        <div key={counter.key}>
          <Counter
            count={counter.localCount}
            onIncrement={() =>
              setCounters((prevCounters) =>
                prevCounters.map((prevCounter) =>
                  prevCounter.key === counter.key
                    ? { ...prevCounter, localCount: prevCounter.localCount + 1 }
                    : prevCounter
                )
              )
            }
          />
        </div>
      ))}
      <button onClick={handleAddCounter} style={{marginLeft: "20px"}}>Add a Counter</button>
    </div>
  );
};

export default App;
