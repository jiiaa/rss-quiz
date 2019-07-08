import React from 'react'
import { MDBCard, MDBCardHeader, MDBContainer, MDBBadge } from 'mdbreact';
const NewsMenu = props => {

    return (
        <MDBContainer>
            <MDBCard>
                <MDBCardHeader color="primary-color">
                    <span className="head">NewsMenu</span>
                </MDBCardHeader>
                <div>
                    <MDBBadge id="majorHeadlines/YLE_UUTISET.rss" onClick={props.yleNews}>Yle pääuutiset</MDBBadge>
                </div>
                <div>
                    <MDBBadge id="mostRead/YLE_UUTISET.rss" onClick={props.yleNews}>Yle luetuimmat</MDBBadge>
                </div>
                <div>
                    <MDBBadge id="recent.rss?publisherIds=YLE_UUTISET&concepts=18-19274" onClick={props.yleNews}>Yle talous</MDBBadge>
                </div>
                <div>
                    <MDBBadge id="recent.rss?publisherIds=YLE_NEWS" onClick={props.yleNews}>Yle News in English</MDBBadge>
                </div>
                <div>
                    <MDBBadge id="digi.xml" onClick={props.iltalehti}>Iltalehti digi & tech</MDBBadge>
                </div>
                <div>
                    <MDBBadge id="viihde.xml" onClick={props.iltalehti}>Iltalehti viihde</MDBBadge>
                </div>
            </MDBCard>
        </MDBContainer >
    )
}

export default NewsMenu;