


// This method should be l10n.
window.onload = function() {
  setTimeout(function() {
    document.getElementById('splash').addEventListener('transitionend',function() {
     document.getElementById('splash').classList.add('hide');
    });
    document.getElementById('splash').classList.add('hiding');
  },1000);

  document.getElementById('newsList').addEventListener('click', function click_handler(event) {
    console.log('CLICK! '+event.target.dataset.url);
    var activity = new MozActivity({
      name: 'view',
      data: {
        type: 'url',
        url: event.target.dataset.url
      }
    });
    activity.onsuccess = function success() {
      
    };
    activity.onerror = function error() {
      
    };
  });


  document.getElementById('inputSearch').addEventListener('input', function input_handler(event) {
    console.log(event.target.value);
    call_search(event.target.value)


  });
 // setInterval(function() {
  //document.body.classList.add('detail');

 // },1000);


   
  //call_search('granada');
  
  
  
}

function call_search(search){
  document.body.classList.add('detail');
   console.log('CLICK! '+search);

  // if (!navigator.mozSms) {

  //    var url = "https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q="+search+"&callback=parse_json";
  //    var script = document.createElement('script');
  //    script.setAttribute('type', 'text/javascript');
  //    script.setAttribute('src', url);
  //    // Insert <script> into DOM
  //    document.getElementsByTagName('head')[0].appendChild(script);
  //  } else {
   

    var xhr = new XMLHttpRequest({
      mozSystem: true
    });
    xhr.open('GET', 
        'https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q='+search,true);

    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status === 0)) {
        parse_json(xhr.response);
      }
    };
    xhr.send();
 // }
}

function parse_json(response) {

var row="";
 for (var i=0;i<response.responseData.results.length;i++) {

 	row+="<li data-url='"+ response.responseData.results[i].signedRedirectUrl + "'><a href='#'><p>"+response.responseData.results[i].title +"</p></a></li>"
	
	}
 	document.getElementById('newsList').innerHTML=row;
	

}



