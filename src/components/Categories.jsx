import React from 'react'
<<<<<<< HEAD

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState('');
  const setCategories = (index) => {
    setActiveItem(index);

  }
=======
const Categories = React.memo(function Categories({ activeCategory, items,id, onClickCategory }) {

>>>>>>> 94fba42 (Basic SPA without image)
  return (
    <div className="categories">


      <ul>
<<<<<<< HEAD
        <li onClick={() => setCategories('')}
                  className={activeItem === '' ? 'active' : ''}
          
          >Всі піци</li>
        {
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              key={`${name}_${index}`}
              onClick={() => setCategories(index)}
=======
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
>>>>>>> 94fba42 (Basic SPA without image)
            >{name}</li>

          ))

        }
      </ul>
    </div>
  )
}
<<<<<<< HEAD

=======
)
>>>>>>> 94fba42 (Basic SPA without image)
export default Categories;