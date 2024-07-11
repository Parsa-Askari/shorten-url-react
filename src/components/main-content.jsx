import { shortenUrl } from "../api/api"
import { useState } from "react"

function LinkInput({show,new_url,url,isCopy})
{
    const copyStyle={
        true:"hsl(255, 11%, 22%)",
        false:"#2acfcf"
    }
    return (
        <>
        <div className="row">
            <div className="link">
                <input className="link__inp" placeholder="Shorten a link here..."></input>
                <button className="btn link__btn">
                    {}
                Shorten It!</button>
            </div>
        </div>
        {show ? 
            <div className="results">
                <div className="url">{url}</div>
                <div className="res">
                    <div className="new-url">{new_url}</div>
                    <button className="btn copy-btn" style={{"background-color":copyStyle[isCopy]}}>
                        {isCopy ? "Copied!" : "Copy"}
                    </button>
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
    const [isCopy,setIsCopy]=useState(false)
    function handler(event)
    {
        const elem = event.target
        if(elem.className=="link__inp")
        {
            setStringToRender((elem.value).substring(0,20)+"....")
            setInpValue(elem.value)
            setShowRes(false)
        }
    }
    async function button_handler(event)
    {
        const elem = event.target
        
        if((elem.className).includes("link__btn"))
        {
            console.log(1)
            const temp=await shortenUrl(inpValue)
            setShortUrl(temp.data.tiny_url)
            setShowRes(true)
            setIsCopy(false)
        }
        if((elem.className).includes("copy-btn"))
        {
            setIsCopy(true)
            navigator.clipboard.writeText(shortUrl)
            
        }
        
    }
    return(
        <div className="main" onChange={handler} onClick={button_handler}>
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
            <LinkInput 
                show={showRes} 
                new_url={shortUrl} 
                url={stringTorender}
                isCopy={isCopy}
                />
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