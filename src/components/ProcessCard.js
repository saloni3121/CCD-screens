import React from 'react'
import '../stylings/processCard.css';
import '../stylings/BrandingCard.css';

function ProcessCard({title}) {
    return (
        <div className="process-box">
            <div className="process-title-box">
                <div className="process-card-main-title" >
                    {title}
                </div>
                <div className="process-card-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae et sem mattis. Tortor viverra ornare ornare dui pellentesque enim ornare vitae.
                </div>
            </div>
            <div className="process-content">
                <div className="process-card-title" >
                    Design
                </div>
                <div className="process-card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae et sem mattis. Tortor viverra ornare ornare dui pellentesque enim ornare vitae.
                </div>
                <div className="process-card-title" >
                    Reference Material
                </div>
                <ul className="brand_list" style={{marginTop:'10px'}}>
                        <li className="brand_listItem">Item 1</li>
                        <li className="brand_listItem">Item 2</li>
                        <li className="brand_listItem">Item 3</li>
                </ul>
                <div className="process-card-title">
                    Comments
                </div>
                <textarea className="process-card-text-area">

                </textarea>
                <div className="process-card-title">
                    Attachments 
                    <div className="row process_attachments">
                        <div className="col-lg-1">
                            <div className="process_attach_box"></div>
                        </div>
                        <div className="col-lg-1">
                            <div className="process_attach_box"></div>
                        </div>
                        <div className="col-lg-1">
                            <div className="process_attach_box"></div>
                        </div>
                        <div className="col-lg-1">
                            <div className="process_attach_box"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ProcessCard
