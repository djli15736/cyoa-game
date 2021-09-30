import { useState } from 'react';
import { Button, Card as BootstrapCard, Col } from 'react-bootstrap';
import { Power } from '../interfaces/power';


export function PowerViewer({power, points, setPoints}: {power: Power, points: number, setPoints: (p: number)=>void}): JSX.Element {
    const[selected, setSelected] = useState<boolean>(false);
    
    const subtractPoints = () => {
        setPoints(points-power.Cost);
    };

    const addPoints = () => {
        setPoints(points+power.Cost);
    };

    function selectPower(){
        if(selected) {
            addPoints();
        }
        else {
            subtractPoints();
        }
     }

    return <BootstrapCard className={selected ? "power-card-clicked border-dark" : "power-card border-dark"}>
            <BootstrapCard.Body>
                <BootstrapCard.Title>{power.Name}</BootstrapCard.Title>
                <BootstrapCard.Text>
                    <strong>Description:</strong> {power.Description}
                </BootstrapCard.Text>
                <BootstrapCard.Text>
                    <strong>Cost:</strong> {power.Cost}
                </BootstrapCard.Text>
                <Button onClick={()=>{selectPower(); setSelected(!selected)}}>Select</Button> 
            </BootstrapCard.Body>
        </BootstrapCard>
}