import React,{Component} from 'react';
import util from 'util';

 class Topic extends Component{
    constructor(props){
        super(props)
        this.state = {
            topic:'',           
            desc:["bbb","aaa","sssss"]
        }
    }
    topicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    postData= async (event)=>{
        event.preventDefault();
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
    addDesc=()=>{
        this.setState({          
            desc:[...this.state.desc,""]
        })
    }
    delDesc=(index)=>{
        let arr = this.state.desc;
        arr.splice(index,1)
        this.setState({
            desc:arr
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.postData}>
                    หัวข้อใหญ่              
                        <input value={this.state.topic} onChange={this.topicChange} />                    
                    
                        <p>หัวข้อย่อย <button type='button' onClick={this.addDesc}>+</button></p>
                        {
                            this.state.desc.map((data,index)=>(
                                <p>
                                {index}< input  value={data} />
                                <button type='button' onClick={()=>this.delDesc(index)} >-</button>
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