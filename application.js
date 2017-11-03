$(document).ready(function(){
  var $feed = $('div.twitterFeed');
  //$body.html('');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];

    var $tweet = $('<div class="w3-card-4 tweet" style="width:100%">'
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

// LOAD MORE BUTTON
  var currentTweetIndex = 11;
  $('#loadMoreButton').on('click', function() {
    for (var i = currentTweetIndex; i < currentTweetIndex + 5; i++) {
      if (streams.home[i]) {
        var tweet = streams.home[i];
        var $tweet = $('<div class="w3-card-4 tweet" style="width:100%">'
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

  // ANIMATION
  $('body').on('mouseenter', '.tweet', function(event) {
    event.preventDefault();
    $(this).animate({'margin-left' : '+30px'}, 'fast');
  });

  $('body').on('mouseleave', '.tweet', function(event) {
    event.preventDefault();
    $(this).animate({'margin-left' : '15px'}, 'fast');
  });

  // SHOW USER TWEETS
  $('body').on('click', '.tweet', function() {
    var username = $(this).find('.card-title').text().slice(1);
    var $userTweets = $('div.userTweets');
    $userTweets.children().remove();
    $('.userFeed h1').text('See more from: @' + username);
    for (var i = 0; i < streams.users[username].length; i++) {
      var $userTweet = $('<div class="w3-card-4 userTweet" style="width:100%">'
                +'<img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" id="userPicture" style="width:60px">'
                +'<div class="card">'
                  +'<div class="card-block">'
                  +'<h4 class="card-title">@' + streams.users[username][i].user + '</h4>'
                  +'<h6 class="card-subtitle mb-2 text-muted">' + publishedDate(streams.users[username][i]) + '</h6>'
                  +'<p class="card-text">' + streams.users[username][i].message + '</p>'
                +'</div>'
              +'</div>'
            +'</div>')

      $userTweet.prependTo($userTweets);
    }
    $('.userFeed').fadeIn();
  });

  // VIEW LESS BUTTON
  $('body').on('click', '#viewLess', function() {
    $('.userFeed').fadeOut();
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


