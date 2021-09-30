import { useState } from 'react';
import { Button, Card as BootstrapCard, Col } from 'react-bootstrap';
import { Power } from '../interfaces/power';


export function PointBox({points}: {points: number}): JSX.Element {

    return <BootstrapCard className="point-box bg-info">
            <BootstrapCard.Body>
                <BootstrapCard.Text id="point-box"><strong>Points Remaining: </strong></BootstrapCard.Text> {points}
            </BootstrapCard.Body>
        </BootstrapCard>
}