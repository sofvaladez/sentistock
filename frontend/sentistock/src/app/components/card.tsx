//Card/ Stock News Tile Component
function NewsButton() {
    const news_button_info = {
      title: 'Title of Article',
      articlelink: 'https://www.wsj.com/', //placeholder link
    }
    function directClick(){
      location.href = news_button_info.articlelink //placeholder link
    }
    return(
      <button><img src = 'https://static.vecteezy.com/system/resources/thumbnails/029/128/849/small/square-shape-yellow-green-gradient-3d-rendering-png.png' 
      alt = "news button" width = {20} height = {20} onClick = {directClick}/></button>
    ) //not sure about the dimensions, need to test
  }
