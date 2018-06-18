import React from 'react';

const Hello = (props) => {
    if (props.name) return `hello ${props.name}!!`;
    return 'hello you'
};

export default Hello;