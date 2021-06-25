import React from 'react';
import TabMenu from '../components/TabMenu';
import Container from '../components/Container'

function MainPage() {
    return (
        <React.Fragment>
            <div style={{display:'flex'}}>
                <div style={{background: '#F5F5F5',height:'800px',width:'300px'}}></div>
                <Container marginTop='5px'>
                    <h1 
                    style={{margin: '80px 25px', fontWeight: '600', fontSize: '48px', fontFamily: 'Poppins',fontStyle: 'normal'}}>
                    Client Name
                    </h1>
                    <TabMenu/>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default MainPage
