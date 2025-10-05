import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 100;

  return (
    <div 
      className="d-flex flex-column justify-content-center align-items-center px-3"
      style={{ 
        minHeight: "100vh",              // flexible height
        backgroundColor: "rgb(1, 54, 98)", 
        fontFamily:"-moz-initial"
      }}
    >
      {/* Heading */}
      <h1 className="text-white mb-3 text-center fw-bold display-5 display-md-4">
        Welcome to My Counter App
      </h1>

      {/* Paragraph */}
      <p className="text-white mb-5 text-center fs-6 fs-md-5" style={{ maxWidth: "600px" }}>
        This simple React Counter App lets you increase, decrease, or reset the number. 
        You can also set limits for minimum and maximum values.
      </p>

      {/* Counter Card */}
      <div className="card shadow p-4 text-center bg-white w-100" 
           style={{ maxWidth: "30rem", borderRadius: "15px" }}>
        <div className="card-body">
          <h3 className="card-title mb-3 fs-3">Counter App</h3>
          <h2 className="mb-4 fs-1">{count}</h2>

          {/* Button group - stack on mobile */}
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
            <button
              className="btn btn-success"
              onClick={() => setCount(count + 1)}
              disabled={count >= max}
            >
              Increase
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setCount(count - 1)}
              disabled={count <= min}
            >
              Decrease
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>

          <p className="mt-3 text-muted">Min: {min}, Max: {max}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
