import React from "react";
import './style.scss'
import AddTodo from "./AddTodo";

import { toast } from 'react-toastify';

export default class TotoList extends React.Component {

    state = {
        listTodos : [
            {id:'1', title:'Doing homework'},
            {id:'2', title:'Doing task'},
            {id:'3', title:'Clearing home '}
        ],
        editTodo: {}
    }
    // create todo
    addTodo = (todo) => {
        // let currentTodos = this.state.listTodos;
        // currentTodos.push(todo);
        this.setState({
            listTodos:[...this.state.listTodos,todo]
            //listTodos: currentTodos
        });
        toast.success("Create Todo Successfully!");
    }

    // edit todo
    handleEditTodo = (todo) => {
        console.log('edit todo: ', todo);
        let {editTodo, listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0; 

        // save
        if(isEmptyObj === false && editTodo.id === todo.id) {

            //copy listTodos
            let listTodoCopy = [...listTodos];

            //Find index of specific object using findIndex method.    
            let objIndex = listTodos.findIndex((item => item.id ===  todo.id));

            
            //Update object's name property.
            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodoCopy,
                editTodo:{} // sau khi saved is save button change edit button
            });
            toast.success("Update Todo Succeed",{
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
            });
            return;

        }

        // edit, gan todo muon sua qua cho editTodo
        this.setState({ 
            editTodo: todo
        })
    }


    // handleOnChangeTodo
    handleOnChangeTodo =  (event) => {
        let editTodoCopy = {...this.state.editTodo}; // copy editTodo
        editTodoCopy.title = event.target.value;
        this.setState({ 
            editTodo:editTodoCopy
        })
    }






    // delete toto
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        });
        toast.success("Delete Succeed",{
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
        });
    }

    render() {
        let {listTodos, editTodo} = this.state;

        //check editTodo
        let isEmptyObj = Object.keys(editTodo).length === 0;  //empty :true, !empty: false
        console.log('>>>> check editTodo: ', isEmptyObj);
        return (
            <div className="list-todo-container">
               <AddTodo addTodo = {this.addTodo} />
               
                <div className="list-todo-content">
                    {
                        listTodos && listTodos.length > 0 && 
                            listTodos.map((item, index) =>  {
                                return (
                                
                                    <div className="todo-child" key={item.id}>

                                        {
                                            isEmptyObj === true ?
                                                <span className="todo-child-text">{index + 1} - {item.title}</span>
                                                :
                                                <>
                                                    {editTodo.id === item.id ?
                                                        <span>
                                                            {index + 1} - <input type="text" 
                                                                                value={editTodo.title}
                                                                                onChange={(event) => this.handleOnChangeTodo(event)}
                                                                          />
                                                        </span>
                                                        :
                                                        <span className="todo-child-text">{index + 1} - {item.title}</span>
                                                    }
                                                </>
                                        }
                                        
                                        <button className="todo-edit" onClick={() => this.handleEditTodo(item)}>
                                            {
                                                isEmptyObj === false && editTodo.id === item.id ?
                                                            'Save' : 'Edit'
                                            }
                                        </button>


                                        <button onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                        })
                    }
                        
                </div>
            </div>
        )
    }
}