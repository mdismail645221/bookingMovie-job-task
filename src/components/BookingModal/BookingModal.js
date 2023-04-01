import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const BookingModal = ({ handleClose, handleShow, shows, setShows, movie }) => {


    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form)
        const name = form.name.value;
        const email = form.email.value;
        console.log({name, email})
        if(name, email, movie){
            let bookingInfo = {
                name: name,
                 email: email,
                  movie: movie}
            localStorage.setItem(`bookingInfo`, JSON.stringify([bookingInfo]) )
        }
    }

    return (
        <section>
        
            <Modal show={shows} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleBooking}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your Name"
                                autoFocus
                                required
                                name="name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                required
                                name="email"
                            />
                        </Form.Group>
                        <Button variant="primary" type='submit' >
                            Book Now
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default BookingModal;