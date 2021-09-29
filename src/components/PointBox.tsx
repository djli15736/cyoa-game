import { useState } from 'react';
import { Button, Card as BootstrapCard, Col } from 'react-bootstrap';
import { Power } from '../interfaces/power';


export function PointBox(): JSX.Element {

    return <Col>
    <BootstrapCard>
            <BootstrapCard.Body>
                <BootstrapCard.Title id="point-box">Points Remaining: 100</BootstrapCard.Title>
            </BootstrapCard.Body>
        </BootstrapCard>
    </Col>
}