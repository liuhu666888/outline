// @flow
import * as React from 'react';
import styled, { withTheme } from 'styled-components';
import { SearchIcon } from 'outline-icons';
import Flex from 'shared/components/Flex';

type Props = {
  onChange: string => *,
  theme: Object,
};

class SearchField extends React.Component<Props> {
  input: HTMLInputElement;

  handleChange = (ev: SyntheticEvent<*>) => {
    this.props.onChange(ev.currentTarget.value ? ev.currentTarget.value : '');
  };

  focusInput = (ev: SyntheticEvent<*>) => {
    this.input.focus();
  };

  setRef = (ref: HTMLInputElement) => {
    this.input = ref;
  };

  render() {
    return (
      <Flex align="center">
        <StyledIcon
          type="Search"
          size={46}
          color={this.props.theme.textSecondary}
          onClick={this.focusInput}
        />
        <StyledInput
          {...this.props}
          innerRef={this.setRef}
          onChange={this.handleChange}
          spellCheck="false"
          placeholder="search…"
          autoFocus
        />
      </Flex>
    );
  }
}

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 48px;
  font-weight: 400;
  outline: none;
  border: 0;
  background: none;
  color: ${props => props.theme.text};

  ::-webkit-input-placeholder {
    color: ${props => props.theme.placeholder};
  }
  :-moz-placeholder {
    color: ${props => props.theme.placeholder};
  }
  ::-moz-placeholder {
    color: ${props => props.theme.placeholder};
  }
  :-ms-input-placeholder {
    color: ${props => props.theme.placeholder};
  }
`;

const StyledIcon = styled(SearchIcon)`
  position: relative;
  top: 4px;
`;

export default withTheme(SearchField);
