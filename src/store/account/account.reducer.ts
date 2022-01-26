import {AccountAction, AccountActionType, AccountState} from "./account.type";

const initialState: AccountState = {

    account: null,

    isSignIn: false,
    isCheck: false,
    errors: []

}

export const accountReducer = (state = initialState, action: AccountAction): AccountState => {
    switch (action.type) {

        // Вход

        case AccountActionType.SIGN_IN:
            return {
                ...state,
                isSignIn: true,
                errors: []
            }
        case AccountActionType.SIGN_IN_SUCCESS:
            return {
                ...state,
                account: action.payload,
                isSignIn: false
            }
        case AccountActionType.SIGN_IN_ERROR:
            return {
                ...state,
                isSignIn: false,
                errors: action.payload
            }

        // Проверка токена доступа

        case AccountActionType.CHECK:
            return {
                ...state,
                isCheck: true,
                errors: []
            }
        case AccountActionType.CHECK_SUCCESS:
            return {
                ...state,
                account: action.payload,
                isCheck: false
            }
        case AccountActionType.CHECK_ERROR:
            return {
                ...state,
                isCheck: false,
                errors: action.payload
            }

        // Выход

        case AccountActionType.SIGN_OUT:
            return {
                ...state,
                account: null
            }

        // Состояние по умолчанию

        default:
            return state

    }
}
