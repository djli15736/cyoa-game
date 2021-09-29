import React, { useState } from 'react';
import './App.css';
import POWERS from './assets/powers.json';
import { PowerViewer } from './components/PowerViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Card as BootstrapCard } from 'react-bootstrap';
import { Power } from './interfaces/power';
import { PointBox } from './components/PointBox';



function App(): JSX.Element {
  const [points, setPoints] = useState(100); 

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
      <PointBox points={points}></PointBox>
      </Col>
      <Row>
      <Col>
      <PowerViewer power={POWERS[0]} points={points}></PowerViewer>
      <PowerViewer power={POWERS[1]} points={points}></PowerViewer>
      <PowerViewer power={POWERS[2]} points={points}></PowerViewer>
      </Col>
      <Col>
      <PowerViewer power={POWERS[3]} points={points}></PowerViewer>
      <PowerViewer power={POWERS[4]} points={points}></PowerViewer>
      <PowerViewer power={POWERS[5]} points={points}></PowerViewer>
      </Col>
      <Col>
      <PowerViewer power={POWERS[6]} points={points}></PowerViewer>
      <PowerViewer power={POWERS[7]} points={points}></PowerViewer>
      <PowerViewer power={POWERS[8]} points={points}></PowerViewer>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
