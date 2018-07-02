export const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}
export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}
export const loadDataFailure = () => {
    return {
        type: 'LOAD_DATA_FAILURE'
    }
}
export const loadDataUARequest = () => {
    return {
        type: 'LOAD_DATA_UA_REQUEST'
    }
}
export const loadDataUASuccess = (data) => {
    return {
        type: 'LOAD_DATA_UA_SUCCESS',
        data
    }
}
export const loadDataUAFailure = () => {
    return {
        type: 'LOAD_DATA_UA_FAILURE'
    }
}