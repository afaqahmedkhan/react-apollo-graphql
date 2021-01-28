const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
} = require("graphql");

const axios = require("axios");

const BACKEND_SERVICE_URL = "http://localhost:4000/my-service";

//Person type
const PersonType = new GraphQLObjectType({
  name: "Person",
  fields: () => ({
    val1: { type: GraphQLString },
    val2: { type: GraphQLString },
    id: { type: GraphQLID },
    facility: {
      type: FacilityType,
      resolve(parent, args) {
        return axios.get(`${BACKEND_SERVICE_URL}/facility/${parent.val1}`).then(res => res.data);
      },
    },
    exposure: {
      type: ExposureType,
      resolve(parent, args) {
        return axios.get(`${BACKEND_SERVICE_URL}/exposure/${parent.val2}`).then(res => res.data);
      },
    },
  }),
});

//Facility Type
const FacilityType = new GraphQLObjectType({
  name: "Facility",
  fields: () => ({
    val1: { type: GraphQLString },
    val3: { type: GraphQLString },
    val4: { type: GraphQLString },
  }),
});

const ExposureType = new GraphQLObjectType({
  name: "Exposure",
  fields: () => ({
    val5: { type: GraphQLString },
    val2: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    person: {
      type: PersonType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return axios.get(`${BACKEND_SERVICE_URL}/person/${args.id}`).then(res => res.data);
      },
    },
    facility: {
      type: FacilityType,
      args: { val1: { type: GraphQLString } },
      resolve(parent, args) {
        return axios.get(`${BACKEND_SERVICE_URL}/facility/${args.val1}`).then(res => res.data);
      },
    },
    exposure: {
      type: ExposureType,
      args: { val2: { type: GraphQLString } },
      resolve(parent, args) {
        return axios.get(`${BACKEND_SERVICE_URL}/exposure/${args.val2}`).then(res => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
