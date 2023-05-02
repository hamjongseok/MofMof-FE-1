import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body{
		margin: 0;
		padding: 0;
	}

	* {
    box-sizing: border-box;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
		border: 1px solid rgba(0,0,0,0.2);
  }

`;
