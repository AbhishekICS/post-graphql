# post-graphql

## CRUD Post Graphql Using NODE EXPRESS MONGODB & GraphQL, Apollo-server

1. GET ALL Post
2. GET one Post
3. Create NEW Post
4. DELETE one Post
5. UPDATE one Post


```
query{
  getAllPosts {
    id
    title
    desc
  }
  getPost(id: "6231c27763f3e0533547227e") {
    title
    desc
  }
}

mutation{
  createPost(post:{
    title:"hello this is title one",
    desc:"hi this is description part."
  }){
    id
    title
    desc
  }
  deletePost(id: "6231c4dd26086112d7516b2c"){
    title
    desc
  }
  updatePost(id: "6231c27e63f3e05335472280", post:{
    title:"Updated title three",
    desc:"Updated description"
  }) {
    id
    title
    desc
  }
}
```
