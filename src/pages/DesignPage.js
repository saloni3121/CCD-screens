import React from 'react';
import BrandingCard from '../components/BrandingCard';
import Container from '../components/Container';
import ProcessCard from '../components/ProcessCard';

function DesignPage() {
    return (
            <div>
                <h2 style={{margin: '30px auto'}}>Client Inputs</h2>
                <BrandingCard title="Branding Guide"/>
                <h2 style={{margin: '30px auto'}}>Process</h2>
                <ProcessCard title="Colors" />
                <ProcessCard title="Typography" />
                <ProcessCard title="Photography/Illustration" />
                <ProcessCard title="Logo" />
                <ProcessCard title="Brand Guide Layout" />
                <h2 style={{margin: '30px auto'}}>Output</h2>
                <ProcessCard title="Brand Guide Layout" />

            </div>
        
    )
}

export default DesignPage
