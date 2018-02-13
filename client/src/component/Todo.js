import React,{Component} from 'react';

import Form from "react-jsonschema-form";
import SweetAlert from 'sweetalert2-react';

 class Todo extends Component{

    constructor(props){
        super(props)
        console.log('contruct','....contruct')
        this.state= {         
            schema :null 
            
        }
        
    }
    
    getSchema=async(id)=>{
        let raw = await fetch('/topic/'+id)
        let schema =await raw.json()       
        this.setState({
            schema:schema
        })
        
    }

  

    componentWillMount(){      
       this.getSchema(3); 
    }
   
    onSubmit=({schema,formData})=>(        
          this.addAnswer({id:schema.id,answer:formData})        
    );

    addAnswer = async (data)=>{
        let res = await fetch('/answer/create', {
            method: 'POST',           
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res;  
    }   
     
    render(){        
        const log = (type) => console.log.bind(console, type);         
        
        return(
            <div>
             {(this.state.schema)?
                <Form schema={this.state.schema}
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