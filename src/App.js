import "./App.css";
import { useState } from "react";

function App() {
  const [output, setOutput] = useState("");
  const [dob, setDob] = useState("");
  const [luckyNum, setLuckyNum] = useState("");

  function getDOB(event) {
    setDob(event.target.value);
  }

  function getLuckyNum(event) {
    setLuckyNum(event.target.value);
  }

  function calculateSum(dob) {
    let sum = 0;
    const dateOfBirth = dob.replaceAll("-", "");
    for (let num of dateOfBirth) {
      sum = sum + Number(num);
    }
    return sum;
  }

  function checkNumber(dob, luckyNumber) {
    if (dob || luckyNumber === "") {
      alert("Please Enter both the Numbers!");
    } else {
      const sum = calculateSum(dob);
      if (sum % luckyNumber === 0) {
        setOutput("Your Bithdate is very Lucky!🥳");
      } else {
        setOutput("Your birthdate is not Lucky!😞");
      }
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Is Your Birthdate Lucky?🥳</h1>
        <div id="dob-container">
          <label htmlFor="dob">Enter Your Date of Birth:</label>
          <br />
          <input type="date" id="dob" onChange={getDOB}></input>
        </div>
        <div id="luckyNum-container">
          <label htmlFor="lucky-num">What's your Lucky Number:</label>
          <br />
          <input type="number" id="lucky-num" onChange={getLuckyNum}></input>
        </div>
        <button onClick={() => checkNumber(dob, luckyNum)}>Check</button>
        <div id="output">{output}</div>
      </div>
    </div>
  );
}

export default App;
