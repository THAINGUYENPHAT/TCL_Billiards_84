document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("message").innerText = " Gửi thành công! Quán sẽ liên hệ bạn qua Zalo.";
});