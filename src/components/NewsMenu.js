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
                    <MDBBadge id="majorHeadlines/YLE_UUTISET.rss" onClick={props.yleMajorNews}>Yle pääuutiset</MDBBadge>
                </div>
                <div>
                    <MDBBadge id="mostRead/YLE_UUTISET.rss" onClick={props.yleMostRead}>Yle luetuimmat</MDBBadge>
                </div>
                <div>
                    <MDBBadge id="recent.rss?publisherIds=YLE_UUTISET&concepts=18-19274" onClick={props.yleFinancial}>Yle talous</MDBBadge>
                </div>
                <div>
                    <MDBBadge id="recent.rss?publisherIds=YLE_NEWS" onClick={props.yleInEnglish}>Yle News in English</MDBBadge>
                </div>
                <div>
                    <MDBBadge id="rss/digi.xml" onClick={props.iltalehtiEnt}>Iltalehti digi & tech</MDBBadge>
                </div>
                <div>
                    <MDBBadge id="rss/viihde.xml" onClick={props.iltalehtiEnt}>Iltalehti viihde</MDBBadge>
                </div>
            </MDBCard>
        </MDBContainer >
    )
}

export default NewsMenu;