var knex = require('../config/knex');
class Answer{
    async add(jdata){        
        try {  

           
            jdata = JSON.stringify(jdata);     
            let res =  knex('answer').insert({topic_id:7,rawdata:jdata});  
            
            

            return res;
        } catch (error) {
            return error;
        }      
          
    }
}
module.exports = new Answer();