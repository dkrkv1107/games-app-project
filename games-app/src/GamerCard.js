const gamerCard = ({ title, platform, score, genre, editors_choice }) => {
    return (
        <>
        
            <h3>Title: {title}</h3>
            <h3>Platform: {platform}</h3>
            <h3>Score: {score}</h3>
            <h3>Genre: {genre}</h3>
            <h3>Editor's Choice: {editors_choice}</h3>
        
        </>
    )
}

export default gamerCard;