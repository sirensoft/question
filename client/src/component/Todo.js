import React,{Component} from 'react';

import Form from "react-jsonschema-form";


 class Todo extends Component{

    constructor(props){
        super(props)
        console.log('contruct','....contruct')
        console.log('Props',props.match.params)
        this.state= {  
               
            schema :null,
            formData:null ,
             
        }        
    }
    componentWillMount(){      
        this.getSchema(this.props.match.params.id); 
     }    
    
    getSchema=async(id)=>{
        let raw = await fetch('/topic/'+id)
        let schema =await raw.json()       
        this.setState({
            schema:schema
        })        
    } 

   
    onSubmit=async ({schema,formData})=>{     
        console.log('formData',formData);
        let data = {};
        data.topic_id = this.props.match.params.id;
        data.ans = formData;
        data.created = {d_created:require('moment')().format('YYYY-MM-DD HH:mm:ss'),user:'ten'};
        
        let res = await this.addAnswer({id:schema.id,answer:data}) ;
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
        const uiSchema = {            
              "choices": {
                "ui:widget": "checkboxes"
              }
            }
         
        return(
            <div>
             {(this.state.schema)?
                <Form 
                    schema={this.state.schema}  
                    uiSchema={uiSchema}                  
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