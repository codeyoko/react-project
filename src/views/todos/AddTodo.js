import React from "react";
import { toast } from 'react-toastify';
export default class AddTodo extends React.Component {
    
    state = {
        title: ''
    }

    // on change Title
    handleOnChangeTitle = (event) => {
        this.setState({title: event.target.value});
    }

    // handle add todo
    handleAddTodo  = () => {
        // chek empty title
        if(!this.state.title){
            toast.error("Missing required title");
            return;
        }
        this.props.addTodo({
            id:Math.floor(Math.random() * 100000),
            title: this.state.title

        })

        this.setState({title:''})
    }

    render() {
        let {title} = this.state;
        return (
            <div className="add-todo">
                <input 
                    type="text" 
                    value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button onClick={(event) => this.handleAddTodo(event)} >Add Todo</button>
            </div>
        )
    }
}