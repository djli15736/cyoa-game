import React, { useState } from 'react';
import './App.css';
import POWERS from './assets/powers.json';
import { PowerViewer } from './components/PowerViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Power } from './interfaces/power';



function App(): JSX.Element {
  const [points, setPoints] = useState(100); 
 
  return (
    <Container className="App">
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
