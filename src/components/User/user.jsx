import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../reduxtoolkit/slices/userSlice";
import { useEffect } from "react";
import style from './style.module.css';

export const User = () => {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(state => state.users)


    useEffect(() => {

        dispatch(fetchUsers())

    }, [dispatch])




    return (
        <div className={style['user-container']}>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {users.map((user) => {
                return <p key={user.id}>{user.name}</p>
            })}
        </div>
    )

}



export default User