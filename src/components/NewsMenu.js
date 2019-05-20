import React from 'react'
import { MDBContainer, MDBRow } from 'mdbreact';
const NewsMenu = props => {

    return (
        <MDBContainer>
            <div>
                <span className="head">NewsMenu</span>
            </div>
            <div>
                <span onClick={props.yleMajorNews}>Get Yle Major News</span>
            </div>
            <div>
                <span onClick={props.yleMostRead}>Get Yle Most Read News</span>
            </div>
            <div>
                <span onClick={props.yleFinancial}>Get Yle Financial News</span>
            </div>
            <div>
                <span onClick={props.yleInEnglish}>Get Yle News in English</span>
            </div>
        </MDBContainer>
    )
}

export default NewsMenu;