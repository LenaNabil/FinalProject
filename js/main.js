var htmlProgressBar = document.getElementById('htmlProgress');
      var cssProgressBar = document.getElementById('cssProgress');
      var jsProgressBar = document.getElementById('jsProgress');
      var bootProgressBar = document.getElementById('bootProgress');



      var htmlValue = 0; 
      var cssValue = 0; 
      var jsValue = 0; 
      var bootValue = 0; 



      var htmlInterval = setInterval(function () {
        if (htmlValue >= 90) {
          clearInterval(htmlInterval);
        }
        htmlValue += 1;
        htmlProgressBar.style.width = htmlValue + '%';
      }, 30);

      var cssInterval = setInterval(function () {
        if (cssValue >= 80) {
          clearInterval(cssInterval);
        }
        cssValue += 1;
        cssProgressBar.style.width = cssValue + '%';
      }, 30);

      var jsInterval = setInterval(function () {
        if (jsValue >= 80) {
          clearInterval(jsInterval);
        }
        jsValue += 1;
        jsProgressBar.style.width = jsValue + '%';
      }, 30);

      var bootInterval = setInterval(function () {
        if (bootValue >= 80) {
          clearInterval(bootInterval);
        }
        bootValue += 1;
        bootProgressBar.style.width = bootValue + '%';
      }, 30);
