// Формат изображения:
// - thumbnail
// - large 1000px
// - medium 750px
// - small 500px

export interface ImageFormat {
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path: any
    url: string
}
