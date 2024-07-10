import { shortenUrl } from "../api/api"
import { useState } from "react"

function LinkInput({show,new_url,url})
{
    
    return (
        <>
        <div className="row">
            <div className="link">
                <input className="link__inp" placeholder="Shorten a link here..."></input>
                <button className="btn link__btn">Shorten It!</button>
            </div>
        </div>
        {show ? 
            <div className="results">
                <div className="url">{url}</div>
                <div className="res">
                    <div className="new-url">{new_url}</div>
                    <button className="btn copy-btn"> </button>
                </div>
            </div> : 
            <></>
        }
        </>
        
    )
}
export function MainContent()
{
    const [inpValue,setInpValue]=useState("")
    const [showRes,setShowRes]=useState(false)
    const [shortUrl,setShortUrl]=useState("")
    const [stringTorender,setStringToRender]=useState("")
    function handler(event)
    {
        const elem = event.target
        if(elem.className=="link__inp")
        {
            setStringToRender((elem.value).substring(0,10))
            setInpValue(elem.value)
        }
    }
    async function getAPI(event)
    {
        const elem = event.target
        
        if((elem.className).includes("link__btn"))
        {
            console.log(1)
            const temp=await shortenUrl(inpValue)
            setShortUrl(temp.data.tiny_url)
            setShowRes(true)
        }
        
    }
    return(
        <div className="main" onChange={handler} onClick={getAPI}>
            <div className="row">
                <div className="content">
                    <h1>
                        More than just shorter links
                    </h1>
                    <div className="footer">
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </div>
                    <button className="btn" id="get-started">
                        Get Started
                    </button>
                </div>
                <div className="image">
                    <img id="table" src="./src/images/illustration-working.svg" />
                </div>
            </div>
            <LinkInput show={showRes} new_url={shortUrl} url={stringTorender}/>
            <div className="row">
                <div className="adv-add">
                    <h2>
                        Advanced Statistics
                    </h2>
                    <div className="footer">
                        Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </div>
                </div>
            </div>
        </div>
    )
}