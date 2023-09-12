// import './follow.css'

const Follow = ({ img, userName, name, isFollowing, formatUserName, formattedEmail }) => {
    return (
        // <article calssName='tw-follow-card'>
        <article style={{
            display: 'flex',

            // react translates style integers to px
            width: 800,

            // in react, css properties with dashes
            // are camelcased. padding-top is:
            paddingTop: "1rem"

        }}>
            <header>
                <img className="tw-card-avatar" src={`https://img.freepik.com/${img}`} />
                <div>
                    <strong>{name}</strong>
                    <span>{formatUserName(name)}</span>
                    <span>{formattedEmail}</span>
                </div>
            </header>

            <aside>
                <button>Follow</button>
            </aside>
        </article>
    )
}

export default Follow;