import {
    INCREMENT,
    DECREMENT,
    INPUT_TEXT,
    COMMENT_CREATE,
    COMMENT_UPDATE,
    COMMENT_DELETE,
    COMMENTS_LOAD,
    LOADER_DISPALY_ON,
    LOADER_DISPALY_OFF,
    ERROR_DISPALY_ON,
    ERROR_DISPALY_OFF
} from './types';

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: { text, id }
    }
}


export function commentUpdate(text, id) {
    return {
        type: COMMENT_UPDATE,
        data: { text, id }
    }
}


export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}



export function loaderOn() {
    return {
        type: LOADER_DISPALY_ON
    }
}

export function loaderOff() {
    return {
        type: LOADER_DISPALY_OFF
    }
}

export function errorOn(text) {
    // return {
    //     type: ERROR_DISPALY_ON,
    //     text: text
    // }
    return dispatch => {
        dispatch({
            type: ERROR_DISPALY_ON,
            text
        });
        setTimeout(()=>{
            dispatch(errorOff());
        },2000)
    }
}

export function errorOff() {
    return {
        type: ERROR_DISPALY_OFF

    }
}

export function commentsLoad() {
    return async dispatch => {
        try {
            dispatch(loaderOn());
            const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
            const jsonData = await response.json();

            setTimeout(() => {
                dispatch({
                    type: COMMENTS_LOAD,
                    data: jsonData
                });
                dispatch(loaderOff());
            }, 1000);
        } catch (err) {
            dispatch(errorOn("error API"));
            dispatch(loaderOff())
        }


    }
}