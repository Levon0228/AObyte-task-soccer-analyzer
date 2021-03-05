/** @format */

import React from "react";
import s from "../styles/SoccerAnalyzer.module.css";
import { Accordion, Button, Card } from "react-bootstrap";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Clubs = ({ ligueClubes }) => {
  return (
    <div>
      {ligueClubes.map((clube) => {
        return (
          <div className={s.leftColumn}>
            <Droppable droppableId={clube.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  {...provided.dragHandleProps}>
                  {provided.placeholder}

                  <Draggable draggableId={clube.id}>
                    {(provided) => (
                      <div
                        className={s.item}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <Card key={clube.id}>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey={clube.id}>
                              {clube.title}
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={clube.id}>
                            <Card.Body></Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </div>
                    )}
                  </Draggable>
                </div>
              )}
            </Droppable>
          </div>
        );
      })}
    </div>
  );
};

export default Clubs;
