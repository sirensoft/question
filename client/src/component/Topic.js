import React,{Component} from 'react';
import util from 'util';

 class Topic extends Component{
    constructor(props){
        super(props)
        this.state = {
            topic:'',           
            items:["bbb","aaa","sssss"],
            itemVal:''
        }
    }
    topicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    postData= async (event)=>{
       
        event.preventDefault();
        alert(JSON.stringify(this.state.items));
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
    addItem=()=>{
        this.setState({          
            items:[...this.state.items,this.state.itemVal],
            itemVal:''
        })
    }
    removeItem=(index)=>{
        let arr = this.state.items;
        arr.splice(index,1)
        this.setState({
            items:arr
        })
    }
    itemChange =(event)=>{
        this.setState({
            itemVal : event.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.postData}>
                    หัวข้อใหญ่              
                        <input value={this.state.topic} onChange={this.topicChange} />                    
                    
                        <p>หัวข้อย่อย <input value = { this.state.itemVal} onChange={this.itemChange}/> <button type='button' onClick={this.addItem}>+</button></p>
                        {
                            this.state.items.map((data,index)=>(
                                <p>
                                {index+1}) {data} <button type='button' onClick={()=>this.removeItem(index)} >-</button>
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