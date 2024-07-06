// Side Nav
$("#side-btn").click(function () {
  $(".left").css({ width: "250px" });
  $("#side-btn").css({ left: "250px" });
  $(".head-text").css({ left: "120px" });
});

$("#close-btn").click(function () {
  $(".left").css({ width: "0px" });
  $("#side-btn").css({ left: "0px" });
  $(".head-text").css({ left: "0px" });
});
// Side Nav


// Singer Section
// Singer Section
$(".head-text").click(function () {
  $(this).next().slideToggle(300); // تقليل مدة الرسوم المتحركة إلى 100 ملي ثانية
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
