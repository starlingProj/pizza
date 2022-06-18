import React from 'react'
const Categories = React.memo(function Categories({ activeCategory, items,id, onClickCategory }) {

  return (
    <div className="categories">


      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null,null)}

        >Всі піци</li>
        {
          items.map((name, index) => (

            <li
              className={activeCategory === name ? 'active' : ''}
              key={`${name}_${index}`}
              onClick={() => onClickCategory(name,id[index])}
            >{name}</li>

          ))

        }
      </ul>
    </div>
  )
}
)
export default Categories;