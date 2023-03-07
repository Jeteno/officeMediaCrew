function changeText(ev) {
   if(ev.getAttribute('data-show') === "true") {
       ev.innerText = "Отправлено!"
       ev.setAttribute('data-show', "false"); 
   }
   else {
       ev.innerText = "Отправить"
       ev.setAttribute('data-show', "true"); 
   }
   const btn = document.getElementById("form__btn");
   btn.classList.toggle("form__btn-active");

   const element = document.getElementById("popup__body");
   element.classList.toggle("popup__body-active");

   const mail = document.getElementById("popup__mail");
   mail.classList.toggle("popup__mail-active");
};

function openPopup() {
   let popup = document.getElementById("popup");
   popup.classList.toggle("popup-active");

   let openBtn = document.getElementById("open__btn");
   openBtn.classList.toggle("open__btn-active");
};

let magicLink = document.getElementById("clouse__btn");
clouse__btn.addEventListener("click",function clousePopup() {
   let popup = document.getElementById("popup");
   popup.classList.add("popup");
   popup.classList.remove("popup-active");

   let openBtn = document.getElementById("open__btn");
   openBtn.classList.add("open__btn");
   openBtn.classList.remove("open__btn-active");
},false);

$(document).ready(function() {
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});