import React from 'react';

const BareLayout = (props) => (
  <div>
    <h1>App!</h1>
    <hr />
    {props.children}
  </div>
);

export default BareLayout;