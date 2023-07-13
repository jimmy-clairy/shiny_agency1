import homeIllustration from '../../assets/home-illustration.svg'
import { styled } from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import { colors } from '../../utils/style/colors'

const HomerContainer = styled.div`
    margin: 3rem;
    background-color: ${colors.background};
    padding: 6rem 9rem;
    display: flex;
    flex-direction: row;
    max-width: 120rem;
    border-radius: 1rem;
`

const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    ${StyledLink} {
        max-width: 25rem;
    }
`
const HeadingStyle = styled.h2`
    font-size: 2.8rem;
    padding-bottom: 3rem;
    max-width: 30rem;
    line-height: 5rem;
`
const Illustration = styled.img`
    flex: 1;
`
export default function Home() {
    return (
        <HomerContainer>
            <LeftCol>
                <HeadingStyle>
                    Repérez vos besoins, on s’occupe du reste, avec les
                    meilleurs talents
                </HeadingStyle>
                <StyledLink to={'/survey/1'} $isFullLink>
                    Faire le test
                </StyledLink>
            </LeftCol>
            <Illustration
                src={homeIllustration}
                alt="home illustration"
                height={'300'}
            />
        </HomerContainer>
    )
}
