import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const FormTableCategory = () => {
  const [fetchetData, setFetchetData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get(`http://localhost:3001/allcategory`);
    if (result && result.data.length > 0) {
      const data = result.data.map((item) => {
        item.cat_type = JSON.parse(item.cat_type);
        return item;
      });
      setFetchetData(data);
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th width="5%" className="text-center">
              ลำดับ
            </th>
            <th width="30%" className="text-center">
              ชื่อหมวดหมู่
            </th>
            <th className="text-center">ประเภท</th>
            <th width="15%" className="text-center">
              วันที่
            </th>
            <th width="15%" className="text-center">
              รายละเอียด
            </th>
          </tr>
        </thead>
        <tbody>
          {fetchetData.map((item, index) => (
            <tr key={index}>
              <td>{item.cat_id}</td>
              <td>{item.cat_name}</td>
              <td>
                {item.cat_type.map((typename, typenameIndex) => (
                  <span key={typenameIndex}>
                    {typename.typename}
                    {typenameIndex < item.cat_type.length - 1 ? ", " : ""}
                  </span>
                ))}
              </td>
              <td>{item.date}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default FormTableCategory;
