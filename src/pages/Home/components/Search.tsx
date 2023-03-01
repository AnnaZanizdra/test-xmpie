import React from "react";
import "./Search.scss";
import { Input } from "antd";
import { fetchImagesByQuery } from "../../../store/images/actions";
import { useDispatch } from "../../../store";
import { useNavigate } from "react-router-dom";

type SearchProps = {
    isEmptyResults: boolean;
}
export const Search = React.memo(({isEmptyResults}: SearchProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchString, setSearchString] = React.useState<string>("");

    // search images by inserted query
    const handleClick = () => {
        dispatch(fetchImagesByQuery(searchString));
    }

    return (
        <div className={isEmptyResults ? "search-block" : "search-block active"}>
            <Input name="search" value={searchString} onChange={(event) => {
                setSearchString(event.target.value);
            }
            }/>
            <button type="button" className="search-btn" onClick={handleClick}/>
            <button type="button" className="favorite-btn" onClick={() => navigate("/favorites")}>
                Manage Favorites
            </button>
        </div>
    )
})

