import {ObjectAction, ObjectActionType, ObjectState} from "./object.type";

const initialState: ObjectState = {

    objects: [],

    isFind: false,
    errors: []

}

export const objectReducer = (state: ObjectState = initialState, action: ObjectAction) => {
    switch (action.type) {

        // Поиск объектов

        case ObjectActionType.FIND:
            return {
                ...state,
                isFind: true,
                errors: []
            }
        case ObjectActionType.FIND_SUCCESS:
            return {
                ...state,
                objects: action.payload,
                isFind: false
            }
        case ObjectActionType.FIND_ERROR:
            return {
                ...state,
                isFind: false,
                errors: action.payload
            }

        // Состояние по умолчанию

        default:
            return state

    }
}
