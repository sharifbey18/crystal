// global verbal
var random_result;
var lost = 0;
var win = 0;
var previous = 0; 

var restAndStart = function () {

  $('.crystals').empty();

  var images = [
    'https://media.comicbook.com/2017/01/rock-eyebrow-223360-1280x0.jpg',
    'https://vignette.wikia.nocookie.net/s4s/images/b/b8/Stone-Cold-Steve-Austin-Finger-wwestalker.jpg/revision/latest?cb=20130923005546',
    'https://cdn.newsapi.com.au/image/v1/b46c39de749bfa229cf5c0975b74f297',
    'http://www.geocities.ws/Colosseum/Arena/9454/mankindsocko.jpg'
  ]

  random_result = Math.floor(Math.random() * 69) + 30

 $('#result').html('Random Result: ' + random_result)

  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;
    
    var crystal = $('<div>');
    crystal.attr({
      'class': 'crystal',
      'data-random': random
    });
    
    crystal.css({
      "background-image": "url('" + (images[i]) + "')",
      "background-size": "cover"

    });

    $('.crystals').append(crystal);
  }
  $('#previous').html('Total score: ' + previous);
}

restAndStart(); 

// Event Delegation
$(document).on('click', ".crystal", function () {
  var num = parseInt($(this).attr('data-random'));

  previous += num;
  console.log(previous);

  $('#previous').html('Total score: ' + previous);

  if(previous > random_result) { 
    lost++;
    $('#lost').html('You Suck Loser: ' + lost);
    previous = 0;
    restAndStart();

  }
  else if(previous === random_result) {
    win++;
    $('#win').html('You Win Champ: ' + win);
    previous = 0;
    restAndStart();
  }
});
