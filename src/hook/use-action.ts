import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as AccountAction from '../store/account/account.action'
import * as ObjectAction from '../store/object/object.action'

const action = {
    ...AccountAction,
    ...ObjectAction
}

export const useAction = () => {

    const dispatch = useDispatch()

    return bindActionCreators(action, dispatch)

}
