import React from "react";
import "./Gallery.scss";
import styled from "styled-components";
import { Gallery as GalleryLib, Image } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { UseLocalStorage } from "../../../hooks/UseLocalStorage";

type GalleryProps = {
    images: any[];
    isEmptyResults: boolean;
}
const GalleryUnstyled = React.memo(({images, isEmptyResults}: GalleryProps) => {
    const {getLocalStorage, setLocalStorage} = UseLocalStorage();

    const [active, setActive] = React.useState<boolean>(true);
    const [imagesData, setImagesData] = React.useState<Image[]>([]);
    const [index, setIndex] = React.useState(-1);
    // compose data for Lightbox component
    const slides = images.map(({webformatURL, webformatWidth, webformatHeight}) => ({
        src: webformatURL,
        width: webformatWidth,
        height: webformatHeight,
    }));
    // prepare image data for using  with Lightbox
    React.useEffect(() => {
        const favorites = getLocalStorage("favorites");
        const data = images.map((image: any) => {
            const res = favorites.find((img: any) => image.id === img.nano);
            return {
                src: image.webformatURL,
                width: image.webformatWidth,
                height: image.webformatHeight,
                isSelected: res,
                caption: image.tags,
                nano: image.id
            }
        });
        setImagesData(data);
    }, [images, active, getLocalStorage]);

    // add to favorite
    const handleAddToFavorite = (index: number, item: Image) => {
        // get data from local storage in array format
        const favorites = getLocalStorage("favorites");

        // add current image to storage if it is absent
        if (!favorites.find((image: any) => item.nano === image.nano)) {
            favorites.push(item);
        }
        // store in local storage
        setLocalStorage("favorites", favorites);

        // only for updating our state, because localStorage doesn't refresh it
        setActive(!active);
    };

    // open image in full screen
    const handleClick = (index: number, item: Image) => {
        setIndex(index);
    }
    return (
        <div className={isEmptyResults ? "gallery-block" : "gallery-block active"}>
            <GalleryLib images={imagesData} onSelect={handleAddToFavorite}
                        onClick={handleClick}
            />
            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />
        </div>
    )
})

export const Gallery = styled(GalleryUnstyled)`


`