import {Image} from "../image/image.type";

// Объект

export interface Object {
    id: number
    attributes: {
        name: string
        address: string
        communication: string
        longitude: number
        latitude: number
        createdAt: string
        updatedAt: string
        publishedAt: string
        images: {
            data: Image[]
        }
    }
}

// GET

export interface ObjectReqGet {
    data: Object[],
    meta: {
        pagination: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
}

// Состояние

export interface ObjectState {

    objects: Object[]

    isFind: boolean
    errors: string[]

}

// Типы действий

export enum ObjectActionType {

    FIND = 'FIND',
    FIND_SUCCESS = 'FIND_SUCCESS',
    FIND_ERROR = 'FIND_ERROR'

}

// Поиск объектов

interface ObjectActionFind {
    type: ObjectActionType.FIND
}

interface ObjectActionFindSuccess {
    type: ObjectActionType.FIND_SUCCESS
    payload: Object[]
}

interface ObjectActionFindError {
    type: ObjectActionType.FIND_ERROR
    payload: string[]
}

// Действия

export type ObjectAction = (

    ObjectActionFind
    | ObjectActionFindSuccess
    | ObjectActionFindError

)
