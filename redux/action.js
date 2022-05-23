export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_CHOOSE_DATA = 'SET_CHOOSE_DATA';
export const SET_SECURE_TEXT = 'SET_SECURE_TEXT ';
export const SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE';
export const SET_INCREMENT_VALUE = 'SET_INCREMENT_VALUE ';


export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};


export const setChoosedata = choosedata => dispatch => {
    dispatch({
        type: SET_CHOOSE_DATA,
        payload: choosedata,
    });
};

export const setsecuretext = securetext => dispatch => {
    dispatch({
        type: SET_SECURE_TEXT,
        payload: securetext,
    });
};


export const setmodalvisible = modalvisible => dispatch => {
    dispatch({
        type: SET_MODAL_VISIBLE,
        payload: modalvisible,
    });
};
    export const setincrementvalue = incrementvalue => dispatch => {
        dispatch({
            type: SET_INCREMENT_VALUE,
            payload: incrementvalue,
        });
    };