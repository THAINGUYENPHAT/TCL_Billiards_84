let form = document.getElementById("contactForm");
let message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.querySelector("input[name='name']").value;
  let phone = document.querySelector("input[name='phone']").value;

  if (name === "" || phone === "") {
    message.innerText = "Vui lòng nhập đầy đủ!";
    return;
  }

  message.innerText = "Đang gửi...";

  // fetch("https://formsubmit.co/ajax/phat3Q113@gmail.com", {
  //   method: "POST",
  //   headers: {
  //     'Accept': 'application/json'
  //   },
  //   body: new FormData(form)
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     message.innerText = "Gửi thành công! 🎉";
  //     form.reset();
  //   })
  //   .catch(error => {
  //     message.innerText = "Có lỗi xảy ra!";
  //   });

  fetch("http://localhost:3000/booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      phone
    })
  })
    .then(response => response.json())
    .then(data => {
      message.innerText = "Gửi thành công! 🎉";
      form.reset();
    })
    .catch(error => {
      message.innerText = "Có lỗi xảy ra!";
    });
});