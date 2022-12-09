import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RepoCard from '../components/RepoCard';
import { useGetUserQuery, useGetUserReposQuery } from '../store/github/github.api';

export default function UserPage() {

    const {username} = useParams();

    const {isLoading:isUserLoading, isError:isUserError, data:userData} = useGetUserQuery(username as string)

    const {isLoading:isReposLoading, isError:isReposError, data:reposData} = useGetUserReposQuery(username as string)
    
    useEffect(() => {
        console.log(reposData)
    }, [reposData])

    return (
        <div className='text-center'>
            {(isUserError || isReposError) && <p className='text-red-500'>Something went wrong...</p>}

            {!isUserLoading && 
            <div className='mb-20'>
                <img src={userData?.avatar_url} alt='user-logo' width='250px' height='250px' className='mx-auto my-5'/>
                <h1 className='font-bold mt-10 text-4xl'>{userData?.login}</h1>
                <div className='flex justify-around w-[30%] mx-auto'>
                    <p className='mx-2'>{userData?.followers} Followers</p>
                    <p className='mx-2'>{userData?.following} Following</p>
                    <p className='mx-2'>{userData?.public_repos} Repos</p>
                </div>
            </div>}
            
            {isReposLoading && <p>Loading...</p>}
            {reposData?.map((repo) => (
                <RepoCard 
                    language={repo.language}
                    name={repo.name}
                    html_url={repo.html_url}
                    full_name={repo.full_name}
                />
            ))}
        </div>
    )
}
