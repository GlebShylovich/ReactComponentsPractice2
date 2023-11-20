import './main.scss'
import Tab from '../Tab/Tab'
import Basket from '../Basket/Basket'
import Card from '../Card/Card'

export default function Main() {
  return (
    <div className="page">
      <div className="page__container">
        <div className="page__categories">
          <Tab />
          <Tab />
          <Tab />
          <Tab />
          <Tab />
          <Tab />
          <Tab />
        </div>
        <div className="page__content">
          <Basket />
          <div className="products">
            <div className="products__title">Burgers</div>
            <div className="card__container">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
