import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        type="search"
        className="w-75 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((player) =>
              player.name.toLowerCase().includes(search.toLowerCase().trim())
            )
            .map((player, i) => {
              return (
                <Col md={6} lg={4} xl={3} key={i}>
                  <PlayerCard {...player} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
