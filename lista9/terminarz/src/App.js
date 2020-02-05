import React, { useState } from 'react';
import { DisplayEvent } from './Components/DisplayEvent';
import { AddNewEvent } from './Components/AddNewEvent';
import { Container, Row, Col } from 'react-bootstrap';
import './Style/main.scss';

function App() {
    const [events, setEvents] = useState(JSON.parse(localStorage.getItem("events")) || [
      {
        start: "2020-01-01",
        name: "Example Name",
        length: 120,
        type: "Example Type"
      }
    ])

    const addEvent = (start, name, length, type) => {
      const newEvents = [...events, {start, name, length, type}];
      setEvents(newEvents);
      localStorage.setItem("events", JSON.stringify(newEvents));
    }

    const removeEvent = (index) => {
      const newEvents = [...events];
      newEvents.splice(index, 1);
      setEvents(newEvents);
      localStorage.setItem("events", JSON.stringify(newEvents));
    }

    return (
    <div className="App">
      <Container>
        <Row>
          <Col sm = {12} className = "my-4 text-center">
            <h1>Your timetable</h1>
          </Col>
        </Row>
      </Container>
      <div>
        <AddNewEvent addEvent = { addEvent }></AddNewEvent>
        <DisplayEvent removeEvent = { removeEvent } events = { events}></DisplayEvent>
      </div>
    </div>
  );
}
export default App;
