import { useState } from 'react';
import { Button, Card as BootstrapCard, Col } from 'react-bootstrap';
import { Power } from '../interfaces/power';


export function PointBox(): JSX.Element {

    return <Col>
    <BootstrapCard>
            <BootstrapCard.Body>
                <BootstrapCard.Title>Points Remaining:</BootstrapCard.Title>
            </BootstrapCard.Body>
        </BootstrapCard>
    </Col>
}