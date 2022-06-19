import React from 'react'
import classNames from "classnames";
import Button from './Button';

function PIzzaBlock({id, name, image, price, types, sizes,onClickAddPizza,addedCount }) {

  let typesName=[];
  for (let i = 0; i < types.length; i++) {
    typesName[i] = types[i].type

  }
  let sizesName=[];
  for (let i = 0; i < sizes.length; i++) {
    sizesName[i] = sizes[i].size

  }
  const availableTypes = ['Звичайна', 'Тонка'];
  const availableSizes = [15, 30, 50];
  const [activeSize, setActiveSize] = React.useState(sizesName[0]);
  const [activeType, setActiveType] = React.useState(typesName[0]);
  console.log(activeSize)
  if(activeSize === availableSizes[0]){
    price = price;
  }
  else if( activeSize === availableSizes[1]){
    price = Number(price)+25;
  }
  else if(activeSize === availableSizes[2]){
    price = Number(price)+40;
  }
  console.log("Ціна",price)
  const onAddPizza=()=>{
    const obj={
      id,
      name,
      image,
      price,
      size:activeSize,
      type:activeType

    }

    onClickAddPizza(obj)
  }
  const onSelectType = (obj) => {
    setActiveType(obj);
  }
  const onSelectSize = (size) => {
    setActiveSize(size);
  }
  function isInteger(num) {
    return (num ^ 0) === num;
  }

  // const slicePrice = (num) => {

  //   !isInteger(Number(num)) ? price = price : price = price.slice(0.2);

  //   if (!isInteger(Number(num))) {
  //     return num;
  //   }
  //   else {

  //     return Number(num)
  //   }
  // }
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={image}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((obj) => (

            <li key={obj}

              onClick={() => onSelectType(obj)}
              className={classNames({
                active: activeType === obj,
                disabled: !typesName.includes(obj)
              })}>

              {obj}</li>
          ))

          }
        </ul>
        <ul>
          {availableSizes.map((size, index) => (

            <li key={size}
              onClick={() => onSelectSize(size)}
              className={classNames({
                active: activeSize === size,
                disabled: !sizesName.includes(size)
              })}>

              {size} см.
            </li>
          ))

          }
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">Ціна: {Number(price)} ₴</div>
        <Button onClick={onAddPizza }
         className='button--add' outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Додати</span>
          {addedCount &&<i>{addedCount}</i>}
          </Button>
        </div>
      
    </div>

  )

}

// PizzaBlock.PropTypes = {
//   name:PropTypes.string.isRequired,
//   image:PropTypes.string.isRequired,
//   price:PropTypes.number.isRequired,
//   types:PropTypes.arrayOf(PropTypes.number).isRequired,
//   sizes:PropTypes.arrayOf(PropTypes.number).isRequired,
// }
export default PIzzaBlock