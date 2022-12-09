// import React from 'react'
// import { IRepository } from '../models/model'

// import { Link } from "react-router-dom";

export default function RepoCard({language, name, html_url, full_name}: 
    {language: string, name: string, html_url: string, full_name: string}) {
  return (
    <a href={html_url} target='_blank' rel='noreferrer'>
        <div className='my-5 
        bg-gray-400 
        hover:bg-gray-600 
        hover:cursor-pointer 
        hover:text-white 
        transition-colors 
        hover:transition-colors
        py-3'>
            <h2 className="font-bold text-xl">{name}</h2>
            <p>{language}</p>
            <p>{full_name}</p>
        </div>
    </a>
  )
}
