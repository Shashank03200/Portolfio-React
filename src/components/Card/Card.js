import './Card.css'

const Card = ({ children }) => {
    return (
        <div className="card-item">
            {children}
        </div>
    );
}

export default Card;