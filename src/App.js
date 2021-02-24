import React, { useState } from "react";
import "./App.css";
import StackedAreaChart from "./StackedAreaChart";

import GaugeChart from "./GaugeChart";
const allKeys = [
  "QualityScore",
  "Basics",
  "Interaction",
  "Expertise",
  "Process",
  "Knowledge",
];

const colors = {
  QualityScore: "green",
  Basics: "blue",
  Interaction: "purple",
  Expertise: "yellow",
  Process: "red",
  Knowledge: "gray",
};
const gaugeData1 = {
  name: "Quality Score",
  score: 72,
  vsly: null,
  sample: 133,
};
const gaugeData2 = {
  name: "Basics",
  score: 71,
  vsly: null,
  sample: 133,
};
const gaugeData3 = {
  name: "Interactions",
  score: 68,
  vsly: null,
  sample: 133,
};
const gaugeData4 = {
  name: "Expertise",
  score: 70,
  vsly: null,
  sample: 133,
};
const gaugeData5 = {
  name: "Process",
  score: 75,
  vsly: null,
  sample: 133,
};
const gaugeData6 = {
  name: "Knowledge",
  score: 76,
  vsly: null,
  sample: 133,
};

function App() {
  const [keys, setKeys] = useState(allKeys);
  const [gaugeData2, setGaugeData2] = useState([0.71, 0.29]);
  const [gaugeData1, setGaugeData1] = useState([0.72, 0.28]);
  const [gaugeData3, setGaugeData3] = useState([0.68, 0.32]);
  const [gaugeData4, setGaugeData4] = useState([0.7, 0.3]);
  const [gaugeData5, setGaugeData5] = useState([0.75, 0.25]);
  const [gaugeData6, setGaugeData6] = useState([0.76, 0.24]);
  const [data, setData] = useState([
    {
      month: "Apr",
      QualityScore: 75,
      Basics: 78,
      Interaction: 92,
      Expertise: 88,
      Process: 85,
      Knowledge: 57,
    },
    {
      month: "May",
      QualityScore: 71,
      Basics: 78,
      Interaction: 92,
      Expertise: 61,
      Process: 77,
      Knowledge: 76,
    },
    {
      month: "June",
      QualityScore: 62,
      Basics: 42,
      Interaction: 34,
      Expertise: 35,
      Process: 57,
      Knowledge: 33,
    },
    {
      month: "Jul",
      QualityScore: 0,
      Basics: 63,
      Interaction: 0,
      Expertise: 46,
      Process: 0,
      Knowledge: 89,
    },
  ]);

  return (
    <React.Fragment>
      
      <h2> Charts with D3 </h2>
     <div class="one-column"><StackedAreaChart data={data} keys={keys} colors={colors} /></div> 
      <div className="fields">
            {allKeys.map((key) => (
              <div key={key} className="field">
                <input
                  id={key}
                  type="checkbox"
                  checked={keys.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKeys(Array.from(new Set([...keys, key])));
                    } else {
                      setKeys(keys.filter((_key) => _key !== key));
                    }
                  }}
                />
                <label htmlFor={key} style={{ color: colors[key] }}>
                  {key}
                </label>
              </div>
            ))}
          </div>
       
      <div class="two-column-wrapper">
        <div class="g1">
          <h2>Quality Score</h2>
          <small>
            [{gaugeData1[0].toFixed(2)}, {gaugeData1[1].toFixed(2)}]
          </small>
          <GaugeChart data={gaugeData1} keys={keys} colors={colors}  />
          <div className="fields">
            {allKeys.map((key) => (
              <div key={key} className="field">
                <input
                  id={key}
                  type="checkbox"
                  checked={keys.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKeys(Array.from(new Set([...keys, key])));
                    } else {
                      setKeys(keys.filter((_key) => _key !== key));
                    }
                  }}
                />
                <label htmlFor={key} style={{ color: colors[key] }}>
                  {key}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div class="g2">
        <h2>Basics</h2>
          <small>
            [{gaugeData2[0].toFixed(2)}, {gaugeData2[1].toFixed(2)}]
          </small>
          <GaugeChart data={gaugeData2} keys={keys} colors={colors} />
          <div className="fields">
            {allKeys.map((key) => (
              <div key={key} className="field">
                <input
                  id={key}
                  type="checkbox"
                  checked={keys.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKeys(Array.from(new Set([...keys, key])));
                    } else {
                      setKeys(keys.filter((_key) => _key !== key));
                    }
                  }}
                />
                <label htmlFor={key} style={{ color: colors[key] }}>
                  {key}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div class="g3">
        <h2>Interaction</h2>
          <small>
            [{gaugeData3[0].toFixed(2)}, {gaugeData3[1].toFixed(2)}]
          </small>
          <GaugeChart data={gaugeData3} key={keys} colors={colors} />
          <div className="fields">
            {allKeys.map((key) => (
              <div key={key} className="field">
                <input
                  id={key}
                  type="checkbox"
                  checked={keys.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKeys(Array.from(new Set([...keys, key])));
                    } else {
                      setKeys(keys.filter((_key) => _key !== key));
                    }
                  }}
                />
                <label htmlFor={key} style={{ color: colors[key] }}>
                  {key}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div class="g4">
        <h2>Enterprise</h2>
          <small>
            [{gaugeData4[0].toFixed(2)}, {gaugeData4[1].toFixed(2)}]
          </small>
          <GaugeChart data={gaugeData4} keys={keys} colors={colors} />
          <div className="fields">
            {allKeys.map((key) => (
              <div key={key} className="field">
                <input
                  id={key}
                  type="checkbox"
                  checked={keys.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKeys(Array.from(new Set([...keys, key])));
                    } else {
                      setKeys(keys.filter((_key) => _key !== key));
                    }
                  }}
                />
                <label htmlFor={key} style={{ color: colors[key] }}>
                  {key}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div id="g5">
        <h2>Process</h2>
          <small>
            [{gaugeData5[0].toFixed(2)}, {gaugeData5[1].toFixed(2)}]
          </small>
          <GaugeChart data={gaugeData5} keys={keys} colors={colors} />
          <div className="fields">
            {allKeys.map((key) => (
              <div key={key} className="field">
                <input
                  id={key}
                  type="checkbox"
                  checked={keys.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKeys(Array.from(new Set([...keys, key])));
                    } else {
                      setKeys(keys.filter((_key) => _key !== key));
                    }
                  }}
                />
                <label htmlFor={key} style={{ color: colors[key] }}>
                  {key}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div id="g6">\
        <h2>Knowledge</h2>
          <small>
            [{gaugeData6[0].toFixed(2)}, {gaugeData6[1].toFixed(2)}]
          </small>
          <GaugeChart data={gaugeData6} keys={keys} colors={colors} />
          <div className="fields">
            {allKeys.map((key) => (
              <div key={key} className="field">
                <input
                  id={key}
                  type="checkbox"
                  checked={keys.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKeys(Array.from(new Set([...keys, key])));
                    } else {
                      setKeys(keys.filter((_key) => _key !== key));
                    }
                  }}
                />
                <label htmlFor={key} style={{ color: colors[key] }}>
                  {key}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </React.Fragment>
  );
}

export default App;
