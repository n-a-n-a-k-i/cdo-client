import {User} from "../user/user.type";

// Аккаунт

export interface Account {
    jwt: string
    user: User
}

// Параметры для входа

export interface AccountSignIn {
    identifier: string
    password: string
}

// Состояние

export interface AccountState {

    account: null | Account

    isSignIn: boolean
    isCheck: boolean
    errors: string[]

}

// Типы действий

export enum AccountActionType {

    SIGN_IN = 'SIGN_IN',
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
    SIGN_IN_ERROR = 'SIGN_IN_ERROR',

    CHECK = 'CHECK',
    CHECK_SUCCESS = 'CHECK_SUCCESS',
    CHECK_ERROR = 'CHECK_ERROR',

    SIGN_OUT = 'SIGN_OUT'

}

// Вход

interface AccountActionSignIn {
    type: AccountActionType.SIGN_IN
}

interface AccountActionSignInSuccess {
    type: AccountActionType.SIGN_IN_SUCCESS
    payload: Account
}

interface AccountActionSignInError {
    type: AccountActionType.SIGN_IN_ERROR
    payload: string[]
}

// Проверка токена доступа

interface AccountActionCheck {
    type: AccountActionType.CHECK
}

interface AccountActionCheckSuccess {
    type: AccountActionType.CHECK_SUCCESS
    payload: Account
}

interface AccountActionCheckError {
    type: AccountActionType.CHECK_ERROR
    payload: string[]
}

// Выход

interface AccountActionSignOut {
    type: AccountActionType.SIGN_OUT
}

// Действия

export type AccountAction = (

    AccountActionSignIn
    | AccountActionSignInSuccess
    | AccountActionSignInError

    | AccountActionCheck
    | AccountActionCheckSuccess
    | AccountActionCheckError

    | AccountActionSignOut

)
