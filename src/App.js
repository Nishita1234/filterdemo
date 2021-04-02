import "./App.css";
import React, { useState, useEffect } from "react";
import CustomTable from "./components/TableRe";
//import CustomTable from "./components/TableRe";

function App() {
  let mainArray = [
    {
      id: 1,
      name: "foo",
      city: "dallas",
      category: "one",
      type: "A",
      active: "FALSE",
      // state: "guj"
    },
    {
      id: 2,
      name: "bar",
      city: "dallas",
      category: "one",
      type: "B",
      active: "FALSE",
      //state: "guj"
    },
    {
      id: 3,
      name: "jim",
      city: "san francisco",
      category: "one",
      type: "B",
      active: "TRUE",
      //state: "raj"
    },
    {
      id: 4,
      name: "jane",
      city: "denver",
      category: "two",
      type: "C",
      active: "FALSE",
      //state: "mah"
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

  let myObj = {};
  let data = {};
  for (let i = 0; i < filteredAry.length; i++) {
    myObj[filteredAry[i]] = [];
    data[filteredAry[i]] = [];
    myObj[filteredAry[i]].push(distinctArrayValue[i]);
  }
  
 data.name = "";
 console.log(`data`, data);
  const [myData, setMyData] = useState(data);
 
  const [filteredData, setFilteredData] = useState(mainArray);

  const handleChange = (e) => {
    const { value, name, checked } = e.target;

    if (checked === true) {
      
     // data[name].push(value);
      setMyData({...myData, [name]:[...myData[name], value]});
    } else {
      if (name === "name") {
       // data[name] = value;
        setMyData({...myData, [name]:value})
      } else {
        //data[name] = data[name].filter((item) => item !== value);
        setMyData({...myData,[name]: [...myData[name].filter((item) => item !== value)] })
      }
    }
  };
  console.log(`myData`, myData);

  useEffect(() => {
    setFilteredData(multiFilter(mainArray, myData));

  }, [myData]);


  function multiFilter(array, filters) {
    const filterKeys = Object.keys(filters);
   
    return array.filter((item) => {
      return filterKeys.every((key) => {
       if (key === "name")
          return (
            item.name.toLowerCase().indexOf(filters[key].toLowerCase()) !== -1
          );
       if (!filters[key].length) return true;
        return filters[key].includes(item[key]);
      });
    });
  }
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

            {Object.values(myObj).map((value, index) => {
              return (
                <>
                  {
                    value.map((v, i) => {
                        return (
                        
                          <td>
                            {
                              v.map((val,ind) => {
                                return ( 
                                    <tr>
                                      {val}
                                      <label className="switch">
                                        <input
                                          type="checkbox"
                                          name={filteredAry[index]}
                                          value={val}
                                          onChange={handleChange}
                                        />
                                        <span className="slider round"></span>
                                      </label>
                                    </tr>         
                                )
                              })
                            }
                          </td>
                      )
                    })
                  }
                </>
              )
            })
            }
          </tr>
        </tbody>
      </table>
      <br />
      <label>Name</label>
      <input type="text" name="name" onKeyUp={handleChange} />

      <CustomTable filteredData={filteredData} theadKeyMap={headers} />
    </div>
  );
}

export default App;


