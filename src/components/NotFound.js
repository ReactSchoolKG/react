import React from 'react';

const NotFound = ({location}) => (
    <div className="main-content not-found">
      <h2>Page Not Found</h2>
      No match for <code>{location.pathname}</code>
    </div>
);

export default NotFound;
