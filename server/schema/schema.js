const graphql = require('graphql');
const _ = require('lodash');
const Resumen = require('../models/resumen');
const User = require('../models/user');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

// creamos un object type BookType
const ResumenType = new GraphQLObjectType({
    name:'Resumen',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        content: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId)
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name:'User',
    fields: () => ({
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        resumenes: {
            type: new GraphQLList(ResumenType),
            resolve(parent, args) {
                return Resumen.find({userId: parent.id});
            }
        }
    })
}); 

// RootQuery: como entramos al grafo
const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: {
        // Query para obtener un objeto de tipo BookType a partir de su id
        resumen: {
            type: ResumenType,
            args: { id: {type: GraphQLID}},
            resolve(parent, args) {
                return Resumen.findById(args.id);
                //code to get data from db / other source
            }
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        resumenes: {
            type: new GraphQLList(ResumenType),
            resolve() {
                return Resumen.find({});
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return User.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                username: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let user = new User({
                    username: args.username,
                    email: args.email,
                    password: args.password
                });
                return user.save();
            }
        },
        addResumen: {
            type: ResumenType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                content: {type: new GraphQLNonNull(GraphQLString)},
                userId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                let resumen = new Resumen({
                    name: args.name,
                    content: args.content,
                    userId: args.userId
                });
                return resumen.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})