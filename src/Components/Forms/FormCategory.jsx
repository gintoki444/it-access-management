import React from "react";
import { Button, Form } from "react-bootstrap";
function FormCategory() {
  return (
    <>
      <h4 className="text-center" style={{ padding: 30 }}>
        เพิ่มหมวดหมู่
      </h4>
      <Form>
        <Form.Group className="mb-3" controlId="formCatName">
          <Form.Label>ชื่อหมวดหมู่</Form.Label>
          <Form.Control type="text" placeholder="ชื่อหมวดหมู่" />
        </Form.Group>
        <Button variant="primary" type="submit">
          เพิ่มข้อมูล
        </Button>
      </Form>
    </>
  );
}

export default FormCategory;
