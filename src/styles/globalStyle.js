import {createGlobalStyle} from 'styled-components';
import {variables} from './utils';

export const GlobalStyle = createGlobalStyle`
  ${variables}
	body{
		margin: 0;
		padding: 0;
	}
	* {
    box-sizing: border-box;
		
  }
`;
