import react, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const App = () => {
  const [state, setState] = useState(0);

  function substract() {
    if (state >= 0) {
      setState((prev) => prev - 2);
    }
  }
  const addion = () => {
    if (state < 10) {
      setState((prev) => prev + 2);
    }
  };

  const sub = () => {
    if (state > 0) setState((prev) => prev - 1);
  };

  const add = () => {
    setState((prev) => prev + 1);
  };

  const reset = () => {
    setState(0);
    localStorage.clear();
    toast.info("reseted successfully");
  };
  const save = () => {
    localStorage.setItem("counterValue", state);
    toast.success("saved successfully");
  };
  useEffect(() => {
    const counterValue = localStorage.getItem("counterValue");
    const parsedValue = parseInt(counterValue);
    if (parsedValue) {
      setState(parsedValue);
    }
  }, []);
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
          <button onClick={substract}>sub -2</button>
          <button onClick={addion}>add +2</button>
        </div>
        <div className="grid">
          <button onClick={sub}>sub -1</button>
          <button onClick={add}>add +1</button>
        </div>
        <div>
          <button className="outline" onClick={reset}>
            Reset
          </button>
          <button className="contract" onClick={save}>
            save
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
