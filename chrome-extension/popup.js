$(document).ready(function(){



  $(".box").click(function(){
    $('div').removeClass('active');
    $(this).addClass('active');
  });

  $('.highlight').click(function(){
    var color = $('.active').css("background-color");
    chrome.tabs.executeScript({
      code: 'window.getSelection().toString();'
    }, function(selectedText) {
      // console.log(selectedText[0]);
      var text = selectedText[0]
      console.log(text);
      $(text).css('background-color', color);
      // text.selection('insert', {text: '<span>', mode: 'before'})
      // .selection('insert', {text: '</span>', mode: 'after'});
      // $('span').css('background-color', color);
    })

    // $('body').selection('insert', {text: '<span>', mode: 'before'})
    // .selection('insert', {text: '</span>', mode: 'after'});
    // $('span').css('background-color', color);
  });


});