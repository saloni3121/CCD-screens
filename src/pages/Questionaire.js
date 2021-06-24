import React from 'react';
import '../stylings/Questionaire.css';
import Container from '../components/Container';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import LinkIcon from '@material-ui/icons/Link';

function Questionaire() {
    return (
        <Container>
        <div>
            <h1 className="questionaire_title">Branding Questionnaire</h1>
            <h5 className="questionaire_subheading">Use this link to get clients inputs for the project: </h5>
            <div className="align_center">
                <FormControl variant="outlined" className="field_link">
                    <OutlinedInput
                        id="outlined-adornment-password"
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            >
                            <LinkIcon/>
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                <div style={{marginTop:"30px"}}>
                    <button className="btn next-btn-new-project">
                        Create Project
                    </button>
                </div>
            </div>
        </div>
        </Container>
    )
}

export default Questionaire
