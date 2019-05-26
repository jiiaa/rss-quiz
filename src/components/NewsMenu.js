import React from 'react'
import { MDBCard, MDBCardHeader, MDBContainer, MDBBadge } from 'mdbreact';
const NewsMenu = props => {

    return (
        <MDBContainer>
            <MDBCard>
                <MDBCardHeader  color="primary-color">
                    <span className="head">NewsMenu</span>
                </MDBCardHeader>
                <div>
                    <MDBBadge onClick={props.yleMajorNews}>Get Yle Major News</MDBBadge>
                </div>
                <div>
                <MDBBadge onClick={props.yleMostRead}>Get Yle Most Read News</MDBBadge>
                </div>
                <div>
                <MDBBadge onClick={props.yleFinancial}>Get Yle Financial News</MDBBadge>
                </div>
                <div>
                <MDBBadge onClick={props.yleInEnglish}>Get Yle News in English</MDBBadge>
                </div>
            </MDBCard>
        </MDBContainer>
    )
}

export default NewsMenu;