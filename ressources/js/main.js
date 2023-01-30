let mybutton = document.getElementById("myBtn");
let dlbtn = document.getElementById("logo__dl");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

dlbtn.addEventListener('click', function () {
  setTimeout(() => {
    downloadFile('ressources/assets/documents/CVMS.docx', 'CV - Mathis SPORTIELLO');
  }, 200);
}
);

function downloadFile(url, fileName) {
  fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
  .then(res => res.blob())
  .then(res => {
    const aElement = document.createElement('a');
    aElement.setAttribute('download', fileName);
    const href = URL.createObjectURL(res);
    aElement.href = href;
    aElement.setAttribute('target', '_blank');
    aElement.click();
    URL.revokeObjectURL(href);
  });
}