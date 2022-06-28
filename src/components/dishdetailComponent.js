import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Label, Col, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

class Dishdetail extends Component {

    constructor(props) {
        super(props);


        this.state = {
            ratings: '1',
            name: '',
            comment: '',
            touched: {

                name: false,
                comment: false

            }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }
    toggleModal() {

        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }


    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const isNumber = (val) => !isNaN(Number(val));
        const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

        //alert(this.props.selectedDish);
        var dish = [];
        dish = [this.props.dish];
        //  alert(dish);

        //  alert(JSON.stringify(this.props.dish));
        if (dish != '')

            return (


                <div className='container'>



                    <br />

                    {dish.map(dish =>

                        <div className='row'>

                            <div className='col-lg-5'>

                                <Card className='container'>
                                    <CardImg top src={dish.image} alt={dish.name} />
                                    <CardBody>
                                        <CardTitle>{dish.name}</CardTitle>
                                        <CardText>{dish.description}</CardText>
                                    </CardBody>

                                </Card>

                                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                                    <ModalBody>
                                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                                            <Row className="form-group">
                                                <Label htmlFor="ratings" md={4}>Rating</Label>
                                            </Row>
                                            <Row className="form-group">

                                                <Col md={12}>
                                                    <Control.select model=".ratings" name="ratings"
                                                        className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Control.select>

                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Label htmlFor="name" md={4}>Your Name</Label>
                                            </Row>
                                            <Row className="form-group">

                                                <Col md={12}>
                                                    <Control.text model=".name" id="name" name="name"
                                                        placeholder="Name"
                                                        className="form-control"
                                                        validators={{
                                                            required, minLength: minLength(2), maxLength: maxLength(15)
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".name"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required',
                                                            minLength: 'Must be greater than 2 characters',
                                                            maxLength: 'Must be 15 characters or less'
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Label htmlFor="comment" md={4}>Comment</Label>
                                            </Row>
                                            <Row className="form-group">

                                                <Col md={12}>
                                                    <Control.textarea model=".comment" id="comment" name="comment"
                                                        rows="12"
                                                        className="form-control" />
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Col md={{ size: 10, offset: 2 }}>
                                                    <Button type="submit" color="primary">
                                                        Submit
                                                    </Button>
                                                </Col>
                                            </Row>

                                        </LocalForm>


                                    </ModalBody>
                                </Modal>
                            </div>

                            <div className='col-lg-5'>

                                <Card>
                                    <CardTitle>Comments</CardTitle>

                                    {dish.comments.map((sub) =>

                                        <label><b>{sub.comment}</b><br />
                                            --{sub.author},
                                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).
                                                format(new Date(Date.parse(sub.date)))}</label>


                                    )}

                                </Card>
                                <br /><br />
                                <Button outline onClick={this.toggleModal}><span className="fa fa-edit"></span> Submit Comment</Button>


                            </div>


                        </div>

                    )}
                </div>

            )


    }

}

export default Dishdetail;