import {Dispatch} from "redux";
import {ObjectAction, ObjectActionType} from "./object.type";
import ObjectService from "./object.service";

/**
 * Поиск объектов
 */
export const objectFind = () => (async (dispatch: Dispatch<ObjectAction>) => {

    try {

        dispatch({
            type: ObjectActionType.FIND
        })

        const response = await ObjectService.find()

        dispatch({
            type: ObjectActionType.FIND_SUCCESS,
            payload: response.data.data
        })

    } catch (error: any) {

        dispatch({
            type: ObjectActionType.FIND_ERROR,
            payload: [error.response?.data?.error?.message || 'Поиск объектов']
        })

    }

})
