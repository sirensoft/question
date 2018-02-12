var knex = require('../config/knex');
class Topic{
    async create(topic,desc,created,updated){
        try {                     
            let effect = await knex('topic').insert({topic:topic,desc:desc,created:created,updated:updated});
            return effect;
        } catch (error) {
            return error;
        }
       
    }  
    
    async update(id){

    }

    async delete(id){

    }
    async findAll(){

    }
    async find(id){

    }

    
    
}

module.exports = new Topic();