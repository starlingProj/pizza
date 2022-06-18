export const setSortBy =(type)=>({
    type:'SET_SORT_BY',
    payload:type,
});

export const setCategories = (catName,catId)=>({
    type:'SET_CATEGORY',
    payload:{catName,catId},
});