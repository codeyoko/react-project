import React from "react";
class Form extends React.Component {

    /**
     * JSX => must return 1 block
     * (return fragment) 
     * 
     * 
     */

    //dinh nghia state
    state = {
        title: '',
        salary: '',
      
    }

    handleOnChangeJobsTitle = (event) => {
        this.setState({ 
            title: event.target.value
            
        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        //validator data
        if(!this.state.title || !this.state.salary){
            alert("Missing requied params");
            return;
        }

        //lay data va truyen vao thang cha lui vao arrJobs
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title:this.state.title,
            salary:this.state.salary

        });

        //set lai title and salary
        this.setState({
            title: '',
            salary:''
        })
    }

    render() {
        return(

            <React.Fragment>
                <form>
                    <div className="first">
                        <label htmlFor="fname">Job's Title</label><br />
                        <input type="text" value={this.state.title}
                        onChange={(event) => this.handleOnChangeJobsTitle(event)}
                        />
                    
                    </div>
                    <div className="second">
                        <label htmlFor="lname">Salary</label><br />
                        <input type="text" value={this.state.salary}
                            onChange={(event) => this.handleOnChangeSalary(event)}
                            />
                    </div>
                    <input type="button" value="submit" onClick={(event) =>  this.handleSubmit(event)} />
                </form>
                
            </React.Fragment>
        )
    }

}
export default Form;