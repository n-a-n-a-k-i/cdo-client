import {AxiosResponse} from 'axios'
import {Account, AccountSignIn} from "./account.type";
import {accountApi} from "../../api/account.api";
import strapiApi from "../../api/strapi.api";
import {User} from "../user/user.type";

export default class AccountService {

    /**
     * Вход
     * @param accountSignIn
     */
    static async signIn(accountSignIn: AccountSignIn) {
        return accountApi.post<AccountSignIn, AxiosResponse<Account>>('/api/auth/local', accountSignIn)
    }

    /**
     * Проверка токена доступа
     */
    static async check() {
        return strapiApi.get<User>('/api/users/me')
    }

}
