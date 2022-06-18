<<<<<<< HEAD
=======

import axios from 'axios'
>>>>>>> 94fba42 (Basic SPA without image)
 export const setPizzas =(items)=>({
    type:'SET_PIZZAS',
    payload:items,
});
<<<<<<< HEAD

=======
export const setCount = (count)=>({
   type:'SET_COUNT',
   payload:count,
});
 export const fetchPizzas = (sortBy,category,activePage)=>(dispatch) => {

    axios.get(`http://ec2-3-131-133-70.us-east-2.compute.amazonaws.com:8000/api/catalog/?page=${activePage}&${
       category.catId!==null?`category=${category.catId}`:''
      }&ordering=${sortBy.type}`,).then(({ data }) => {
        dispatch(setPizzas(data.results))
        dispatch(setCount(data.count))
      
 });
 }
 export const setCurrentPage = (page) => ({type:"SET_CURRENT_PAGE", payload:page})
 
    //${category!=null ? `category=${category}`:''}&_sort=${sortBy.type}&_order=asc`
>>>>>>> 94fba42 (Basic SPA without image)
