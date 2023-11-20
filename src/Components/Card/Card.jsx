import './card.scss'

export default function Card() {
  return (
    <div className="card">
        <div className="card__img">
            <img src="../public/img/photo.png" alt="img" />
        </div>
        <div className="card__text">
            <p className="card__text-price">8$</p>
            <p className="card__text-name">Extra Cheese</p>
            <p className="card__text-weight">512 g</p>
            <button className="card__text-btn">Add to basket</button>
        </div>
    </div>
  )
}
