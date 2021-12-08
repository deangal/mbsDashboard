export const getDomain = (DomainData) => {
    return{
        type: 'GET_DOMAIN',
        payload: DomainData
    }
}

export const addFilterData = (FilterData) => {
    return{
        type: 'ADD_FILTER_DATA',
        payload: FilterData
    }
}

export const removeFilterData = (FilterData) => {
    return{
        type: 'REMOVE_FILTER_DATA',
        payload: FilterData
    }
}

export const addFilter = (newFilter) => {
    return{
        type: 'ADD_FILTERS',
        payload: newFilter
    }
}

export const getSelectedFilter = (selectedFilter) => {
    return{
        type: 'GET_SELECTED',
        payload: selectedFilter
    }
}