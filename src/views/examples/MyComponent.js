import React from "react";
import Form from "./Form";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {

    /**
     * JSX => must return 1 block
     * (return fragment) 
     * 
     * 
     */

    //dinh nghia state
    state = {
       
        arrJobs: [
            {id:'1',title:'Developer',salary:'5000'},
            {id:'2',title:'Teach',salary:'6000'},
            {id:'3',title:'Tester',salary:'7000'},
        ]
    }

    addNewJob = (job) => {
        console.log("perent", job);
        //c1:
            // let currentJobs = this.state.arrJobs;
            // currentJobs.push(job);
            // this.setState({
            //     arrJobs:currentJobs
            // })
        //c2:
        this.setState({
            arrJobs:[...this.state.arrJobs, job] //coppy toan bo arrJobs va push new job vao
        })
    }

    //delete job
    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJob
        })

    }
    render() {
        return(

            <React.Fragment>
                <Form 
                    addNewJob = {this.addNewJob}
                />

                <ChildComponent
                    arrJobs = {this.state.arrJobs}
                    deleteJob = {this.deleteJob}
                />
            </React.Fragment>
        )
    }
}
export default MyComponent;