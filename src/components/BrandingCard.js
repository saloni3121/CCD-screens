import React from 'react'
import '../stylings/BrandingCard.css'

function BrandingCard(props) {
    return (
        <div>
            <div className="brand_box">
                <div className="brand_header">
                    <h4 className="brand_title">{props.title}</h4>
                    <p className="brand_date" >01-04-2021</p>
                </div>
                <div className="brand_content">
                    <h6 className="brand_subheading">Brief</h6>
                    <p className="brand_info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Tellus vitae et sem mattis. Tortor viverra ornare ornare dui pellentesque enim ornare vitae.</p>
                    <h6 className="brand_subheading">Client website</h6>
                    <p className="brand_info">www.loremipsum.com</p>
                    <h6 className="brand_subheading">Inspiration/Reference Material</h6>
                    <ul className="brand_list">
                        <li className="brand_listItem">Item 1</li>
                        <li className="brand_listItem">Item 2</li>
                        <li className="brand_listItem">Item 3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BrandingCard
