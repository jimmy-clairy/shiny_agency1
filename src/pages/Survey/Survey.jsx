import { useParams, Link } from 'react-router-dom'

export default function Survey() {
    const { questionNumber } = useParams()
    let questionNumberInt = Number(questionNumber)
    const precedent = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const suivant = questionNumberInt + 1

    return (
        <div>
            <h2>Questionnaire 🧮</h2>
            <h3>Question {questionNumber}</h3>
            <Link to={`/survey/${precedent}`}>Précédent</Link>

            {questionNumberInt === 10 ? (
                <Link to={`/results`}>Resultat</Link>
            ) : (
                <Link to={`/survey/${suivant}`}>Suivant</Link>
            )}
        </div>
    )
}
