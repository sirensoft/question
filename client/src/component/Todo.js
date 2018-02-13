import React,{Component} from 'react';

import Form from "react-jsonschema-form";


 class Todo extends Component{

    constructor(props){
        super(props)
        console.log('contruct','....contruct')
        this.state= {         
            schema :null,
            formData:null ,
             
        }        
    }
    componentWillMount(){      
        this.getSchema(3); 
     }    
    
    getSchema=async(id)=>{
        let raw = await fetch('/topic/'+id)
        let schema =await raw.json()       
        this.setState({
            schema:schema
        })        
    } 

   
    onSubmit=async ({schema,formData})=>{     
        
        let res = await this.addAnswer({id:schema.id,answer:formData}) ;
        console.log('submit',res);
        if(res===1){            
            alert("สำเร็จ");
            this.setState({
                formData:null
            });
        }

    };

    addAnswer = async (data)=>{
        let resp = await fetch('/answer/create', {
            method: 'POST',           
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let res = await resp.json();
        return res.rowCount;  
    }   
     
    render(){        
        const log = (type) => console.log.bind(console, type);         
        return(
            <div>
             {(this.state.schema)?
                <Form 
                    schema={this.state.schema}
                    formData={this.state.formData}
                    onChange={log("changed")}
                    onSubmit={this.onSubmit}
                    onError={log("errors")} >
                </Form>
                :'Loading...'
             }    
             
            
            </div>
        )
    }
}

export default Todo;