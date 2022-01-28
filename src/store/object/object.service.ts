import strapiApi from "../../api/strapi.api";
import {ObjectReqGet} from "./object.type";

export default class ObjectService {

    /**
     * Поиск объектов
     */
    static find() {
        return strapiApi.get<ObjectReqGet>(`/api/objects`, {
            params: {
                populate: 'images'
            }
        })
    }

}
