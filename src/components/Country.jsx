import {useState} from "react";


function Country() {
    const [gold, setGold] = useState(0);

  function handleClick() {
    setGold(gold + 1);
    //console.log("text");
  }

  
  return <div>United States: gold medals {gold}
    <button onClick={handleClick}>+</button>
    </div>;
}

export default Country;