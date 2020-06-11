import React from 'react';

// Component with custom logic (Only returns a React component)
const WithLogic = (WrappedComponent, className) => {
    console.log("[WithLogic.js] My custom logic in a high order component");
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default WithLogic;