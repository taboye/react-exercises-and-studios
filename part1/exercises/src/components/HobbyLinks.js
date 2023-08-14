function HobbyLinks(){
    const hobbyLinks = ["https://en.wikipedia.org/wiki/Table_tennis","https://en.wikipedia.org/wiki/Film",
                      "https://en.wikipedia.org/wiki/Tourism"];
    return (
        <a href = {hobbyLinks[0]}>Table_tennis </a>,
        <a href = {hobbyLinks[1]}>Film </a>,
        <a href = {hobbyLinks[2]}>Tourism</a>
    )
}
export default HobbyLinks;