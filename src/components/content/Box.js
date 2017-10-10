import React from 'react';

const Box = (props) => (
  <div style={{
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: props.color,
  }}>
    {props.children}
  </div>
);

Box.defaultProps = {
  children: <div />,
};

export default Box;
