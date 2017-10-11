import PropTypes from 'prop-types';
import styleCreatorFactory from './styleSetFactory';

//window.matchMedia

const padding = styleCreatorFactory(
  new Map([
    ['pl', { name: 'paddingLeft' }],
    ['pr', { name: 'paddingRight' }],
    ['pt', { name: 'paddingTop' }],
    ['pb', { name: 'paddingBottom' }],
    ['p', { name: 'padding' }],
  ])
);

const margin = styleCreatorFactory(
  new Map([
    ['m', { name: 'margin' }],
    ['ml', { name: 'marginLeft' }],
    ['mr', { name: 'marginRight' }],
    ['mb', { name: 'marginBottom' }],
    ['mt', { name: 'marginTop' }],
  ])
);

const alignmentValidator = (property) => {
  if ((property === 'start')
    || (property === 'center')
    || (property === 'end')
  ) {
    return property;
  }
  return 'stretch';
};

const selfAlignment = styleCreatorFactory(
  new Map([
    ['xAlign', { name: 'justifySelf', type: PropTypes.string, validator: alignmentValidator}],
    ['yAlign', { name: 'alignSelf', type: PropTypes.string, validator: alignmentValidator }],
  ])
);

const allAlignment = styleCreatorFactory(
  new Map([
    ['xAlign', { name: 'justifyItems', type: PropTypes.string, validator: alignmentValidator}],
    ['yAlign', { name: 'alignItems', type: PropTypes.string, validator: alignmentValidator }],
  ])
);

const gridChildren = styleCreatorFactory(
  new Map([
    ['ce', { name: 'gridColumnEnd' }],
    ['cs', { name: 'gridColumnStart' }],
    ['re', { name: 'gridRowEnd' }],
    ['rs', { name: 'gridRowStart' }],
  ])
);

const makeGridTemplate = (temp) => {
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

const gridTemplate = styleCreatorFactory(
  new Map([
    [ 'rows', {
      name: 'gridTemplateRows',
      type: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
      validator: makeGridTemplate,
    }],
    ['columns', {
      name: 'gridTemplateColumns',
      type: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
      validator: makeGridTemplate,
    }],
    ['gap', {
      name: 'gridGap',
      type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }]
  ])
);

export {
  margin,
  padding,
  selfAlignment,
  allAlignment,
  gridChildren,
  gridTemplate,
};
