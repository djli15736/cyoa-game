import { useState } from 'react';
import { Button, Card as BootstrapCard, Col } from 'react-bootstrap';
import { Power } from '../interfaces/power';


export function PointBox({points}: {points: number}): JSX.Element {

    return <Col>
    <BootstrapCard>
            <BootstrapCard.Body>
                <BootstrapCard.Title id="point-box">Points Remaining: </BootstrapCard.Title> {points}
            </BootstrapCard.Body>
        </BootstrapCard>
    </Col>
}