import React from 'react';
import PropTypes from 'prop-types';

import { allAlignment } from './commonStyleSets';

const makeTemplate = (temp) => {
  let a = [];
  if (typeof temp === 'number'){
    a = `repeat(${temp}, 1fr`;
  } else {
    a = temp.map(
      row => (typeof row === 'number') ? `${row*100}fr ` : row
    ).reduce((sum, val) => `${sum} ${val}`, '');
  }
  return a;
};

const Layout = (props) => {
  const gridProps = {
    display: 'grid',
    gridGap: props.gap,
    ...allAlignment(props),
  };
  if (props.rows) {
    gridProps.gridTemplateRows = makeTemplate(props.rows); 
  }
  if (props.columns) {
    gridProps.gridTemplateColumns = makeTemplate(props.columns);
  }
  //TODO make the cs and rs properties detect if valid
  /*const c = React.Children.map(props.children, (child) => {
    if (child.props)
  })*/
  return (
    <div
      style={{
        ...gridProps,
        width: '100%',
        height: '100%',
      }}
    >
      {props.children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  columns: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    PropTypes.number,
  ]),
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rows: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    PropTypes.number,
  ]),
  ...allAlignment.propTypes,
};

Layout.defaultProps = {
  children: <div />,
  gap: '0px',
  rows: 2,
  columns: 1,
};

export default Layout;
