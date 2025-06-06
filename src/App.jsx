import react, { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);
  console.log(state);
  function substract() {
    if (state > 0) {
      setState(state - 1);
    }
  }
  const add = () => {
    if (state < 10) {
      setState(state + 1);
    }
  };
  return (
    <main className="container" style={{ marginTop: 80 }}>
      <header style={{ textAlign: "center" }}>
        <h1>Simple Counter</h1>
      </header>

      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <div
          style={{
            fontSize: "5rem",
            fontWeight: "bold",
            margin: "2rem 0",
          }}
        >
          {state}
        </div>

        <div className="grid">
          <button onClick={substract}>-</button>
          <button onClick={add}>+</button>
        </div>
      </section>
    </main>
  );
};

export default App;
