import React from 'react'
import { MDBContainer, MDBRow } from 'mdbreact';
const ResultScore = props => {
    let userScore = props.userScore
    let totalScore = props.totalScore

    return (
        <MDBContainer>
            <div>
                <span className="head">Your Score</span>
            </div>
            <div>
            <span>{userScore}</span>/<span>{totalScore}</span>
            </div>
        </MDBContainer>
    )
}

export default ResultScore;