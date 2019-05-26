import React from 'react'
import { MDBBadge, MDBCard, MDBCardHeader, MDBContainer, MDBRow } from 'mdbreact';
const ResultScore = props => {
    let userScore = props.userScore
    let totalScore = props.totalScore

    return (
        <MDBContainer>
            <MDBCard>
                <MDBCardHeader color="primary-color">
                    <span className="head">Your Score</span>
                </MDBCardHeader>
                <div>
                <MDBBadge>{userScore} / {totalScore}</MDBBadge>
                </div>
            </MDBCard>
        </MDBContainer>
    )
}

export default ResultScore;