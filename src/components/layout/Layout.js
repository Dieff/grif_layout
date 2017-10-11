import React from 'react';
import PropTypes from 'prop-types';

import { allAlignment, gridTemplate } from './commonStyleSets';

const Layout = (props) => {
  const gridProps = {
    display: 'grid',
    ...allAlignment(props),
    ...gridTemplate(props),
  };
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
  ...allAlignment.propTypes,
  ...gridTemplate.propTypes,
};

Layout.defaultProps = {
  children: <div />,
  gap: '0px',
  rows: 2,
  columns: 1,
};

export default Layout;
