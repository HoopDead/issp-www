import React, { useReducer } from 'react';
import { Container, Row, Col, FormControl, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

export function AddNewEvent( {addEvent }) {
    const [value, setValue] = useReducer(
      (state, newState) => ({...state, ...newState}),
      {
        start: '',
        length: '',
        name: '',
        type: ''
      }
    );
  
    const handleChange = (e) => {
      setValue({[e.target.name]: e.target.value});
    }
  
  
    const handleClick = () => {
      if (!value.name) return;
      addEvent(value.start, value.name, value.length, value.type);
      setValue({start: "", name: "", length: "", type: ""});
    }
  
    return( 
    <Container>
      <Row className = "my-auto">
        <Col xs = {12} lg = {6} className = "text-center">
          <InputGroup className = "my-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Name of meeting</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type = "text" name = "name" value = {value.name} onChange = {handleChange}></FormControl>
          </InputGroup>
        </Col>
        <Col xs = {12} lg = {6} className = "text-center">
          <InputGroup className = "my-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Type of meeting</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type = "text" name = "type" value = {value.type} onChange = {handleChange}></FormControl>
          </InputGroup>
        </Col>
        <Col xs = {12} lg = {6} className = "my-auto text-center">
          <InputGroup className = "my-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Meeting length</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type = "text" name = "length" value = {value.length} onChange = {handleChange}></FormControl>
          </InputGroup>
        </Col>
        <Col xs = {12} lg = {6} className = "my-auto text-center">
          <InputGroup className = "my-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Start of meeting</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type = "date" name = "start" value = {value.start} onChange = {handleChange}></FormControl>
          </InputGroup>
        </Col>
        <Col xs = {12} lg = {12} className = "my-auto text-center">
          <Button className = "mt-3" variant = "primary" onClick = {handleClick}>Submit data</Button>
        </Col>
      </Row>
    </Container>);
  }
  