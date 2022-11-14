import {useQuery} from '@apollo/client'
import { getUsersQuery } from '../queries/queries';

function MostrarUsuarios() {
    const {loading, error, data} = useQuery(getUsersQuery);
    if(loading) return (<p>cargando...</p>);
    if(error) return (<p>{error.message}</p>);
    console.log(data);
    return(
      <ul>
        {data.users.map(user => {
          return <li key={user.id}>{user.email}</li>
        })}
      </ul>)
}

export default MostrarUsuarios;