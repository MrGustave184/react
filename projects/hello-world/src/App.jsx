import Follow from './Follow'

export function App() {
    // props must be immutable
    // functions as props
    const formatUserName = (userName) => `test@${userName}`

    // elements as props
    const formattedEmail = <span>@test@test.com</span>

    return (
        <section className="app">
            <Follow
            // arrays as props
                numbers = {[1, 2, 3 ]}
                formattedEmail={formattedEmail}
                formatUserName={formatUserName}
                isFollowing={true} userName="Geralt of Rivia" img="free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1693421379~exp=1693421979~hmac=e140b5f1e1e789ee57817b9098c0fea3e3969dad931534e3a8c47ddf17f903d0" name="Geralt"/>
            <Follow
                formattedEmail={formattedEmail}
                formatUserName={formatUserName}
                isFollowing={false}
                userName="Kasmor the Mage"
                img="free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1693421379~exp=1693421979~hmac=e140b5f1e1e789ee57817b9098c0fea3e3969dad931534e3a8c47ddf17f903d0"
                name="Kasmor"
            />
            {/* <Follow
                formatUserName={formatUserName}
                // isFollowing={false}
                // isFollowing = undefined if not specified
                userName="Kasmor the Mage"
                img="free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1693421379~exp=1693421979~hmac=e140b5f1e1e789ee57817b9098c0fea3e3969dad931534e3a8c47ddf17f903d0"
                name="Kasmor"
            />
            <Follow
                formatUserName={formatUserName}
                // the prop value is true here
                isFollowing
                userName="Kasmor the Mage"
                img="free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1693421379~exp=1693421979~hmac=e140b5f1e1e789ee57817b9098c0fea3e3969dad931534e3a8c47ddf17f903d0"
                name="Kasmor"
            /> */}
        </section>
    )
}

// export default App