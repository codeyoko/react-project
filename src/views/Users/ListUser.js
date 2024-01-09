import axios from "axios";
import React from "react";
import './ListUser.scss'
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {

    //dat state
    state = {
        listUsers: []
    }
     async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        // .then(response => {
        //     console.log(response.data.data);
        // })

        let response = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({ 
            listUsers : response && response.data && response.data.data ? response.data.data : []
        })
       
    }

    //handleDetailUser
    handleDetailUser = (user) => {
        console.log(this.props);
        this.props.history.push(`/users/${user.id}`)
    }


    render() {
        let {listUsers} = this.state;
        return (
           
            <div className="list-users-container">
                <div className="title">
                    <h3>Fetch all users</h3>
                </div>
                <div className="list-users-content">
                    {listUsers && listUsers.length > 0 && 
                        listUsers.map((item, index) => {
                            return (
                                <div style={{cursor: 'pointer'}} className="child" key={item.id} onClick={() => this.handleDetailUser(item)}>
                                    <div className="child-img">
                                        <img src= {item.avatar} alt="avatar" />
                                    </div>
                                    <div className="child-text">
                                        {item.first_name}
                                    </div>
                                </div>
                            )
                        })
                    
                    }

                </div>
                
            </div>
        )
    }

}
export default withRouter(ListUser);