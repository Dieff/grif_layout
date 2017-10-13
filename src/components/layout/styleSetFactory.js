import PropTypes from 'prop-types';

class StyleCreatorPropertyException {
  constructor(propertyName, message = '') {
    this.property = propertyName;
    this.message = message;
  }
  toString() {
    return `${this.property}: ${this.message}`;
  }
}

class PossibleProperty {
  constructor(isDefined = false) {
    this._isDefined = isDefined;
    this._value = false;
  }
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v;
  }
  get isDefined() {
    return this._isDefined;
  }
}

const styleCreatorFactory = (preStylePropertiesMap) => {
  const stylePropertiesMap = new Map(
    [...preStylePropertiesMap.keys()].map(
      propName => [
        propName,
        ((propDef) => {
          const newPropDef = {};
          if (!('name' in propDef)) {
            throw new StyleCreatorPropertyException(
              'name',
              'property "name" required when defining a style set'
            );
          } else {
            newPropDef.name = propDef.name;
          }
          newPropDef.validator = ('validator' in propDef) ? 
            propDef.validator : (f) => f;
          newPropDef.type = ('type' in propDef) ? 
            propDef.type : PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
          newPropDef.default = new PossibleProperty('default' in propDef);
          if (newPropDef.default.isDefined) {
            newPropDef.default.value = propDef.default;
          }
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

  const keys = [...stylePropertiesMap.keys()];

  creator.propTypes = keys.reduce(
    (sum, key) => {
      sum[key] = stylePropertiesMap.get(key).type;
      return sum;
    }, {}
  );

  creator.defaultProps = keys.filter(
    key => stylePropertiesMap.get(key).default.isDefined
  ).reduce(
    (sum, key) => {
      sum[key] = stylePropertiesMap.get(key).default.value;
      return sum;
    }, {}
  );

  return creator;
};

export default styleCreatorFactory;
