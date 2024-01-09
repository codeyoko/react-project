import React from "react";

// class 

export default class ChildComponent extends React.Component {

    state = {
        showJobs : false
    }

    handleShowHide = () => {
        this.setState({
            showJobs : !this.state.showJobs   
        })
      
    }

    //delete job
    handleOnclickDelete = (job) => {
        console.log("deelete job:" , job);
        this.props.deleteJob(job);
    }
  
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        // dat theo key: value

        
        const {arrJobs} = this.props;
        const {showJobs} = this.state;
        // let checkShow = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        return (
            <>

                {showJobs === false ?
                    <div>
                        <button onClick={ () => this.handleShowHide()}>Show Jobs</button>
                    </div>

                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                        {item.title} - {item.salary} $
                                        <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                    </div>
                                    )  
                                })
                            }
                        </div>
                        <div>
                            <button onClick={ () => this.handleShowHide()}>Hide</button>
                        </div>
                    </>

                }
            </>
        )
    }
}


// arrow function
// const ChildComponent = (props) => {

//     const {name, age, address, jobs} = props;

//     return (
//         <>
//               <div className="info">
//                 {name} - {age} - {address}
//             </div>
//             <div className="job-lists">
//                 {
                    
//                     jobs.map((item, index) =>{
//                         if(+item.salary >= 1000 ){
//                             return(
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
                       
//                     })
                    
//                 }
//             </div>
//         </>
      
//     )

// }
// export default ChildComponent;