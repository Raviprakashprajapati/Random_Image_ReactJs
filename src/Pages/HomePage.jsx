import { useEffect, useState } from "react";
import { ImageCard } from"../component/ImageCard"
import "../style/HomePage.css"


export const HomePage=()=>{
  const[data,setData]=useState([]);
  const [url,setUrl] = useState("https://api.slingacademy.com/v1/sample-data/photos?limit=20")

  const getData=async()=>{
    const resp=await fetch(url);
    const {photos}=await resp.json();
    setData(photos)
    console.log(photos)
  }

  useEffect(()=>{
    getData()
  },[url])

  function handleClick(){
    let randomNumber = Math.floor(Math.random() * 120) + 1;
    setUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${randomNumber}&limit=200`)
  }





  return (

    
    <>

    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"5px"}} >
      <h4 style={{backgroundColor:"yellow",padding:"10px",borderRadius:"30px"}}   onClick={handleClick} >Random Images</h4>
    </div>

    <div id="parent" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"5px"}} >
          {
            data?.map((e,i)=>{
              return <ImageCard id={e.id} imageUrl={e.url} key={i}/>
            })
          }
    </div>
    
    </>
  );
}
