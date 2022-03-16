const Post = require("../model/Post.model");

const reducers = {
  Query: {
    getAllPosts: async () => {
      return await Post.find();
    },
    getPost: async (parent, args, context, info) => {
      const { id } = args;
      return await Post.findById(id );
    },
  },

  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, desc } = args.post;
      console.log(title, desc);
      const post = new Post({ title, desc });
      await post.save();
      return post;
    },
	deletePost: async(parent, args, context, info)=>{
		const {id} = args
		return await Post.findByIdAndDelete(id)
	},
	updatePost: async(parent, args, context, info)=>{
		const {id} = args
		const {title, desc} = args.post
		const post =  await Post.findByIdAndUpdate(id, {title, desc}, {new:true})
		return post
	}
  },
};

module.exports = reducers;
