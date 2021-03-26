import "./App.css";
import React, { useState, useEffect } from "react";

let x = [];
let big = [];
function App() {
  let mainArray = [
    {
      id: 1,
      name: "foo",
      city: "dallas",
      category: "one",
      type: "A",
      active: "FALSE",
    },
    {
      id: 2,
      name: "bar",
      city: "dallas",
      category: "one",
      type: "B",
      active: "FALSE",
    },
    {
      id: 3,
      name: "jim",
      city: "san francisco",
      category: "one",
      type: "B",
      active: "TRUE",
    },
    {
      id: 4,
      name: "jane",
      city: "denver",
      category: "two",
      type: "C",
      active: "FALSE",
    },
  ];
  //console.log(`mainArray`, mainArray);

  const city = mainArray.map((v, i) => {
    return mainArray[i].city;
  });

  const cat = mainArray.map((v, i) => {
    return mainArray[i].category;
  });

  const type = mainArray.map((v, i) => {
    return mainArray[i].type;
  });

  const active = mainArray.map((v, i) => {
    return mainArray[i].active;
  });

  const distinct = (v, i, s) => {
    return s.indexOf(v) === i;
  };

  const filteredCity = city.filter(distinct);

  const filteredCat = cat.filter(distinct);

  const filteredType = type.filter(distinct);

  const filteredActive = active.filter(distinct);

  const [fName, setFName] = useState("");
  const [cityName, setCityName] = useState([]);

  const [setBig, setSetBig] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked === true) {
      setCityName(x.push(value));
    } else {
      x = x.filter((item) => item !== value);
      setCityName(x);
    }
  };
console.log(`x`, x);
  function getKeyByValue(object, value) {
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value) return prop;
      }
    }
  }

  let xyz = [];
  let xxx;
  let yyy;
  const [filteredArray, setFilteredArray] = useState([]);

  if (x.length > 0) {
    for (let i = 0; i < x.length; i++) {
      big = mainArray.filter(function (e) {
        return (
          e.city == x[i] ||
          e.category == x[i] ||
          e.type == x[i] ||
          e.active == x[i] || 
          e.name == x[i]
        );
      });
      //console.log('big', big);

      for (let j = 0; j < big.length; j++) {
        if (i == 0) {
          xyz.push(big[j]);

          //setFilteredArray(xyz);
        } else {
          console.log(`xyz`, xyz);
          //console.log(`x[i-1]`, x[i-1]);
          let keyOfValue = getKeyByValue(big[0], x[i]);
          let keyOfPrev = getKeyByValue(xyz[xyz.length-1], x[i-1]);
          console.log(`keyOfValue`, keyOfValue);
          console.log(`keyOfPrev`, keyOfPrev);
          if (keyOfPrev !== keyOfValue) {
            mainArray = xyz;
            big = mainArray.filter(function (e) {
              return (
                e.city == x[i] ||
                e.category == x[i] ||
                e.type == x[i] ||
                e.active == x[i]
              );
            });
            console.log("big", big);

            //setFilteredArray(big);
            mainArray = big;
            xxx = big;
            //mainArray = xyz;
            console.log(`mainArray`, mainArray);
          } else {
            xyz.push(big[j]);
           
          }
        }
      }
    }
    console.log(`xxx`, xxx);
    mainArray = xyz;
    if(xxx){
      mainArray = xxx
    }
    
  }
  console.log(`mainArray`, mainArray);
  //console.log(`filteredArray`, filteredArray);
  return (
    <div>
      <h1>City</h1>
      <table>
        {filteredCity.map((v, i) => {
          return (
            <tr key={i}>
              <td>
                {v}{" "}
                <label className="switch">
                  <input
                    type="checkbox"
                    name={v}
                    value={v}
                    onChange={handleChange}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
          );
        })}
      </table>
      <h1>Category</h1>
      <table>
        {filteredCat.map((v, i) => {
          return (
            <tr key={i}>
              <td>
                {v}{" "}
                <label className="switch">
                  <input
                    type="checkbox"
                    name={v}
                    value={v}
                    onChange={handleChange}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
          );
        })}
      </table>
      <h1>Type</h1>
      <table>
        {filteredType.map((v, i) => {
          return (
            <tr key={i}>
              <td>
                {v}{" "}
                <label className="switch">
                  <input
                    type="checkbox"
                    name={v}
                    value={v}
                    onChange={handleChange}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
          );
        })}
      </table>
      <h1>Active</h1>
      <table>
        {filteredActive.map((v, i) => {
          return (
            <tr key={i}>
              <td>
                {v}{" "}
                <label className="switch">
                  <input
                    type="checkbox"
                    name={v}
                    value={v}
                    onChange={handleChange}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
          );
        })}
      </table>
      <br />
      <label>Name</label>
      <input
        type="text"
        name="name"
       
        onChange={(e) => {
          /*  if(e.target.value !== ""){
            setFName(e.target.value);
            x.push(fName);
          }  */
          
        }} 
      />
      {/* {fName} */}
      <table border="1px" align="center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
            <th>Category</th>
            <th>Type</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {mainArray.map((i, index) => (
            <tr key={index}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.city}</td>
              <td>{i.category}</td>
              <td>{i.type}</td>
              <td>{i.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

/* const handleChange = (e) => {
  const {value, checked} = e.target;
  if(checked == true){
    x.push(value);
    setCityName(x);
  }else{
    //setCityName([]);
  }
  
} */

/* if(i > 0){ 
           
          let keyOfValue= getKeyByValue(big[0],x[i]);
          let keyOfPrev =getKeyByValue(xyz[0],x[0]);
          if(keyOfPrev !== keyOfValue){
            console.log("another");
            console.log('insidexyz', xyz);
            mainArray= xyz;
          }
          
         }   */
//console.log('mainArray', mainArray);
