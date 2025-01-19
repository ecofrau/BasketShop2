import React from "react";
import counter from "../state/counter";
import { observer } from "mobx-react-lite";

function Number() {
    // console.log(counter);
    
  return (
    <div>
      <p>{counter.count}</p>
      <button onClick={() => counter.increment()}>+</button>
      <button onClick={() => counter.decrement()}>-</button>
    </div>
  );
}

export default observer(Number);
