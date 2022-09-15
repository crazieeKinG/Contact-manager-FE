import { ERROR, PENDING, REFRESH, SUCCESS } from "../constants/apiConstant";
import ContactInterface, {
    ContactReducerActionInterface,
    ContactStateInterface,
} from "../interfaces/ContactInterface";

const contactReducer = (
    state: ContactStateInterface,
    action: ContactReducerActionInterface
) => {
    const { type, payload, message } = action;
    switch (type) {
        case PENDING:
            state = {
                ...state,
                status: PENDING,
                message: message as string,
                refresh: false,
            };
            return state;

        case SUCCESS:
            state = {
                allContacts: payload as ContactInterface[],
                status: SUCCESS,
                message: message as string,
                refresh: false,
            };
            return state;

        case ERROR:
            state = {
                ...state,
                status: ERROR,
                message: message as string,
                refresh: false,
            };
            return state;

        case REFRESH:
            state = { ...state, refresh: true };
            return state;

        default:
            return state;
    }
};

export default contactReducer;
