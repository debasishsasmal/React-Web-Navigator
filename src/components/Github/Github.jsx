import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} className="mx-auto mt-4 rounded-full"/>
    </div>
  )
}

export default Github

// This function loads the data BEFORE the component renders
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/debasishsasmal')
    return response.json()
}
