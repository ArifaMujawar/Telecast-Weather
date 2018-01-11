
  

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
    
      var latitude=position.coords.latitude;
      var longitude=position.coords.longitude;
    
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=9b75f1d5c9cd7a54abba7bfb237f52de",function(a) {
              
              
    var cel=Math.round(a.main.temp-273);
      
      $("#location").html(a.name+", "+a.sys.country);
      $("#weather").html('<img src='+"https://openweathermap.org/img/w/" +a.weather[0].icon +".png "+ '>' +a.weather[0].description);
      $("#temperature").html(cel);
      $("#mic").html("Humidity is "+a.main.humidity+"%");
    
    $("#fh").click(function(){
      $("cl").removeClass('cf');
      $(this).addClass('cf');
      $("#temperature").html(Math.round(cel*1.8+32));
    })
      $("#cl").click(function(){
        $("fh").removeClass('fh');
        $(this).addClass('fh');
        $("#temperature").html(cel);
      })
              

    
    
    });
       
      
      var current = $.now();
      var date=new Date(current);
      var currentDate=date.toString();
      $("#date").html(currentDate);
    });
  }