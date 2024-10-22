import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({ once: true, delay: 100 });


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<React.StrictMode>
    <BrowserRouter>
      <App />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
);