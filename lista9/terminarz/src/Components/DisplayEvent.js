import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../Style/main.scss';


export function DisplayEvent({removeEvent, modifyEvent, events}) {

    const removeThisEvent = (index) => {
        removeEvent(index);
    }
    return (
        <Container>
                <Row>
                    <Table id = "displayEvent_table" responsive striped className = "my-4 text-center">
                    <thead>
                        <tr>
                        <th>Start</th>
                        <th>Name</th>
                        <th>Length</th>
                        <th>Type</th>
                        <th>R</th>
                        </tr>
                    </thead>
                    <tbody>
                    {events.map((event, index) => (
                        <tr key = {index}>
                            <td>{event.start}</td>
                            <td>{event.name}</td>
                            <td>{event.length}</td>
                            <td>{event.type}</td>
                            <td onClick = {() => {removeThisEvent(index)}}><FontAwesomeIcon id = "displayEvent_table_delete" icon = {faTrash}></FontAwesomeIcon></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}