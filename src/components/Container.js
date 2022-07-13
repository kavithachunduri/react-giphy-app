import {useState , useEffect} from 'react';
import {getGiphy} from '../services/Constants';
import Map from "./Map";
import Input from './Input';
import Button from './Button'
//import './App.css';


function Container(){
    const[pic,setPic]=useState([])
    const[gif,setGif]=useState([])

    const giphyApi = async()=>{
    let res = await getGiphy(gif)
    console.log(res)
    //let output=res.data.data;
    //console.log('output',output)
    setPic(()=>{
        let output=res.data.data;
        return output;
    })


    }
    console.log('pic',pic)
    // let url = (output.map((item,index)=>{
    //  return <img  src={item.images.fixed_height_small.url} key={index}/>
    //     }))
    // console.log('url',url)
    // setPic(url)

    // }

    return(
        <div>
        <div className='user'>
        <Input fun={(e)=>setGif(e.target.value)} />
        <Button onClick={giphyApi}/>
        </div>
        <div>
        <Map mapping={pic}/>
        </div>
        </div>
    )
}

export default Container
