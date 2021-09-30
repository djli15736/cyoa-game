import React, { useState } from 'react';
import './App.css';
import POWERS from './assets/powers.json';
import { PowerViewer } from './components/PowerViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Card as BootstrapCard, CardGroup } from 'react-bootstrap';
import { Power } from './interfaces/power';
import { PointBox } from './components/PointBox';



function App(): JSX.Element {
  const [points, setPoints] = useState(70); 

  return (

    <Container className="App">
      <Col>
      <BootstrapCard className="card border-dark bg-info">
            <BootstrapCard.Body>
                <BootstrapCard.Title>Introduction</BootstrapCard.Title>
                <BootstrapCard.Text>So yeah, you got hit by a truck and died. Fortunately for you, I'm really bored and have been looking to watch a new Isekai!
                  Oh, you don't know what that is? I'll be sending you off to another world with some superpowers and will be watching your adventures. I can't make you too powerful 
                  though, or it won't be any fun. That's why I'm giving you 70 points that you can use to pick your own powers. Good luck!
                </BootstrapCard.Text>
            </BootstrapCard.Body>
      </BootstrapCard>
      </Col>
      <Row>
      <CardGroup>
      <PowerViewer power={POWERS[0]} points={points} setPoints={setPoints}></PowerViewer>
      <PowerViewer power={POWERS[1]} points={points} setPoints={setPoints}></PowerViewer>
      <PowerViewer power={POWERS[2]} points={points} setPoints={setPoints}></PowerViewer>
      </CardGroup>
      <CardGroup>
      <PowerViewer power={POWERS[3]} points={points} setPoints={setPoints}></PowerViewer>
      <PowerViewer power={POWERS[4]} points={points} setPoints={setPoints}></PowerViewer>
      <PowerViewer power={POWERS[5]} points={points} setPoints={setPoints}></PowerViewer>
      </CardGroup>
      <CardGroup>
      <PowerViewer power={POWERS[6]} points={points} setPoints={setPoints}></PowerViewer>
      <PowerViewer power={POWERS[7]} points={points} setPoints={setPoints}></PowerViewer>
      <PowerViewer power={POWERS[8]} points={points} setPoints={setPoints}></PowerViewer>
      </CardGroup>
      </Row>
      <PointBox points={points}></PointBox>
      </Container>
  );
}

export default App;
