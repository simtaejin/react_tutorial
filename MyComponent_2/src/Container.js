import React from 'react';

const Container = ({children, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Container;
