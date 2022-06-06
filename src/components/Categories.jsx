import React from 'react'

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState('');
  const setCategories = (index) => {
    setActiveItem(index);

  }
  return (
    <div className="categories">


      <ul>
        <li onClick={() => setCategories('')}
                  className={activeItem === '' ? 'active' : ''}
          
          >Всі піци</li>
        {
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              key={`${name}_${index}`}
              onClick={() => setCategories(index)}
            >{name}</li>

          ))

        }
      </ul>
    </div>
  )
}

export default Categories;