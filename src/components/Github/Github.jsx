// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";



function Github() {
    const data = useLoaderData()
    // console.log(data);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/leon0113')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])

    return (
        <div className="text-center m-4 bg-green-400 text-white text-3xl p-4">Repositories: {data.public_repos}
            <img src={data?.avatar_url} alt="" />
        </div>

    )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/leon0113');
    return response.json();
}
