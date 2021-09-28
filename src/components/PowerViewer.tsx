import { Button, Card as BootstrapCard, Col } from 'react-bootstrap';
import { Power } from '../interfaces/power';


export function PowerViewer({power}: {power: Power}): JSX.Element {
    return <Col>
    <BootstrapCard>
            <BootstrapCard.Body>
                <BootstrapCard.Title>{power.Name}</BootstrapCard.Title>
                <BootstrapCard.Text>
                    <strong>Description:</strong> {power.Description}
                </BootstrapCard.Text>
                <BootstrapCard.Text>
                    <strong>Cost:</strong> {power.Cost}
                </BootstrapCard.Text>
                <Button>Select</Button> 
            </BootstrapCard.Body>
        </BootstrapCard>
    </Col>
}