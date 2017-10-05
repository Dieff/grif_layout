import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const gridProps = {};
  if (props.rs) {
    gridProps.gridRowStart = props.rs;
  }
  if (props.re) {
    gridProps.gridRowEnd = props.re;
  }
  if (props.cs) {
    gridProps.gridColumnStart = props.cs;
  }
  if (props.ce) {
    gridProps.gridColumnEnd = props.ce;
  }
  return (
    <div
      style={{
        minWidth: '100%',
        minHeight: '100%',
        overflow: 'hidden',
        ...gridProps,
      }}
    >
      {props.children}
    </div>
  );
};

Item.propTypes = {
  rs: PropTypes.number,
  re: PropTypes.number,
  cs: PropTypes.number,
  ce: PropTypes.number,
};


export default Item;
