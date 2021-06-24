import React from 'react'
import Container from '../components/Container';
import '../stylings/branding.css'
import Checkbox from '@material-ui/core/Checkbox';

function BrandingServices() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return (
        <Container>
            <div className="branding-heading text-center">
                Branding Services
            </div>
            <div style={{margin:'auto',width:'55%'}}>
               <div className="services-text">
               Select the services you want from the list given below:
               </div>
               <div style={{marginTop:'30px',fill:'#000'}}>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{fontSize:'100px'}} />
                  <label for="vehicle1" className="checkbox-option"> Brand Guide</label><br />
               </div>
               <div style={{marginTop:'12px'}}>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                  <label for="vehicle1" className="checkbox-option"> Logo Design</label><br />
               </div>
               <div style={{marginTop:'12px'}}>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <label for="vehicle1" className="checkbox-option">Collaterals</label><br />
               </div>
               <div style={{marginTop:'12px'}}>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <label for="vehicle1" className="checkbox-option"> Packaging Design</label><br />
               </div>
            </div>
            <div style={{marginTop:"30px", marginLeft: '240px'}}>
               <button className="btn next-btn-new-project1">
                     Create Project
               </button>
            </div>
        </Container>
    )
}

export default BrandingServices
