import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useEffect, useState } from 'react'

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
    margin: 30px;
`

const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
        color: black;
    }
    & a:first-of-type {
        margin-right: 20px;
    }
`

export default function Survey() {
    const { questionNumber } = useParams()
    let questionNumberInt = Number(questionNumber)
    const prevQuestionNumber =
        questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setIsDataLoading] = useState(true)
    const [error, setError] = useState(null)

    // useEffect(() => {
    //     setIsDataLoading(true)
    //     fetch(`http://localhost:8000/survey`)
    //         .then((res) => res.json())
    //         .then(({ surveyData }) => {
    //             setSurveyData(surveyData)
    //             setIsDataLoading(false)
    //         })
    //         .catch((error) => console.log(error))
    // }, [])

    useEffect(() => {
        async function fetchSurvey(params) {
            setIsDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/survey`)
                const { surveyData } = await response.json()
                setSurveyData(surveyData)
            } catch (error) {
                console.log(error)
                setError(true)
            } finally {
                setIsDataLoading(false)
            }
        }
        fetchSurvey()
    }, [])

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {isDataLoading ? (
                <Loader />
            ) : (
                <QuestionContent>{surveyData[questionNumber]} </QuestionContent>
            )}

            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}
