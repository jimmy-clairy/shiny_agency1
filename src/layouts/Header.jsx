import { Link } from 'react-router-dom'
import Logo from '../assets/dark-logo.png'
import styled from 'styled-components'
import { StyledLink } from '../utils/style/Atoms'

const HeaderStyle = styled.header`
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HomeLogo = styled.img`
    height: 7rem;
`

export default function Header() {
    return (
        <HeaderStyle>
            <Link to={'/'}>
                <HomeLogo src={Logo} alt="logo" />
            </Link>
            <nav>
                <StyledLink to={'/'}>Accueil</StyledLink>
                <StyledLink to={'/freelances'}>Profils</StyledLink>
                <StyledLink to={'/survey/1'} $isFullLink>
                    Faire le test
                </StyledLink>
            </nav>
        </HeaderStyle>
    )
}
