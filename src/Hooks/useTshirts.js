import { useEffect, useState } from "react"

const useTshirts = () =>{
    const [tshirts, setTshirts] = useState([]);
    useEffect(()=>{
        fetch('tshirt.json')
        .then(res => res.json())
        .then(data => setTshirts(data))
    },[]);

    return [tshirts, setTshirts];
}

export default useTshirts;