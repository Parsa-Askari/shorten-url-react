import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export function TopBar()
{
    const [showMenu,setShowMenu]=useState(false)
    function menuHandler(event)
    {
        const elem=event.target.closest("div")
        if(elem.className=="menu"){
            setShowMenu(!showMenu)
        }
    }
    return(
        <div className="top-bar" onClick={menuHandler}>
            <div className='Desktop'>
                <div className="info">
                    <div className="logo">
                        <img src="./src/images/logo.svg" />
                    </div>
                    <div className="intractable">Features</div>
                    <div className="intractable">Pricing</div>
                    <div className="intractable">Resources</div>
                </div>
                <div className="account-options">
                    <div className="login-box">
                    Login
                    </div>
                    <button className="btn sign-box">
                    Sign Up
                    </button>
                </div>
                
            </div>
            <div className='Mobile'>
                <div className='row'>
                    <div className="info">
                        <div className="logo">
                            <img src="./src/images/logo.svg" />
                        </div>
                        
                    </div>
                    <div className="menu">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
                {showMenu ? 
                    <div className='modal'>
                        <div className='info'>
                            <div className="intractable">Features</div>
                            <div className="intractable">Pricing</div>
                            <div className="intractable">Resources</div>
                        </div>
                        <div className='account-options'>
                            <div className="login-box">
                            Login
                            </div>
                            <button className="btn sign-box">
                            Sign Up
                            </button>
                        </div>
                    </div>
                :
                    <></>
                }
                
            </div>
        </div>

    )
}