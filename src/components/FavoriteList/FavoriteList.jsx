import React, { useEffect } from "react";
import FavoriteItem from "../FavoriteList.jsx";
import { useDispatch, useSelector } from "react-redux";

function FavoriteList() {
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favoriteList);

  useEffect(() => {
    console.log("FavoriteList component did mount");
    // Dispatch the "FETCH_FAVORITES" action to trigger fetching the list of favorites
    dispatch({
      type: "FETCH_FAVORITES",
    });
  }, []);

  return (
    <div>
        <h3>Favorite List</h3>
    </div>
  );
};

export default FavoriteList;