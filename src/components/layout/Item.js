import React from 'react';
import PropTypes from 'prop-types';

import { margin, padding } from './commonStyleSets';

const Item = (props) => {
  const gridProps = {
    ...margin(props),
  };
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
      <div
        style={{
          width: '100%',
          height: '100%',
          ...padding(props),
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

Item.propTypes = {
  rs: PropTypes.number,
  re: PropTypes.number,
  cs: PropTypes.number,
  ce: PropTypes.number,
  ...margin.propTypes,
  ...padding.propTypes,
};


export default Item;
