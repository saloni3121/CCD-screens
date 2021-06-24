import React from 'react'
import Container from '../components/Container';
import '../stylings/newProject.css';
import {Form} from 'react-bootstrap';

function NewProject() {
    const handleChange=(e)=>{
     console.log(e.target.value);
    }
    return (
        <Container>
                    <div className="text-center new-project-heading">
                        New Project
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                            <div style={{marginTop:"30px"}}>
                                <p className="new-project-label1">Project Name</p>
                                <div>
                                        <input type="text" className="newProject-text-field1" />
                                </div>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                {/* <p className="new-project-label1">Project Name</p>
                                <div>
                                        <input type="text" className="newProject-text-field1" />
                                </div> */}
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label className="new-project-label1">Categories</Form.Label>
                                        <Form.Control onChange={(e)=>handleChange} className="newProject-text-field1" as="select">
                                                <option value="1">Lorem Ipsum 1</option>
                                                <option value="2">Lorem Ipsum 2</option>
                                                <option value="3">Lorem Ipsum 3</option>
                                                <option value="4">Lorem Ipsum 4</option>
                                                <option value="5">Lorem Ipsum 5</option>
                                        </Form.Control>
                                </Form.Group>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <button className="btn next-btn-new-project">
                                    Next
                                </button>
                            </div>
                    </div>
        </Container>
    )
}

export default NewProject;
