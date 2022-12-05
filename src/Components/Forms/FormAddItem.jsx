import React from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";

function FormAddItem() {
  return (
    <>
      <h4 className="text-center" style={{ padding: 30 }}>
        เพิ่มข้อมูลอุปกรณ์
      </h4>
      <Form>
        <Form.Group className="mb-3" controlId="formNameItem">
          <Form.Label>ชื่ออุปกรณ์</Form.Label>
          <Form.Control type="text" placeholder="ชื่ออุปกรณ์" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formModel">
          <Form.Label>รุ่น/model</Form.Label>
          <Form.Control type="text" placeholder="รุ่น/model" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSerial">
          <Form.Label>Serial Number</Form.Label>
          <Form.Control type="text" placeholder="Serial Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDetail">
          <Form.Label>รายละเอียด</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="รายละเอียด" />
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          เพิ่มข้อมูล
        </Button>
      </Form>
    </>
  );
}

export default FormAddItem;
