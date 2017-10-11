import React from 'react';

import { margin, padding, selfAlignment, gridChildren } from './commonStyleSets';

const Item = (props) => {
  const gridProps = {
    ...margin(props),
    ...selfAlignment(props),
    ...gridChildren(props),
  };

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
  ...gridChildren.propTypes,
};

export default Item;
