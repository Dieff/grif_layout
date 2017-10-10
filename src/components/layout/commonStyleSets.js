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

export { margin, padding, selfAlignment, allAlignment };
