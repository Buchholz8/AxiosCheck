function success(details){
    for(let i = 0 ; i < posts.length; i++){

    }
}
function faliure(details){
    document.body[`innerHTML`] = `This Failed, Please try again`
}
axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(success).catch(faliure)