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
