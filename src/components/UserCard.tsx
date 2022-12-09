import { Link } from "react-router-dom";

export default function UserCard({login, key, avatar_url} : 
    {login: string, key: number, avatar_url: string}) {
  return (
    <Link to={`/user/${login}`} key={key}>
        <div className='
        text-center py-5 
        hover:bg-gray-500 
        hover:transition-colors 
        transition-colors 
        rounded-md 
        hover:text-white'>
            <img width='100px' height='100px' alt='user-logo' src={avatar_url} className='mx-auto' />
            <p>{login}</p>
        </div>
    </Link>
  )
}
