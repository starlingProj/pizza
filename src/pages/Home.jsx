import axios from 'axios';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Categories, SortPopup, PizzaBlock } from '../components/index'
import { setCategories, setSortBy } from "../redux/actions/filter";
import { fetchPizzas } from "../redux/actions/pizzas";
import classNames from "classnames";
import { setCurrentPage } from '../redux/actions/pizzas';
import { addPizzatoCart } from '../redux/actions/cart';

const sortItems = [
  { name: 'популярності', type: '-rating' },
  { name: 'від дешевих до дорогих', type: 'price' },
  { name: 'від дорогих до дешевих', type: '-price' },
  { name: 'алфавіту', type: 'name' },
];

function Home() {
  const categoryName = [];
  const categoryID=[];

  const [post, setPost] = React.useState(null)
  if (post !== null) {
    for (let i = 0; i < post.length; i++) {
      categoryName[i] = post[i].name
    }
    for (let i = 0; i < post.length; i++) {
      categoryID[i] = post[i].id
    }
  }
  
  React.useEffect(() => {
    axios.get('http://ec2-3-131-133-70.us-east-2.compute.amazonaws.com:8000/api/category')
      .then(({ data }) => {
        setPost(data.results)
   

      })
  }, [])
  const createPage=(pages,pagesCount)=>{
    for(let i =1; i<=pagesCount;i++){
      pages.push(i);
      
    }
      }
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(({ filters }) => filters)
  const activePage = useSelector(({ pizzas }) => pizzas.activePage);
 const cartItems = useSelector(({cart})=>cart.items);

  const totalCount = useSelector(({ pizzas }) => pizzas.totalCount);
  const pagesCount = Math.ceil(totalCount/10);
  const pages=[];
  const handleAddPizzaToCart= obj=>{

dispatch(addPizzatoCart(obj))
  }
  createPage(pages,pagesCount);



  React.useEffect(() => {

    dispatch(fetchPizzas(sortBy, category,activePage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy,activePage]);


  const onSelectCategory = React.useCallback((name,id) => {
    dispatch(setCategories(name,id))
    dispatch(setCurrentPage(1))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = useSelector(({ pizzas }) => pizzas.items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category.catName}
          onClickCategory={onSelectCategory}
          items={categoryName}
          id={categoryID} />

        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {
          items && items.map((obj) => (
            <PizzaBlock 
            addedCount={cartItems[obj.id]&& cartItems[obj.id].items.length}
            onClickAddPizza ={handleAddPizzaToCart}
            key={obj.id} 
            {...obj} />)
          )}
      </div>
      <div className="page-block">
            <div className="page-block__selector">
            <ul>
                {totalCount>12&&
                    pages && pages.map((page, index) => (

                        <li  key={page + index}
                        onClick={() => dispatch(setCurrentPage(page))}
                            className={classNames({
                                active: activePage === page,
                                disabled: !pages.includes(page)
                            })}>
                            {page}
                        </li>
                    )
                    )
                }
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Home