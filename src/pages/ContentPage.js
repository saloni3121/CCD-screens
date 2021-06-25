import React from 'react';
import BrandingCard from '../components/BrandingCard';
import ProcessCard from '../components/ProcessCard';

function ContentPage() {
    return (
        <div>
            <h2 style={{margin: '30px auto'}}>Client Inputs</h2>
            <BrandingCard title="Marketing "/>
            <h2 style={{margin: '30px auto'}}>Process</h2>
            <ProcessCard title="Landing Page" />
            <ProcessCard title="Social Media Creatives" />
            <ProcessCard title="Banner Design" />
            <ProcessCard title="Ad Design" />
            <h2 style={{margin: '30px auto'}}>Output</h2>
            <ProcessCard title="Delivering Marketing Materials" />
        </div>
        
    )
}

export default ContentPage
