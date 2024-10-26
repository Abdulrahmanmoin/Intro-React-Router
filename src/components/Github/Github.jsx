import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/Abdulrahmanmoin")
    //         .then(res => {
    //             console.log(res);
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    const data = useLoaderData()

    return (
        <div className=' text-center m-4 bg-gray-600 text-white text-3xl p-4'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Github profile picture" width={300} />
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Abdulrahmanmoin")
    return response.json();
}