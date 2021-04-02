import "./App.css";
import React, { useState, useEffect } from "react";

 let x = [];
let big = [];
let filteredName = []; 
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
  const [data, setData] = useState(mainArray);
  //const [setBig, setSetBig] = useState([]);
  //let finalName;
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked === true) {
      setCityName(x.push(value));
    } else {
      x = x.filter((item) => item !== value);
      setCityName(x);
    }
    console.log(`x`, x);
    if (x.length > 0) {
      
      for (let i = 0; i < x.length; i++) {
        big = mainArray.filter(function (e) {
          return (
            e.city == x[i] ||
            e.category == x[i] ||
            e.type == x[i] ||
            e.active == x[i]
          );
        });
      
      
      for (let j = 0; j < big.length; j++) {
        if (i == 0) {         
          xyz.push(big[j]);
          setData(xyz);        
        } else {
          let keyOfValue = getKeyByValue(big[0], x[i]);
          let keyOfPrev = getKeyByValue(xyz[xyz.length-1], x[i-1]);
          
          if (keyOfPrev !== keyOfValue) {
            
            big = xyz.filter(function (e) {
              return (
                e.city == x[i] ||
                e.category == x[i] ||
                e.type == x[i] ||
                e.active == x[i]
              );
            }); 
            xxx = big;
            setData(big);
            console.log(`big`, big);
          } else {
            xyz.push(big[j]);
            setData(xyz);
          }
          }    
      }
    }
    }
    console.log(`xyz`, xyz);
   setData(xyz);
   if(xxx){
     setData(xxx);
   }
  };
  
console.log(`data`, data);
  function getKeyByValue(object, value) {
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value) return prop;
      }
    }
  }

  //useEffect(() => {
   // console.log("hi");
    if (fName) {
      // console.log(`fName`, fName);
      filteredName = data.filter(function (e) {
        return e.name == fName;
      });
      console.log(`filteredName`, filteredName);
      //setData(filteredName);
    }
  //}, [])


  

  let xyz = [];
  let xxx;

  //let yyy;
  //const [filteredArray, setFilteredArray] = useState([]);

  /* if (x.length > 0) {
    for (let i = 0; i < x.length; i++) {
      big = mainArray.filter(function (e) {
        return (
          e.city == x[i] ||
          e.category == x[i] ||
          e.type == x[i] ||
          e.active == x[i] 
        );
      });
      //console.log('big', big);

      for (let j = 0; j < big.length; j++) {
        if (i == 0) {
          xyz.push(big[j]);
          //console.log(`xyz`, xyz);
        
          //setFilteredArray(xyz);
        } else {
          
          //console.log(`x[i-1]`, x[i-1]);
          let keyOfValue = getKeyByValue(big[0], x[i]);
          let keyOfPrev = getKeyByValue(xyz[xyz.length-1], x[i-1]);
          //console.log(`keyOfValue`, keyOfValue);
          //console.log(`keyOfPrev`, keyOfPrev);
          if (keyOfPrev !== keyOfValue) {
           // console.log(`xyz`, xyz);
           // console.log(`mainArray`, mainArray);
            mainArray = xyz;
            //console.log(`mainArray`, mainArray);
            big = mainArray.filter(function (e) {
              return (
                e.city == x[i] ||
                e.category == x[i] ||
                e.type == x[i] ||
                e.active == x[i]
              );
            });
            //console.log("big", big);

            //setFilteredArray(big);
            mainArray = big;
            xxx = big;
            //mainArray = xyz;
            //console.log(`mainArray`, mainArray);
          } else {
            xyz.push(big[j]);
          }
        }
      }
    }
    //console.log(`xxx`, xxx);
    mainArray = xyz;
    if(xxx){
      mainArray = xxx
    }
    
  } */
  //console.log(`mainArray`, mainArray);

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
          setFName(e.target.value);
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
          {data.map((i, index) => (
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




/*  const uniqueData = (mainArray) => {
    const distinct = (v, i, s) => {
      return s.indexOf(v) === i;
    };
    return mainArray.filter(distinct);
  }; 
console.log(`mainArray.filter(distinct)`, mainArray.filter(distinct)); */






import "./App.css";
import React, { useState, useEffect } from "react";
import CustomTable from "./components/TableRe";

let data = {
  city: [],
  category: [],
  type: [],
  active: [],
  name: "",
};

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

  const headers = Object.keys(mainArray[0]);
  console.log(`headers`, headers);

  let filteredAry = headers.filter(function (e) {
    return e !== "id";
  });
  filteredAry = filteredAry.filter(function (e) {
    return e !== "name";
  });

  const myMainArrayValues = filteredAry.map((v, index) => {
    return mainArray.map((value, i) => {
      return mainArray[i][v];
    });
  });

  const distinct = (v, i, s) => {
    return s.indexOf(v) === i;
  };

  const distinctArrayValue = myMainArrayValues.map((v, i) => {
    return v.filter(distinct);
  });

  console.log(`distinctArrayValue`, distinctArrayValue);

  const city = mainArray.map((v, i) => {
    return mainArray[i].city;
  });
  //console.log(`city`, city);

  const category = mainArray.map((v, i) => {
    return mainArray[i].category;
  });

  const type = mainArray.map((v, i) => {
    return mainArray[i].type;
  });

  const active = mainArray.map((v, i) => {
    return mainArray[i].active;
  });

  const filteredCity = city.filter(distinct);
  //console.log(`filteredCity`, filteredCity);
  const filteredCat = category.filter(distinct);

  const filteredType = type.filter(distinct);

  const filteredActive = active.filter(distinct);

  const [filteredData, setFilteredData] = useState(mainArray);

  const handleChange = (e) => {
    const { value, name, checked } = e.target;

    if (checked === true) {
      data[name].push(value);
    } else {
      if (name === "name") {
        data[name] = value;
        console.log(`data[name]`, data[name]);
      } else {
        data[name] = data[name].filter((item) => item !== value);
      }
    }

    console.log(`data`, data);
    setFilteredData(multiFilter(mainArray, data));
  };

  function multiFilter(array, filters) {
    const filterKeys = Object.keys(filters);
    //console.log(`filterKeys`, filterKeys);
    // filters all elements passing the criteria
    return array.filter((item) => {
      // dynamically validate all filter criteria
      //console.log(`item`, item)
      return filterKeys.every((key) => {
        //console.log(`key`, key);
        if (key === "name")
          return (
            item.name.toLowerCase().indexOf(filters[key].toLowerCase()) !== -1
          );
        // ignores an empty filter

        //console.log(`filterKeys`, filterKeys);
        if (!filters[key].length) return true;
        //console.log(`filters[key]`, filters[key]);
        //console.log(`item[key]`, item[key]);
        return filters[key].includes(item[key]);
      });
    });
  }

  //console.log(`filteredData`, filteredData);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {filteredAry.map((value, index) => {
              return (
                <>
                  <th key={index}>{value}</th>
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
          
          {distinctArrayValue.map((v, i) => {
            return (
              <>
                {/* <tr key={i}> */}
                  {v.map((value, index) => {
                    return (
                      <td>
                        {value}
                        <label className="switch">
                          <input
                            type="checkbox"
                            name="city"
                            value={value}
                            onChange={handleChange}
                          />
                          <span className="slider round"></span>
                        </label>{" "}
                      </td>
                    );
                  })}
               {/*  </tr> */}
              </>
            );
          })}
          
          </tr>
        </tbody>
      </table>

      {/* <h1>City</h1>
      <table>
        {filteredCity.map((v, i) => {
          return (
            <tr key={i}>
              <td>
                {v}
                <label className="switch">
                  <input
                    type="checkbox"
                    name="city"
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
                    name="category"
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
                    name="type"
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
                    name="active"
                    value={v}
                    onChange={handleChange}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
          );
        })}
      </table> */}
      <br />
      <label>Name</label>
      <input type="text" name="name" onKeyUp={handleChange} />

      <CustomTable filteredData={filteredData} theadKeyMap={headers} />
    </div>
  );
}

export default App;
