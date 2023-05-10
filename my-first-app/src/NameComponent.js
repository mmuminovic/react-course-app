import React from 'react';
import getMyName from './getMyName';

const NameComponent = () => {
    return <div>{getMyName()}</div>;
};

export default NameComponent;
