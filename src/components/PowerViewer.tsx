import { useState } from 'react';
import { Button, Card as BootstrapCard, Col } from 'react-bootstrap';
import { Power } from '../interfaces/power';


export function PowerViewer({power, points, setPoints}: {power: Power, points: number, setPoints: (p: number)=>void}): JSX.Element {
    
    const subtractPoints = () => {
        setPoints(points-power.Cost);
    };

    function selectPower(){
        let displayPoints = document.getElementById('point-box');
        subtractPoints();
     }

    return  <Col>
    <BootstrapCard className = "power-card">
            <BootstrapCard.Body>
                <BootstrapCard.Title>{power.Name}</BootstrapCard.Title>
                <BootstrapCard.Text>
                    <strong>Description:</strong> {power.Description}
                </BootstrapCard.Text>
                <BootstrapCard.Text>
                    <strong>Cost:</strong> {power.Cost}
                </BootstrapCard.Text>
                <Button onClick={selectPower}>Select</Button> 
            </BootstrapCard.Body>
        </BootstrapCard>
    </Col>
}