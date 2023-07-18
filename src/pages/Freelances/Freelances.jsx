import Card from '../../components/Card/Card'
import { styled } from 'styled-components'
import colors from '../../utils/style/colors'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'

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

const Error = styled.p`
    text-align: center;
    font-size: 2rem;
    color: red;
`

export default function Freelances() {
    const [freelanceProfiles, setFreelanceProfiles] = useState([])
    const [isDataLoading, setIsDataLoding] = useState(false)
    const [error, setError] = useState(false)

    // useEffect(() => {
    //     setIsDataLoding(true)
    //     fetch(`http://localhost:8000/freelances`)
    //         .then((response) => response.json())
    //         .then(({ freelancersList }) => {
    //             setFreelanceProfiles(freelancersList)
    //             setIsDataLoding(false)
    //         })
    //         .catch((error) => console.log(error))
    // }, [])

    useEffect(() => {
        async function dataFetch() {
            setIsDataLoding(true)
            try {
                const response = await fetch(`http://localhost:8000/freelances`)
                const { freelancersList } = await response.json()
                setFreelanceProfiles(freelancersList)
                setError(false)
            } catch (error) {
                console.log('===== error =====', error)
                setError(true)
            } finally {
                setIsDataLoding(false)
            }
        }
        dataFetch()
    }, [])

    if (error) {
        return <Error>Oups il y a eu un problème</Error>
    }

    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isDataLoading ? (
                <Loader />
            ) : (
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
            )}
        </div>
    )
}
