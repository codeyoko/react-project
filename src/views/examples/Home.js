import React from "react";
import { connect } from "react-redux";
class Home extends React.Component {


    handleDelete =  (user) => {
        console.log("delete user: ",user );
        this.props.deleteUserRedux(user);
    }


    render() {
        let listUser = this.props.dataRedux;
        return (
            
            <>
                <h2>Wellcome Home Page</h2>
                {listUser && listUser.length > 0 && 
                    listUser.map((item, index) => {
                        return (
                            <div>
                                {index + 1} - {item.name} <span onClick={() => this.handleDelete(item)}>X</span> 
                            </div>
                        )
                    })
                
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (deleteUser) => dispatch({
            type: 'delete_user',
            payload: deleteUser
        })
    }
}

export default connect(mapDispatchToProps,mapStateToProps) (Home);