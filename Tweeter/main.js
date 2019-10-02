/*

const tweater = Tweeter()
let text="Hello EveryBody"
console.log(tweater.getPosts())
tweater.addPost(text)
tweater.addComment("p3", "New Comment in p3")
tweater.addComment("p3", "New Comment in p3")
tweater.removePost("p1")
tweater.addPost(text)
console.log(tweater.getPosts())
tweater.removeComment("p3","c7")
tweater.addComment("p4","BlaBla")
tweater.addComment("p3","Bl")
console.log(tweater.getPosts())
*/
 const tweeter = Tweeter()
 const renderer = Renderer()

 renderer.renderPosts(tweeter.getPosts())
// tweeter.addPost("Hello")
// tweeter.addComment("p3", "New Comment in p3")
// tweeter.removeComment("p3","c7")
// renderer.renderPosts(tweeter.getPosts())