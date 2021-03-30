import "./App.css";
import React, { useState, useEffect } from "react";


let data = {
  city : [], 
  category : [],
  type : [], 
  active : []
} 
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

  const [n, setN] = useState("");
  
  const [filteredData, setFilteredData] = useState(mainArray);

  const handleChange = (e) => {
    const { value, name, checked } = e.target;
    
    if (checked === true) {
      data[name].push(value);     
    } else {
      data[name] = data[name].filter((item) => item !== value);   
    }

    console.log(`data`, data);  
    setFilteredData(multiFilter(mainArray, data));

  };
     
  function multiFilter(array, filters) {
    
    const filterKeys = Object.keys(filters);
    // filters all elements passing the criteria
    return array.filter((item) => {
      // dynamically validate all filter criteria
      return filterKeys.every(key => {
        // ignores an empty filter
        if (!filters[key].length) return true;
        return filters[key].includes(item[key]);
      });
    });
  }

  //console.log(`filteredData`, filteredData);
  

  
  
  return (
    <div>
      <h1>City</h1>
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
      </table>
      <br />
      <label>Name</label>
      <input
        type="text"
        onKeyUp={handleChange}
      />
      
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
          {filteredData.map((i, index) => (
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

 /*  if (fName) {
      // console.log(`fName`, fName);
      filteredName = data.filter(function (e) {
        return e.name == fName;
      });
      console.log(`filteredName`, filteredName);
      //setData(filteredName);
    } */

     /* function getKeyByValue(object, value) {
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value) return prop;
      }
    }
  } */
 /* if (n) {
    console.log(`n`, n);
    let filteredName = filteredData.filter(function (e) {
      return e.name == n;
    });
    console.log(`filteredName`, filteredName);
    //setFilteredData(filteredName);
    //setData(filteredName);
  } */