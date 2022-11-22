const React = require("react");

const myStyle = {
  color: "#FFFFFF",
  backgroundColor: "#000000",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <h1 style={myStyle}>See All The Pokemon! (INDEX)</h1>
        <ul>
          {pokemon.map((character, i) => {
            let characterName = character.name;
            return (
              <li>
                {/* key = {i} */}
                The{" "}
                <a href={`/pokemon/${i}`}>
                  {/* charAt(0).toUpperCase() = allow us to capitalize the first letter of the word */}
                  {characterName.charAt(0).toUpperCase() +
                    characterName.slice(1).toLowerCase()}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
