import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 :root {
    --highlight: #e20e8d;
    --background: #030518;
    --white: #eeeeee;
    --grey: #cccccc;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--background);
  color: var(--white);

}

html{
  font-size: 62.5%;
}

html, body, #__next{
  height: 100%;
}

p{
  font-size: 2rem;
  line-height:  var(--medium)
}

a{
  color: var(--highlight);
}
`
export default GlobalStyles
