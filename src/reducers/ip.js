const INIIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ip = (state = INIIAL_STATE, action) => {
    if (action.type === 'LOAD_DATA_REQUEST'){
        return {
            data: [],
            isFetching: true,
            error: false
        }
    }
    if (action.type === 'LOAD_DATA_SUCCESS'){
        return {
            data: action.data,
            isFetching: false,
            error: false
        }
    }
    if (action.type === 'LOAD_DATA_FAILURE'){
        return {
            data: [],
            isFetching: false,
            error: true
        }
    }
    return state
}

export default ip