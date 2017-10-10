import PropTypes from 'prop-types';

//window.matchMedia

const styleCreatorFactory = (preStylePropertiesMap) => {
  const stylePropertiesMap = new Map(
    [...preStylePropertiesMap.keys()].map(
      propName => [
        propName,
        ((propDef) => {
          const newPropDef = {};
          if (!('name' in propDef)) {
            console.warn('no prop name');
          } else {
            newPropDef.name = propDef.name;
          }
          newPropDef.validator = ('validator' in propDef) ? 
            propDef.validator : (f, g) => f;
          newPropDef.type = ('type' in propDef) ? 
            propDef.type : PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
          
          return newPropDef;
        })(preStylePropertiesMap.get(propName))
      ]
    )
  );

  const creator = (componentProps) => {
    const styles = {};
    Object.keys(componentProps).filter(
      key => stylePropertiesMap.has(key)
    ).forEach(
      key => {
        const styleProp = stylePropertiesMap.get(key);
        styles[styleProp.name] = styleProp.validator(componentProps[key], componentProps);
      }
    );
    return styles;
  };

  creator.propTypes = {};
  [...stylePropertiesMap.keys()].forEach(
    key => { creator.propTypes[key] = stylePropertiesMap.get(key).type; }
  );

  return creator;
};

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

export { margin, padding, selfAlignment };
