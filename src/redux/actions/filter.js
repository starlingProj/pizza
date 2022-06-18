<<<<<<< HEAD
const setSortBy =(name)=>({
    type:'SET_SORT_BY',
    payload:name,
});

const setCategory = (catIndex)=>({
    type:'SET_CATEGORY',
    payload:catIndex,
=======
export const setSortBy =(type)=>({
    type:'SET_SORT_BY',
    payload:type,
});

export const setCategories = (catName,catId)=>({
    type:'SET_CATEGORY',
    payload:{catName,catId},
>>>>>>> 94fba42 (Basic SPA without image)
});