// Изображение

import {ImageFormat} from "../image-format/image-format.type";

export interface Image {
    id: number
    attributes: {
        name: string
        alternativeText: string
        caption: string
        width: number
        height: number
        formats: {
            thumbnail: ImageFormat
            large: ImageFormat
            medium: ImageFormat
            small: ImageFormat
        }
        hash: string
        ext: string
        mime: string
        size: number
        url: string
        previewUrl: any
        provider: string
        provider_metadata: any
        createdAt: string
        updatedAt: string
    }
}
