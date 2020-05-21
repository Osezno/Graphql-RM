const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./DB/schema');
const resolvers = require('./DB/resolvers');
const conectarDB = require('./config/db');

//server
conectarDB()
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:() =>{
        const  myContext = "Hola";
        return {
            myContext
        }
    }
});

//arrancar server
server.listen().then(({ url }) => {
    console.log(`SERVIDOR CORRIENDO EN URL: ${url}`)
})