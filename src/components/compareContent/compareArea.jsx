/** @format */

import React from "react";
import { Card, Col } from "react-bootstrap";
import styles from "../styles/Analyzer.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Droppable } from "react-beautiful-dnd";

const compareArea = ({ compareItems, index }) => {
  return (
    <Col xs={6}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div
            {...provided.droppableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            {compareItems.map((task, index) => (
              <div className={styles.cardContainer}>
                {!!Object.keys(compareItems).length ? (
                  <Card style={{ width: "14rem" }}>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                ) : (
                  <div className={styles.dropHere}>
                    <h4 className={styles.dropText}> Drag And Drop Here</h4>
                  </div>
                )}
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Col>
  );
};

export default compareArea;
