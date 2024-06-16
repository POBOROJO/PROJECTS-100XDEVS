const zod = require("zod");

/*
{ 1st one
    title : string ,
    description : string,
},
{ 3rd one
    id: string,
}
*/

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string(),
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}