import React from 'react'

const AnswerTitle = props => {
    let title = props.title

    return (
        <>
            {title.map((t, index) => {
                if (t.index === 88) {
                    return <span key={index}
                            style={{backgroundColor: "lightgreen"}}
                            >
                                {t.word}&nbsp;
                            </span>
                } else if (t.index === 99) {
                    return <span key={index}
                            style={{backgroundColor: "red"}}
                            >
                                {t.word}&nbsp;
                            </span>
                } else {
                    return <span key={index}>{t.word}&nbsp;</span>
                }
            })}
        </>
    )
}

export default AnswerTitle;