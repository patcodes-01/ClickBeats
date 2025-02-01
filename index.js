// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", handleClick);
//   });

  /*
     document.querySelectorAll("button")[0].addEventListener("click", handleClick);
     In above way, do for all 7 buttons, but if aage chalke we need to add more buutons,
     then we would not be able to add this functionality.

     Or we can use for loop to add event listener to all buttons. */

  /*
     for(var i=0; i<document.querySelectorAll(".drum").length; i++)
    {
     document.querySelectorAll(".drum")[i].addEventListener("click", function()
     {
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
     });
    }
  */
  
    /* 
  function handleClick() {
    alert("I got clicked");
  } 
   */


  /* M.M. of Clicking produces sound :-

  document.querySelector(".w").addEventListener("click", function()
  {
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
    this.style.color = "white";
  });

  document.querySelector(".a").addEventListener("click", function()
  {
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
  });

  document.querySelector(".s").addEventListener("click", function()
  {
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
  });

  document.querySelector(".d").addEventListener("click", function()
  {
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
  });

  document.querySelector(".j").addEventListener("click", function()
  {
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
  });

  document.querySelector(".k").addEventListener("click", function()
  {
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
  });

  document.querySelector(".l").addEventListener("click", function()
  {
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
  });

  */

  for (var i = 0; i < document.querySelectorAll(".drum").length; i++) 
    {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() 
    {
      var buttonName = this.innerHTML;
  
      switch (buttonName) 
      {
        case "w":
          var crash = new Audio('./sounds/crash.mp3');
          crash.play();
          break;
        case "a":
          var kick = new Audio('./sounds/kick-bass.mp3');
          kick.play();
          break;
        case "s":
          var snare = new Audio('./sounds/snare.mp3');
          snare.play();
          break;
        case "d":
          var tom1 = new Audio('./sounds/tom-1.mp3');
          tom1.play();
          break;
        case "j":
          var tom2 = new Audio('./sounds/tom-2.mp3');
          tom2.play();
          break;
        case "k":
          var tom3 = new Audio('./sounds/tom-3.mp3');
          tom3.play();
          break;
        case "l":
          var tom4 = new Audio('./sounds/tom-4.mp3');
          tom4.play();
          break;
        default:
          console.log(buttonName);
      }
      buttonanimation(buttonName);
    });
  }

  document.addEventListener("keydown", function(event)
  {
    var key=event.key;
    switch(key)
    {
      case "w":
      case "W":
        var crash = new Audio('./sounds/crash.mp3');
        crash.play();
        break;
      
        case "a":
        case "A":
          var kick = new Audio('./sounds/kick-bass.mp3');
          kick.play();
          break;
        case "s":
        case "S":
          var snare = new Audio('./sounds/snare.mp3');
          snare.play();
          break;
        case "d":
        case "D":
          var tom1 = new Audio('./sounds/tom-1.mp3');
          tom1.play();
          break;
        case "j":
        case "J":
          var tom2 = new Audio('./sounds/tom-2.mp3');
          tom2.play();
          break;
        case "k":
        case "K":
          var tom3 = new Audio('./sounds/tom-3.mp3');
          tom3.play();
          break;
        case "l":
        case "L":
          var tom4 = new Audio('./sounds/tom-4.mp3');
          tom4.play();
          break;
        default:
          console.log(buttonName);
    }
    buttonanimation(key);
  } );

  function buttonanimation(currkey)
  {
    var pressedbutton = document.querySelector("."+currkey);
    pressedbutton.classList.add("pressed");
    setTimeout(function()
    {
      pressedbutton.classList.remove("pressed");
    }, 1500);
  }