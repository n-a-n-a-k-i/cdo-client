import {Dispatch} from "redux";
import {AccountAction, AccountActionType, AccountSignIn} from "./account.type";
import AccountService from "./account.service";

/**
 * Вход
 * @param accountSignIn
 */
export const accountSignIn = (
    accountSignIn: AccountSignIn
) => (async (dispatch: Dispatch<AccountAction>) => {

    try {

        dispatch({
            type: AccountActionType.SIGN_IN
        })

        const response = await AccountService.signIn(accountSignIn)

        localStorage.setItem('accessToken', response.data.jwt)
        dispatch({
            type: AccountActionType.SIGN_IN_SUCCESS,
            payload: response.data
        })

    } catch (error: any) {

        dispatch({
            type: AccountActionType.SIGN_IN_ERROR,
            payload: [error.response?.data?.error?.message || 'Вход']
        })

    }

})

/**
 * Проверка токена доступа
 */
export const accountCheck = () => (async (dispatch: Dispatch<AccountAction>) => {

    try {

        dispatch({
            type: AccountActionType.CHECK
        })

        const response = await AccountService.check()

        dispatch({
            type: AccountActionType.CHECK_SUCCESS,
            payload: {
                jwt: localStorage.getItem('accessToken') || '',
                user: response.data
            }
        })

    } catch (error: any) {

        dispatch({
            type: AccountActionType.CHECK_ERROR,
            payload: [error.response?.data?.error?.message || 'Проверка токена доступа']
        })

    }

})

/**
 * Выход
 */
export const accountSignOut = () => ((dispatch: Dispatch<AccountAction>) => {

    localStorage.removeItem('accessToken')
    dispatch({
        type: AccountActionType.SIGN_OUT
    })

})
