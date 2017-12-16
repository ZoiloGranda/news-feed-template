/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Change bottom pagination "active" element */
function activeNav(currentNav){
  document.querySelectorAll('.active.pages')[0].classList.remove("active")
  document.getElementsByClassName('pages')[currentNav].classList.add("active")
}

//change curent page (not url) to load more articles on the view without reloading the page
function changePage(page){
  if (typeof page == 'number') {
    activeNav(page)
    var showArticles = 4*page;
    var allArticles = document.getElementsByClassName('news-container');
    for (var i = 0; i < allArticles.length; i++) {
      allArticles[i].classList.remove("active-news")
      allArticles[i].classList.add("hidden")
    }
    for (var i = showArticles-4; i < showArticles; i++) {
      allArticles[i].classList.add("active-news")
      allArticles[i].classList.remove("hidden")
    }
  } else {
    if (page=='prev') {
      var activePage= document.querySelectorAll('.active.pages');
      changePage(activePage[0].innerHTML-1==0?1:activePage[0].innerHTML-1)
    } else if (page=='next') {
      var activePage= document.querySelectorAll('.active.pages');
      changePage(parseInt(activePage[0].innerHTML)+1>=3?3:parseInt(activePage[0].innerHTML)+1)
    }
  }
}