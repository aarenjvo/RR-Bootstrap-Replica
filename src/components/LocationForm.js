import React from 'react'
import Form from 'react-bootstrap/Form'

function EnterLocation() {
    return (
        <Form>
            <Form.Group className="mb-3" id='locationForm'>
                <Form.Control type="email" placeholder="Enter your address..." />
            </Form.Group>
        </Form>
    )
}

export default EnterLocation