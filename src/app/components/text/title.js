import React from 'react';

const Title = ({ type, content }) => {
    switch (type) {
        case 'h1':
            return (<h1 className="title">{content}</h1>)
        default:
            return (<h1 className="title">{content}</h1>)
    }
}

export default Title;
