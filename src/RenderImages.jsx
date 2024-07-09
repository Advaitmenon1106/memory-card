import { useEffect, useState } from "react"

export function RenderImages({ resPromise }) {
    const [repeatingPhotoArray, setPhotos] = useState(null)
    useEffect(() => {
        resPromise.then(
            function (photos) {
                console.log(photos.photos)
                setPhotos(photos.photos)
            }
        )
    }, [resPromise])

    if (repeatingPhotoArray != null) {
        return (
            <div>
                <img src={String(repeatingPhotoArray[0].src.medium)}></img>
            </div>
        )
    }
}