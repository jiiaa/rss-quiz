import React from 'react'
import { MDBBadge } from 'mdbreact';

const AnswerTitle = props => {
    let title = props.title;
    let link = props.newsLink;
    return (
        <>
            {title.map((t, index) => {
                if (t.index === 88) {
                    return <MDBBadge color="success" key={index}
                            >
                                {t.word}&nbsp;
                            </MDBBadge>
                } else if (t.index === 99) {
                    return <MDBBadge color="danger" key={index}
                            style={{backgroundColor: "red"}}
                            >
                                {t.word}&nbsp;
                            </MDBBadge>
                } else {
                    return <span key={index}>{t.word}&nbsp;</span>
                }
            })}
            <div>
                Read the news article
                <a
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                > here.
                </a>
            </div>
        </>
    )
}

export default AnswerTitle;