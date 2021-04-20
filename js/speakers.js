"use strict";

"use strict";

      let ratingButtons = document.getElementsByClassName("speaker-select");

      var j = 0;
      for (var i = 0; i < ratingButtons.length; i++) {
        ratingButtons[i].addEventListener("click", function (e) {
          let speakerName = e.target.innerHTML;
          let topSpeakers = document.getElementById("top-speakers");

          if (j >= 3) {
            console.log(j);
            alert("You can only choose three speakers");
            i = 2;
          } else if (j == 2) {
            topSpeakers.innerHTML += speakerName + "<br>";
            let buttonClick = document.getElementById("speaker-select");
            buttonClick.addEventListener("click", function () {
              let ratingApp = document.getElementById("rating-app");
              ratingApp.innerHTML =
                '<div class="success pulsate">Thank You</div>';
            });
            j++;
          } else {
            console.log(j);
            topSpeakers.innerHTML += speakerName + "<br>";
            j++;
          }
        });
      }