const React = require("react");

const myStyle = {
  color: "#FFFFFF",
  backgroundColor: "#000000",
  textAlign: 'center'
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <body style={{backgroundColor: 'orange'}}>
          <h1 style={myStyle}>See All The Pokemon! </h1>
          <a style={{textAlign: 'center'}} href={`/pokemon/new`}>Add More</a>
          <ul>
            {pokemon.map((character, i) => {
              let characterName = character.name;
              return (
                <li key = {i}>
                  {" "}
                  <a href={`/pokemon/${character._id}`}>
                    {/* charAt(0).toUpperCase() = allow us to capitalize the first letter of the word */}
                    {characterName.charAt(0).toUpperCase() +
                      characterName.slice(1).toLowerCase()}
                  </a>
                </li>
              );
            })}
          </ul>
        </body>
      </div>
    );
  }
}
module.exports = Index;


