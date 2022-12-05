import React from "react";
import { Row, Col, Card} from "react-bootstrap";
import FormAddItem from "../Components/Forms/FormAddItem";

function AddItem() {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col md="10 card">
          <Card.Body>
            <FormAddItem />
          </Card.Body>
        </Col>
      </Row>
    </>
  );
}

export default AddItem;
