import { useState } from "react";
import Papa from "papaparse";

const Form = () => {
  const [header, setHeader] = useState("Header");
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator

    return !!pattern.test(str);
  }

  const changeHandler = (event) => {
    if (event && event.target) setHeader(event.target.files[0].name);

    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  return (
    <div>
      <h2>{header} </h2>
      <div>
        {/* File Uploader */}
        <input
          type="file"
          name="file"
          onChange={changeHandler}
          accept=".csv"
          style={{ display: "block", margin: "10px auto" }}
        />
        <br />
        <br />
        {/* Table */}
        <table>
          <thead>
            <tr>
              {tableRows.map((rows, index) => {
                return (
                  <th
                    key={index}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#2E8BC0",
                      width: "50px",
                      color: "#fff",
                    }}
                  >
                    {rows}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {values.map((value, index) => {
              return (
                <tr key={index}>
                  {value.map((val, i) => {
                    let imgId = val.split("id=");
                    if (i === 1) {
                      // checkImage(val)
                      return (
                        <td key={i} style={{ border: "1px solid #D3D3D3" }}>
                          <img
                            referrerPolicy="no-referrer"
                            src={`https://drive.google.com/uc?id=${imgId[1]}`}
                            width="50%"
                            height="50%"
                          />
                        </td>
                      );
                    } else {
                      return (
                        <td key={i} style={{ border: "1px solid #D3D3D3" }}>
                          {val}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
