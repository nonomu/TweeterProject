
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

$("#posts").on("click",".delete-comment",function () {
    let postid= $(this).closest(".post").data().id
    let commentid= $(this).closest(".comments").data().id
    tweeter.removeComment(postid,commentid)
    renderer.renderPosts(tweeter.getPosts())  
})
$("#posts").on("click",".delete",function () {
    let removeid= $(this).closest(".post").data().id
    tweeter.removePost(removeid)
    renderer.renderPosts(tweeter.getPosts())
})