import PropTypes from 'prop-types';

const margin = (props) => {
  const addStyles = {};
  Object.keys(props).forEach(key => {
    const val = props[key];
    switch (key) {
    case 'mt':
      addStyles.marginTop = val;
      break;
    case 'mb':
      addStyles.marginBottom = val;
      break;
    case 'ml':
      addStyles.marginLeft = val;
      break;
    case 'mr':
      addStyles.marginRight = val;
    }

  });
};

margin.propTypes = {

};

const padding = () => {

};

padding.propTypes = {

};
