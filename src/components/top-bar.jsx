export function TopBar()
{
    return(
    <div className="top-bar">
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
    )
}