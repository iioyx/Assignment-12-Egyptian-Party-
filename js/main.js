// Side Nav
$("#side-btn").click(function () {
  $(".left").animate({ width: "250px" }, 100);
  $("#side-btn").animate({ left: "250px" }, 100);
  $(".head-text").animate({ left: "120px" }, 270);
});

$("#close-btn").click(function () {
  $(".left").animate({ width: "0px" }, 100);
  $("#side-btn").animate({ left: "0px" }, 100);
  $(".head-text").animate({ left: "0px" }, 270);
});
// Side Nav


// Singer Section


$(".head-text").click(function () {
  $(this).next().slideToggle(300); 
});

// Singer Section

// Time Section

function StartCountDown(Enddate) {
  let FutureDate = new Date(Enddate);
  FutureDate = FutureDate.getTime() / 1000;

  let Timenow = new Date();
  Timenow = Timenow.getTime() / 1000;

  let TimeLeft = FutureDate - Timenow;

  let days = Math.floor(TimeLeft / (24 * 60 * 60));
  let hours = Math.floor((TimeLeft - days * (24 * 60 * 60)) / 3600);
  let minutes = Math.floor(
    (TimeLeft - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let seconds = Math.floor(
    TimeLeft - days * (24 * 60 * 60) - hours * 3600 - minutes * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${minutes} m`);
  $(".seconds").html(`${seconds} s`);

  setInterval(function () {
    StartCountDown(Enddate);
  }, 1000);
}

StartCountDown("21 May 2025 12:00");

// Time Section

// Footer

let MaxLength = 100;

$("#Message").keyup(function () {
  let MessageLength = $(this).val().length;
  let LeftChar = MaxLength - MessageLength;
  if (LeftChar <= 0) {
    $(".left-char").html("You have reached limited characters!");
  } else {
    $(".left-char").html(`<span class = "fs-5 text-danger">${LeftChar}</span>` + " Character Reamining");
  }
});

// Footer
