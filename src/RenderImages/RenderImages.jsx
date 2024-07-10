import { useEffect, useState } from "react"
import './RenderImages.css'

export function RenderImages({ resPromise }) {

    const [photos, setPhotos] = useState(null)
    const [tracker, setTracker] = useState({});

    useEffect(() => {
        resPromise.then(
            function (photos) {
                console.log(photos.photos)
                setPhotos(photos.photos)
            }
        )
    }, [resPromise])

    if (photos != null) {

        let trackerObj = {}

        photos.map((val) => {
            trackerObj = {
                ...trackerObj,
                [val.id]: 0
            }
        })

        const registerClick = function (event) {
            const id = event.target.id;
            if (tracker[id] == 1) {
                alert('Failed')
            }
            else {
                setTracker((tracker) => ({
                    ...tracker,
                    [id]: 1
                }))
            }
        }

        const index0 = Math.floor(Math.random() * 81)
        const index1 = Math.floor(Math.random() * 81)
        const index2 = Math.floor(Math.random() * 81)
        const index3 = Math.floor(Math.random() * 81)

        const imgSrcMap =
        {
            [photos[index0].id]: photos[index0].src.medium,
            [photos[index1].id]: photos[index1].src.medium,
            [photos[index2].id]: photos[index2].src.medium,
            [photos[index3].id]: photos[index3].src.medium
        }

        // build a function that renders 4 images randomly from urls from repeatingPhotoArray

        return (
            <div id="card-container">
                {Array.from(Object.keys(imgSrcMap)).map((id) => {
                    return <img key={id} id={id} src={imgSrcMap[id]} className="cards"></img>
                })}
            </div>
        )
    }
}