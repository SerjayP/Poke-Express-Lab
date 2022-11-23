const React = require('react')

const myStyle = {
    color: '#ffde00',
    backgroundColor: '#3B4CCA',
    textAlign: 'center',
}

class New extends React.Component {
    render() {
        return (
            <div>
                <body style={{color:'#FF0000', backgroundColor: '#E6CE2B'}}>
                    <h1 style={myStyle}>New Pokemon Page</h1>
                    <nav>
                        <a style ={{color:"red"}} href = "/pokemon">Back to Home Page</a>
                    </nav>
                   
                    <form action="/pokemon" method = "POST">
                        Name: <input type="text" name ="name"/><br />
                        Image: <input type="text" name ="img"/><br />
                        <input type="submit" value="Create New Pokemon"/>
                    </form>
                </body>
            </div>
        )
    }
}

module.exports = New