import React from 'react';

// Component with custom logic (Only returns a React component)
const withLogic = (WrappedComponent, className) => {
    console.log("[withLogic.js] My custom logic in a high order component");
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default withLogic;