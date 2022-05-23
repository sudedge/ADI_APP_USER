import { SET_USER_NAME, SET_CHOOSE_DATA,SET_SECURE_TEXT,SET_MODAL_VISIBLE,SET_INCREMENT_VALUE} from './action';

const initialState = {
    name: false,
    choosedata: "Select Language",
    securetext:true,
    modalvisible:false,
    incrementvalue:0
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, name: action.payload };
     
            case SET_CHOOSE_DATA:
                return { ...state, choosedata: action.payload };
            
                case SET_SECURE_TEXT:
                return { ...state, securetext: action.payload };

                case SET_MODAL_VISIBLE:
                    return { ...state, modalvisible: action.payload };

                    case SET_INCREMENT_VALUE:
                        return { ...state,incrementvalue: action.payload };
        default:
            return state;
    }
}

export default userReducer;