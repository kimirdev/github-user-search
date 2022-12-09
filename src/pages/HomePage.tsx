import { useState } from 'react'
import UserCard from '../components/UserCard'
import { useDebounce } from '../hooks/debounce'
import { useSearchUsersQuery } from '../store/github/github.api'

export default function HomePage() {
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search)
    const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3
    })

    const [inputFocused, setInputFocused] = useState(false)
    const onFocus = () => setInputFocused(() => true)
    const onBlur = () => {
        setTimeout(() => setInputFocused(false), 100)
    }

    const clickHandler = (username: string) => {
        console.log(username)
        setSearch(username)
    }

    return (
        <div className='flex justify-center pt-10 mx-auto w-screen'>
             { isError && <p className='text-center text-red-600'>Something went wrong...</p> }

             <div className='relative w-[560px]'>
                 <input 
                    onFocus={onFocus} 
                    onBlur={onBlur} 
                    type="text"
                    className='border py-2 px-4 w-full h-[42px] mb-2' 
                    placeholder='Type Github username...'
                    value={search}
                    onChange={e => setSearch(() => e.target.value)}
                 />
                 <ul 
                 className='
                    list-none 
                    absolute 
                    top-[42px] 
                    left-0 
                    right-0 
                    max-h-[200px] 
                    overflow-y-scroll 
                    shadow-md 
                    bg-white'
                 >
                     { isLoading && <p>Loading...</p>}
                     {
                         inputFocused &&
                         data?.map(user => (
                             <li 
                             key={user.id}
                             onClick={() => clickHandler(user.login)}
                             className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-color cursor-pointer'>
                                 {user.login}
                             </li>
                         ))
                     }
                 </ul>

                <div className='container grid grid-cols-3 gap-3'>
                    { data?.map(user => (
                        <UserCard 
                            key={user.id}
                            login={user.login}
                            avatar_url={user.avatar_url}
                        />
                    ))
                    }
                </div>
             </div>
            
        </div>
    )
}
