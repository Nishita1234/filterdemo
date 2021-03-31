const CustomTable = ({ filteredData, theadKeyMap }) => {
  const objectValues = (newArray) => Object.values(newArray);

  return (
    <table border="1px" align="center">
      <thead>
        <tr>
          {theadKeyMap.map((value) => (
            <th key={value}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((v, index) => {
          return (
            <tr key={index}>
              {objectValues(v).map((values, i) => {
                return <td key={i}>{values}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomTable;
