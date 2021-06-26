import './Card.css'

const Card = ({ children }) => {
    return (
        <div className="card-item col-lg-6 col-md-6 col-xxl-4 col-sm-12 mb-4  p-4">
            {children}
        </div>
    );
}

export default Card;