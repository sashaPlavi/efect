import React, {useState, useEffect} from 'react'

export default function Efect() {

    const [resourceType, setresourceType] = useState('posts')
    const [items, setItems] = useState([])

    useEffect(()=>{
    console.log('efect');
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then((response) => response.json())
  .then((json) => setItems(json));
    }, [resourceType])
    return (
        <>
        <div>
          <button onClick={()=>setresourceType('posts')}>post</button>  
          <button onClick={()=> setresourceType('users')}>users</button>  
          <button onClick={()=> setresourceType('comments')}>comments</button>  
        </div>
        <h1>{resourceType}</h1>
        {items.map(item =>{
            return <pre>{JSON.stringify(item)}</pre>
        })}
        </>
    )
}
