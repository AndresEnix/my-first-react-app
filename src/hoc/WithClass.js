import React from 'react'

// High Order Component that adds css class
const WithClass = props => (
    <div className={props.classes}>{props.children}</div>
);

export default WithClass