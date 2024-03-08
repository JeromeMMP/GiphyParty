console.log("Let's get this party started!");
const search = $('#search')

$('#form').on('submit', async function (e){
    e.preventDefault(); 

    let term = search.val();
    const res = await axios.get(
        'http://api.giphy.com/v1/gifs/search', 
        {
            params:{
                q: term, 
                api_key: 'PMkWP2nmHuqXgqMsU7YBneWGPHt6Thky'
            }
        }
    );
    
    findAGif(res.data.data);
    search.val('');
})

// function that finds and appends gif
function findAGif(response){
    const randomNumber = Math.floor(Math.random()* response.length); 
    let urlLink = response[randomNumber].images.original.url; 
    const img = $('<img>').attr('src',urlLink);
    $('#imgSet').append(img); 
} 

// deleting every gif
$('#delete').on('click', function(){
    $('#imgSet').empty();
})
