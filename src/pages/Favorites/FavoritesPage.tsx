import React from "react";
import { PageType } from "../types";
import "./FavoritesPage.scss";
import { Tooltip } from "antd";
import { UseLocalStorage } from "../../hooks/UseLocalStorage";
import { useNavigate } from "react-router-dom";

const FavoritesPage: PageType = () => {
    const navigate = useNavigate();
    const favoritesData = localStorage.getItem('favorites');
    const favorites = favoritesData ? JSON.parse(favoritesData) : [];
    const [active, setActive] = React.useState<boolean>(true);
    const {getLocalStorage, setLocalStorage} = UseLocalStorage();
    // remove from favorites
    const removeFromFavorites = (image: any) => {
        const favorites = getLocalStorage("favorites");
        setLocalStorage("favorites", favorites.filter((item: any) => item.nano !== image.nano));
        // only for updating our state, because localStorage doesn't refresh it
        setActive(!active);
    }
    return (
        <div className="favorite-page">
            <div className="container">
                <button type="button" className="home-btn" onClick={() => navigate("/")}>
                    Home page
                </button>
                <h1>Favorite images</h1>
                <div className="favorite-page__content">
                    {favorites.map((image: any) => {
                        return (
                            <div className="image-item" key={image.nano}>
                                <img src={image.src} alt={image.caption} width={200}/>
                                <span className="item-delete" onClick={() => removeFromFavorites(image)}>
                                    <Tooltip title="Deleting image from favorite" placement="top"><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="50"
                                        viewBox="0 0 15 20"
                                        fill="#58babc"
                                    >
                                        <path
                                            d="M.007 3.072C-.064 2.228.43 1.536 1.11 1.536h3.684C4.866.675 5.435 0 6.15 0h2.704c.711 0 1.281.676 1.354 1.536h3.685c.677 0 1.171.696 1.1 1.536zm14.088.688l-1.041 13.916c-.1 1.3-1.172 2.324-2.403 2.324H4.345c-1.23 0-2.304-1.024-2.403-2.324L.905 3.76zM4.472 6.328c-.016-.384-.285-.696-.606-.696-.32 0-.566.312-.546.696l.578 11.864c.016.28.245.508.518.508a.476.476 0 0 0 .475-.508zm3.602 0c.004-.384-.253-.696-.574-.696-.32 0-.578.312-.574.696l.08 11.864c0 .28.225.508.494.508.27 0 .495-.224.495-.508zm3.602 0c.02-.384-.226-.696-.546-.696-.32 0-.594.312-.606.696l-.42 11.864a.48.48 0 0 0 .476.508.528.528 0 0 0 .518-.508z"/>
                                    </svg></Tooltip>
                                </span>

                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}
export default FavoritesPage;