export function Footing()
{
    return(
        <div className="row">
            <div className="footing">
                <div className="content">
                <h2>
                    Boost your links today
                </h2>
                    
                </div>
                <button className="btn" id="get-started-boost">
                    Get Started
                </button>
            </div>
            <div className="buttom-bar">
                <div className="logo">
                    {/* <img src="./src/images/logo.svg" /> */}
                    <h1>Shortly</h1>
                </div>
                <div className="options">
                    <div className="col">
                        <div className="item">
                            <h2>Features</h2>
                            <div className="content">
                                <p>Link Shortening</p>
                                <p>Branded Links</p>
                                <p>Analytics</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col">
                        <div className="item">
                            <h2>Resources</h2>
                            <div className="content">
                                <p>Blog</p>
                                <p>Developers</p>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="item">
                            <h2>Company</h2>
                            <div className="content">
                                <p>About</p>
                                <p>Our Team</p>
                                <p>Careers</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                    <div className="medias">
                        <div className="media filter" id="fa"><img src="./src/images/icon-facebook.svg"/></div>
                        <div className="media" id="ins"><img src="./src/images/icon-instagram.svg"/></div>
                        <div className="media" id="pin"><img src="./src/images/icon-pinterest.svg"/></div>
                        <div className="media" id="twi"><img src="./src/images/icon-twitter.svg"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}