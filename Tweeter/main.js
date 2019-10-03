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

const post =function(){ 
    tweeter.addPost($("#input").val())
    $("#input").val("")
    renderer.renderPosts(tweeter.getPosts())
}
$("#posts").on("click",".newcomment", function () {
    let newcomment =$(this).closest(".post").find("input")
    let postid= $(this).closest(".post").data().id
    tweeter.addComment(postid ,newcomment.val())
    newcomment.val("")
    renderer.renderPosts(tweeter.getPosts())    
})