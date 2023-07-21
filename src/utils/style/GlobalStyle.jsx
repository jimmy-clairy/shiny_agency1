import { useContext } from 'react'
import { ThemeContext } from '../Context/index'
import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
}

html {
    font-size:62.5%
}

body {
    font-size:1.6rem;
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
    width:90%;
    max-width:120rem;
    margin: auto;
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : 'white')};
}
`

function GlobalStyle() {
    const { theme } = useContext(ThemeContext)
    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
