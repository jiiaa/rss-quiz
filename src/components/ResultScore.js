import React from 'react'
import { MDBBadge, MDBCard, MDBCardHeader, MDBContainer, MDBRow } from 'mdbreact';
const ResultScore = props => {
    let score = props.userScore.score
    let strikes = props.userScore.strikes
    let total = props.userScore.total

    return (
        <MDBContainer>
            <MDBCard>
                <MDBCardHeader color="primary-color">
                    <span className="head">Your Score</span>
                </MDBCardHeader>
                <div>
                Score: <MDBBadge>{score}</MDBBadge>
                </div>
                <div>
                Strikes: <MDBBadge>{strikes}</MDBBadge>
                </div>
                <div>
                Out of: <MDBBadge>{total}</MDBBadge>
                </div>
            </MDBCard>
        </MDBContainer>
    )
}

export default ResultScore;