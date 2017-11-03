

$(document).ready(function(){
  var $feed = $('div.twitterFeed');
  //$body.html('');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];

    var $tweet = $('<div class="w3-card-4 tweet" style="width:55%">'
                    +'<img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" id="userPicture" style="width:60px">'
                    +'<div class="card">'
                      +'<div class="card-block">'
                      +'<h4 class="card-title">@' + tweet.user + '</h4>'
                      +'<h6 class="card-subtitle mb-2 text-muted">' + publishedDate(tweet) + '</h6>'
                      +'<p class="card-text">' + tweet.message + '</p>'
                    +'</div>'
                  +'</div>'
                +'</div>')

    $tweet.appendTo($feed);
    index -= 1;
  }

  var currentTweetIndex = 11;
  $('#loadMoreButton').on('click', function() {
    for (var i = currentTweetIndex; i < currentTweetIndex + 5; i++) {
      if (streams.home[i]) {
        var tweet = streams.home[i];
        var $tweet = $('<div class="w3-card-4 tweet" style="width:55%">'
                        +'<img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" id="userPicture" style="width:60px">'
                        +'<div class="card">'
                          +'<div class="card-block">'
                          +'<h4 class="card-title">@' + tweet.user + '</h4>'
                          +'<h6 class="card-subtitle mb-2 text-muted">' + publishedDate(tweet) + '</h6>'
                          +'<p class="card-text">' + tweet.message + '</p>'
                        +'</div>'
                      +'</div>'
                    +'</div>')
        $tweet.prependTo($feed);
      }
    }
    currentTweetIndex += 5 
  });

  $('body').on('mouseenter', '.tweet', function(event) {
    event.preventDefault();
    $(this).animate({'margin-left' : '+30px'}, 'fast');
  });

  $('body').on('mouseleave', '.tweet', function(event) {
    event.preventDefault();
    $(this).animate({'margin-left' : '15px'}, 'fast');
  });

});

// TARGET : Published 11/02 at 16:45 hs
var publishedDate = function(tweet) {
  var month = tweet.created_at.getMonth() + 1
  var date = tweet.created_at.getDate()
  var hour = tweet.created_at.getHours()
  var mins = tweet.created_at.getMinutes()
  return 'Published ' + month +'/' + date + ' at ' + hour + ':' + mins + ' hs.'
}

// $('#loadMoreButton').on('click', function() {
//   var newTweetIndex = 11;
//   for (var i = currentTweetIndex; i < currentTweetIndex + 5, i++) {
//     var tweet = streams.home[i];

//     var $tweet = $('<div class="w3-card-4 tweet" style="width:55%">'
//                     +'<img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" id="userPicture" style="width:60px">'
//                     +'<div class="card">'
//                       +'<div class="card-block">'
//                       +'<h4 class="card-title">@' + tweet.user + '</h4>'
//                       +'<h6 class="card-subtitle mb-2 text-muted">' + publishedDate(tweet) + '</h6>'
//                       +'<p class="card-text">' + tweet.message + '</p>'
//                     +'</div>'
//                   +'</div>'
//                 +'</div>')
//     $tweet.appendTo($feed);
//   }
// });

