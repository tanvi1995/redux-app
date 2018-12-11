import React from 'react';
import { connect } from "react-redux";
class UserDetailContainer extends React.Component {
    
    render() { 
        if(this.props.activeUser === null){
            return (<div> Click on any name to see details...</div>)
        }
        else{
        return ( 
            <div>
                User Details from the container..!!!
                <br></br>
                {this.props.activeUser.first}  {this.props.activeUser.last} at {this.props.activeUser.age} says: <br></br>
                {this.props.activeUser.description}
                <br></br>
            </div>
         );
        }
    }
}
 function convertStoreToProps(store){
     return {
         activeUser: store.clickeduser
     }
 }
export default connect(convertStoreToProps)(UserDetailContainer)