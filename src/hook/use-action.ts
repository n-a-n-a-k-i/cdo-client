import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as AccountAction from '../store/account/account.action'

const action = {
    ...AccountAction
}

export const useAction = () => {

    const dispatch = useDispatch()

    return bindActionCreators(action, dispatch)

}
