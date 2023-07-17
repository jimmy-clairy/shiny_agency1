import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 3rem;
    width: 30rem;
    height: 30rem;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 2.2rem;
    font-weight: normal;
    padding-left: 1.5rem;
`

const CardImage = styled.img`
    height: 15rem;
    width: 15rem;
    align-self: center;
    border-radius: 50%;
`

const CardTitle = styled.span`
    color: black;
    font-size: 2.2rem;
    font-weight: normal;
    align-self: center;
`

Card.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: '',
    label: '',
    picture: DefaultPicture,
}

export default function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}
