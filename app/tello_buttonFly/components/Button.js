import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import normalize from '../utils/normalizeSizes';
import withPressAnimation from '../utils/withPressAnimation';




export const ButtonStyles = styled.View`
  align-self: center;
  justify-content: center;
  background-color: #ffd200;
  padding-horizontal: ${normalize(15)};
  height: ${normalize(45)};
  border-radius: ${normalize(20)};
  align-items: center;
`;

export const TextStyles = styled.Text`
  color: #000;
  font-size: ${normalize(15)};
`;

/**
 * Button component
 */
const Button = ({
  children,
  loading,
  ...props
}) => (
  <ButtonStyles {...props}>
    <TextStyles>{loading || children}</TextStyles>
  </ButtonStyles>
);

Button.propTypes = {
  /**
   * Textual content which will be passed to component
  */
  children: PropTypes.string,
  /**
   * Text for loading state (e.g. during form submission)
  */
  loading: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  loading: null,
};

export default withPressAnimation(Button);