import React,{Component} from 'react';
import util from 'util';

 class Topic extends Component{
    constructor(props){
        super(props)
        this.state = {
            topic:'',           
            inputs:["bbb","aaa","sssss"]
        }
    }
    topicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    postData= async (event)=>{
       
        event.preventDefault();
        alert(this.state.inputs);
        let desc = {"name":"bbbb"};
        let res = await fetch('/topic/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                topic: this.state.topic,
                //desc: desc
            })
        })
        this.setState({
            topic:''
        })        
    }
    addInput=()=>{
        this.setState({          
            inputs:[...this.state.inputs,""]
        })
    }
    delInput=(index)=>{
        let arr = this.state.inputs;
        arr.splice(index,1)
        this.setState({
            inputs:arr
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.postData}>
                    หัวข้อใหญ่              
                        <input value={this.state.topic} onChange={this.topicChange} />                    
                    
                        <p>หัวข้อย่อย <button type='button' onClick={this.addInput}>+</button></p>
                        {
                            this.state.inputs.map((data,index)=>(
                                <p>
                                {index}< input value={data}  />
                                <button type='button' onClick={()=>this.delInput(index)} >-</button>
                                </p>
                            ))
                        }

                        <p> <button type='submit'>เพิ่ม</button> </p>
                </form>
               
            </div>
        )
    }

}

export default Topic;