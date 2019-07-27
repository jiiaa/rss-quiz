import React from 'react';

const TestComponent = props => {

    console.log("test: ", props);

    const { name, category, bgcolor} = props;

    return (
        <div>
            <li>{name}></li>
            <li>{category}</li>
            <li>{bgcolor}</li>
        </div>
    )
}

export default TestComponent;