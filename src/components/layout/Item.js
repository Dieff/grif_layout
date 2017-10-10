import React from 'react';
import PropTypes from 'prop-types';

import { margin, padding, selfAlignment } from './commonStyleSets';

const Item = (props) => {
  const gridProps = {
    ...margin(props),
    ...selfAlignment(props),
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
        width: '100%',
        height: '100%',
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
  ...margin.propTypes,
  ...padding.propTypes,
  ...selfAlignment.propTypes,
  ce: PropTypes.number,
  cs: PropTypes.number,
  re: PropTypes.number,
  rs: PropTypes.number,
};

export default Item;
