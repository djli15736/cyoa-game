import React from 'react';
import './App.css';
import POWERS from './assets/powers.json';
import { PowerViewer } from './components/PowerViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';


function App(): JSX.Element {
  return (
    <Container className="App">
      <Row>
      <Col>
      <PowerViewer></PowerViewer>
      <PowerViewer></PowerViewer>
      <PowerViewer></PowerViewer>
      </Col>
      <Col>
      <PowerViewer></PowerViewer>
      <PowerViewer></PowerViewer>
      <PowerViewer></PowerViewer>
      </Col>
      <Col>
      <PowerViewer></PowerViewer>
      <PowerViewer></PowerViewer>
      <PowerViewer></PowerViewer>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
