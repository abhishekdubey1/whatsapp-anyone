import { useEffect, useRef, useState } from "react";
import "./styles.css";
const initialState = { number: "", cc: "" };
export default function App() {
  const [state, setState] = useState(initialState);
  const { number, cc } = state;
  const link =
    number.trim() && cc.trim()
      ? `https://wa.me/+${cc}${number}`
      : "https://wa.me/";
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  const handleInpChange = ({ target }) =>
    setState({ ...state, [target.name]: target.value });
  function handleError() {
    if (number.trim() && cc.trim()) {
      if (
        !parseInt(number, 10) ||
        !parseInt(cc, 10) ||
        cc.includes("+") ||
        number.includes("+")
      ) {
        return (
          <span>
            Number and Country Code to be a integer and
            <br /> Do not add a '+' in Country Code
          </span>
        );
      } else {
        return "";
      }
    } else {
      return "";
    }
  }
  return (
    <>
      <GithubIcon />
      <header>
        <h1>Whatsapp Anyone</h1>{" "}
        <h2>
          {" "}
          without "<span className="sav">saving</span>" the contact
        </h2>
      </header>
      <div className="App card">
        <div className="input">
          <label>Country Code</label>
          <input
            ref={ref}
            type="tel"
            className="cc"
            name="cc"
            placeholder="91"
            maxLength="6"
            value={cc}
            onChange={handleInpChange}
          />
        </div>
        <div className="input">
          <label>Phone Number</label>
          <input
            className="number"
            type="tel"
            name="number"
            placeholder="8922114455"
            maxLength="20"
            value={number}
            onChange={handleInpChange}
          />
        </div>
        <p className="error" role="alert">
          {handleError()}
        </p>
        <a href={link} className="message">
          <WaIcon />
          Message
        </a>
      </div>
    </>
  );
}
function WaIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="wa-icon"
      viewBox="0 0 512 512"
    >
      <title>Logo Whatsapp</title>
      <path
        d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
        // fillRule="evenodd"
        fill="#4FCE5D"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <a
      href="https://github.com/ad99526/whatsapp-anyone"
      target="_blank"
      without
      rel="noreferrer"
      class="github-corner"
      aria-label="View source on Github"
    >
      <svg viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style={{ transformOrigin: "130px 106px" }}
          class="octo-arm"
        ></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        ></path>
      </svg>
    </a>
  );
}
