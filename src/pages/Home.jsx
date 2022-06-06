import React from 'react'
import { useSelector } from "react-redux";
import { Categories, SortPopup, PizzaBlock } from '../components/index'
function Home() {

  const { items } = useSelector(({ pizzas }) => ({
    items: pizzas.items
  }))
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясні', 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті']} />
        <SortPopup
          items={[{ name: 'популярності', type: 'popular' },
          { name: 'ціні', type: 'price' },
          { name: 'алфавіту', type: 'alphabet' }]} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {
          items && items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj} />)
          )}
      </div>
    </div>
  )
}

export default Home