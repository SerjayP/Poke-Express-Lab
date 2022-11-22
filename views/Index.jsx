const React = require("react")
const myStyle = {
    color: "#FFDE00",
    backgroundColor: "#3B4CCA",
    textAlign: "center"
};
class Index extends React.Component {
    render() {
        const { pokemon } = this.props;    // destructure the pokemon array
        return (
            <div style={myStyle}>
                <h1>See All The Pokemon!</h1>
                <ul>
                        {
                            pokemon.map((eachPokemon, i) => {
                            })
                        }
                    </ul>
            </div>
        )
    }
}
module.exports = Index;