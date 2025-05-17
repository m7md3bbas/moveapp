import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvShows } from "../../reduxtoolkit/slices/tvShowSlice";
import style from './style.module.css';
const TvShowList = () => {
    const dispatch = useDispatch();
    const { tvshows, loading, error } = useSelector(state => state.tvshows);

    useEffect(() => {
        dispatch(fetchTvShows());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <div className={style['tv_cards']}>
                {tvshows.map(show => (
                    <div key={show.id} className={style["tv_card"]}>
                        <img src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt={show.name} />
                        <h2>{show.name}</h2>
                        <p>{show.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TvShowList;
