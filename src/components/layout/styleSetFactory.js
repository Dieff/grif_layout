import PropTypes from 'prop-types';

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

export default styleCreatorFactory;
