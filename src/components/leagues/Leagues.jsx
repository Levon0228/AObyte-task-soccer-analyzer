/** @format */

import React from "react";
import { Accordion, Button, Card, Row, Col, Container } from "react-bootstrap";
import ClubsContanier from "../clubs/ClubsContanier";
import { DragDropContext } from "react-beautiful-dnd";

const Leagues = ({ leagues, clubs, onDragEnd }) => {
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Accordion>
                {leagues.map((league) => {
                  const ligueClubes = league.clubIds.map((clubId) => {
                    return clubs[clubId];
                  });

                  return (
                    <Card key={league.id}>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey={league.id}>
                          {league.title}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={league.id}>
                        <Card.Body>
                          <ClubsContanier ligueClubes={ligueClubes} />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  );
                })}
              </Accordion>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </DragDropContext>
    </div>
  );
};

export default Leagues;
