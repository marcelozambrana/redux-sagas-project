const INIIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ua = (state = INIIAL_STATE, action) => {
    if (action.type === 'LOAD_DATA_UA_REQUEST'){
        return {
            data: [],
            isFetching: true,
            error: false
        }
    }
    if (action.type === 'LOAD_DATA_UA_SUCCESS'){
        return {
            data: action.data,
            isFetching: false,
            error: false
        }
    }
    return state
}

export default ua