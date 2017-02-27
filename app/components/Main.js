import React from 'react';

class Main extends React.Component {
  render(){
  	// let align = {
  	// 	textAlign : center;
  	// }
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 5}}>
            <h1 style = {{textAlign : "center"}} >Movies Api Application</h1>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main