import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActors } from "../../reduxtoolkit/slices/actorSlice";
import style from './style.module.css';
const ActorList = () => {
    const dispatch = useDispatch();
    const { actors, loading, error } = useSelector(state => state.actors);

    useEffect(() => {
        dispatch(fetchActors());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <div className={style["actor_cards"]}>
                {actors.map(actor => (
                    <div key={actor.id} className={style["actor_card"]}>
                        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
                        <h2>{actor.name}</h2>
                        <p>Known for: {actor.known_for.map(item => item.title || item.name).join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActorList;
