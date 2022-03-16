const { gql } = require("apollo-server");

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    desc: String
  }

  input PostInput{
	  title:String,
	  desc:String
  }
  type Query {
    getAllPosts: [Post]
	getPost(id:ID):Post
  }

  type Mutation{
	  createPost(post: PostInput): Post
	  deletePost(id:ID): Post
	  updatePost(id:ID, post:PostInput):Post
  }
`;

module.exports = typeDefs;
