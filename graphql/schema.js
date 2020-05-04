const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type toDoItem {
        _id: ID!,
        name: String!,
        status: String!
    }

    type Query {
        allItem : toDoItem
    }

    input toDoItemInput {
        name: String!,
        status: String!
    }

    type Mutation {
        createToDo(input : toDoItemInput) : toDoItem,
        updateTodo(_id: ID!, input : toDoItemInput) : toDoItem
        deleteToDo(_id: ID!) : toDoItem
    }
    
    schema {
        query : Query,
        mutation : Mutation
    }
`);