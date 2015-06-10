//XHR as a promise

function PromiseXHR(url){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '');
  xhr.onload = function(){

  }

  xhr.onerror = function(){
    //
  }
  xhr.send();

}

