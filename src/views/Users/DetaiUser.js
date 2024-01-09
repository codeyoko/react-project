import React from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";
 class DetaiUser extends React.Component {

    state = {
        userData: {}
    }

    async componentDidMount() {
        //console.log("componentDidMount" , this.props);

        if(this.props.match.params) {

            let id = this.props.match.params.id;
             //call api
            let response = await axios.get(`https://reqres.in/api/users/${id}`);
            //console.log(response);
            //set state
            this.setState({
                userData: response && response.data && response.data.data ? response.data.data : {}
            })
        }
    }

    // handleBack
    handleBack = () => {
        this.props.history.push('/users')
    }
    render() {
        let {userData} = this.state;
        let isEmptyObj = Object.keys(userData).length === 0
      return (
        
        <div>
            <div>Welcome User With id : {this.props.match.params.id}</div>
          {!isEmptyObj &&
            <>
                <h3> First Name: {userData.first_name} </h3>
                <h3> Last Name: {userData.last_name} </h3>
                <h3> Emai:  {userData.email} </h3>
            </>

          }
          <div>
            <button onClick={() => this.handleBack()}> Back </button>
          </div>
        </div>
      )
    }
}
export default withRouter(DetaiUser);