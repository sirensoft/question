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
    
    getSchema=async()=>{
        let raw = await fetch('/topic/2')
        let schema =await raw.json()       
        this.setState({
            schema:schema
        })
        
    }

    componentWillMount(){      
       this.getSchema(); 
    }
   
    onSubmit=({schema,formData})=>(
        console.log('submit',"id="+schema.id,formData)       
    );
   
   
     
    render(){        
          const log = (type) => console.log.bind(console, type); 
            console.log('render','....render')             
        
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