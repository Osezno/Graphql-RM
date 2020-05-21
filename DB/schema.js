const { gql } = require('apollo-server');

const typeDefs = gql`

    type Usuario {
     id:ID
     nombre: String  
     apellido: String
     email: String
     creado: String
    } 

    input UsuarioInput{
     nombre: String!    
     apellido: String!
     email: String!
     password: String!
    }

    type Mutation {
      nuevoUsuario: Usuario
    }
`;

module.exports = typeDefs
