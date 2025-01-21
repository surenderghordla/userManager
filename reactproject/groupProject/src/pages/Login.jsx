export default function () {
    return (
        <div className="card">
            <div className="card-content">
                <h1>Sign In</h1>
                <form className="form">
                    <div className="input-box">
                        <input className="input" type="text" placeholder="Office" required />
                        <input className="input" type="password" placeholder="Password" required />
                    </div>
                    <input type="submit" className="input input-button" value="Sign In" />
                </form>
            </div>
        </div>
    )
}