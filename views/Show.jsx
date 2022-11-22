const React = require("react")

const myStyle = {
    color: '#fc6405',
    backgroundColor: '#91fc05',
    textAlign: 'center',
}

class Show extends React.Component {
    render () {
     const {name, img} = this.props
     console.log(this.props)
     return ( 
         <div>
             <head>
                 <title>Pokemon App</title>
             </head>
             <body style={myStyle}>
                 <h1 style={{backgroundColor: 'black'}}>Gotta Catch 'Em All </h1>
                 <h3><a href ={`/pokemon/`}>Pokemon List</a></h3>
                 <h2>{name}</h2>
                 <img src ={img + '.jpg'}/>
             </body>
         </div> 
      );
     }
  }
  module.exports  = Show;
 