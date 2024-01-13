import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="logo" />
                <span>dashboard</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="search" className="icon" />
                <img src="/app.svg" alt="app" className="icon" />
                <img src="/expand.svg" alt="expand" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="notifications" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="/avatar.jpeg" alt="avatar" />
                    <span>Kate</span>
                </div>
                <img src="/settings.svg" alt="settings" className="icon" />
            </div>
        </div>
    );
};

export default Navbar;
