import React, { useState } from "react";
import { Container, Row, Col, Card, Tabs, Tab } from "react-bootstrap";

import FormCategory from "../Components/Forms/FormCategory";
import FormTableCategory from "../Components/Controls/FormTableCategory";
import AddItem from "./AddItem";

function CategodyProduct() {
  const [key, setKey] = useState("CategoryItem");

  return (
    <>
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="CategoryItem" title="เพิ่มหมวดหมู่สินค้า">
            <Row className="justify-content-md-center">
              <Col md="10 card">
                <Card.Body>
                  <FormCategory />
                </Card.Body>
              </Col>
              <Col md="10 card">
                <Card.Body>
                  <FormTableCategory />
                </Card.Body>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="AddItem" title="เพิ่มสินค้า">
            <AddItem />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default CategodyProduct;
