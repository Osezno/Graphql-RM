const Usuario = require("../models/usuarios")
const bcrypt = require("bcryptjs")
//CURSOS

const resolvers = {
    Query: {
        obtenerCursos: (_, {input}, ctx) => {
             const resultado = cursos.filter(c => c.tecnologia === input.tecnologia)
             return resultado
        },
        obtenerTecnologia: () => cursos
    },
    Mutation:{
      nuevoUsuario: async ( _, {input}) => {
        const {email, password} = input
        const existeUsuario = await Usuario.findOne({email})
        if(existeUsuario) throw new Error("Usuario ya registrado");

        const salt = bcrypt.getSalt(10)

        input.password = await  bcrypt.hash(password,salt)

        try{
            const usuario = new Usuario(input);
            usuario.save()
            return usuario
        }
        catch(error){ 
           console.log(error)
        }
       
      } 
    }
}

module.exports = resolvers