import React from 'react'
import Card from '../components/Card';
import Container from '../components/Container';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import '../stylings/CreateProject.css'

function CreateProject() {
    return (
        <Container width="70%">
        <div>
            <h1 className="create_title">Create a new Project</h1>
            <div className="row mx-5">
                <div className="col-lg-3">
                    <div className= "mainCard_container">
                        <div>
                            <Button>
                                <AddIcon style={{fontSize:"50px",color:"#707070"}}/>
                            </Button>
                        </div>
                    </div>
                    <div className="mainCard_content">
                        <h3 className="card_title">Blank Project</h3>
                        <h6 className="card_name">Start from scratch</h6>
                    </div>
                </div>
                <div className="col-lg-3">
                    <Card 
                    card_image= "https://www.colorhexa.com/cccccc.png" 
                    card_title="Branding" 
                    card_name= "Everything from branding"
                    />
                </div>
                <div className="col-lg-3">
                    <Card 
                    card_image= "https://www.colorhexa.com/cccccc.png" 
                    card_title="Branding" 
                    card_name= "Everything from branding"
                    />
                </div>
                <div className="col-lg-3">
                    <Card 
                    card_image= "https://www.colorhexa.com/cccccc.png" 
                    card_title="Branding" 
                    card_name= "Everything from branding"
                    />
                </div>

            </div>
        </div>
        </Container>
    )
}

export default CreateProject

// https://meet.google.com/xvj-jcch-quw
// join this meet 