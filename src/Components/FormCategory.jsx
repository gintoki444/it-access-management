import React from "react";
import { Button, Form } from "react-bootstrap";
function FormCategory() {
  return (
    <>
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
