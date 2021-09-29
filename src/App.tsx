import React, { useState } from 'react';
import './App.css';
import POWERS from './assets/powers.json';
import { PowerViewer } from './components/PowerViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Card as BootstrapCard } from 'react-bootstrap';
import { Power } from './interfaces/power';
import { PointBox } from './components/PointBox';



function App(): JSX.Element {
 
  return (
    <Container className="App">
      <Col>
      <BootstrapCard>
            <BootstrapCard.Body>
                <BootstrapCard.Title>Introduction</BootstrapCard.Title>
                <BootstrapCard.Text>Placeholder</BootstrapCard.Text>
            </BootstrapCard.Body>
      </BootstrapCard>
      </Col>
      <Col>
      <PointBox></PointBox>
      </Col>
      <Row>
      <Col>
      <PowerViewer power={POWERS[0]}></PowerViewer>
      <PowerViewer power={POWERS[1]}></PowerViewer>
      <PowerViewer power={POWERS[2]}></PowerViewer>
      </Col>
      <Col>
      <PowerViewer power={POWERS[3]}></PowerViewer>
      <PowerViewer power={POWERS[4]}></PowerViewer>
      <PowerViewer power={POWERS[5]}></PowerViewer>
      </Col>
      <Col>
      <PowerViewer power={POWERS[6]}></PowerViewer>
      <PowerViewer power={POWERS[7]}></PowerViewer>
      <PowerViewer power={POWERS[8]}></PowerViewer>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
