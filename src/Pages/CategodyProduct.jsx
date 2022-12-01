import React from "react";
import FormCategory from "../Components/FormCategory";
import { Container, Row, Col, Table, Card, Button } from "react-bootstrap";

function CategodyProduct() {
  return (
    <>
      
      <Container>
        <Row className="justify-content-md-center">
          <Col md="10 card">
            <Card.Body>
              <h4 className="text-center" style={{ padding: 30 }}>
                เพิ่มหมวดหมู่
              </h4>
              <FormCategory />
            </Card.Body>
          </Col>
          <Col md="10 card">
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th width="5%" className="text-center">ลำดับ</th>
                    <th width="30%" className="text-center">ชื่อหมวดหมู่</th>
                    <th className="text-center">ประเภท</th>
                    <th width="15%" className="text-center">วันที่</th>
                    <th width="15%" className="text-center">รายละเอียด</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Computer</td>
                    <td>PC All In One, Laptop, PC</td>
                    <td>01/12/2022</td>
                    <td className="text-center">
                        <Button variant="info">
                            แก้ไข
                        </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategodyProduct;
