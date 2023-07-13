import Card from '../../components/Card/Card'
import { styled } from 'styled-components'
import { colors } from '../../utils/style/colors'

const CardsContainer = styled.div`
    display: grid;
    gap: 2.4rem;
    grid-template-rows: 35rem 35rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

const PageTitle = styled.h1`
    font-size: 3rem;
    color: black;
    text-align: center;
    padding-bottom: 3rem;
`

const PageSubtitle = styled.h2`
    font-size: 2rem;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 3rem;
`

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },
]

export default function Freelances() {
    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}
