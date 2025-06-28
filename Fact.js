import React, { useState } from "react";

function Fact() {
  const [num, setNum] = useState('');
  const [res, setRes] = useState('');

  const change = (e) => {
    setNum(e.target.value);
  };

  const getFact = (e) => {
    e.preventDefault();
    let x = parseInt(num);
    if (isNaN(x) || x < 0) {
      setRes('Please enter a non-negative integer');
      return;
    }
    let r = 1;
    for (let i = 1; i <= x; i++) {
      r = r * i;
    }
    setRes(r);
  };

  return (
    <form>
      Enter Number:
      <input
        type="text"
        value={num}
        name="t1"
        onChange={change}
      />
      <br />
      <button onClick={getFact}>Find Factorial</button>
      <br />
      The factorial is: {res}
    </form>
  );
}

export default Fact;
