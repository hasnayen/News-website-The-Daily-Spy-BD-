//variables
const generalBtn = document.getElementById("General");
const businessBtn = document.getElementById("Business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("Entertainment");
const technologyBtn = document.getElementById("Technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newaType = document.getElementById("newaType");
const newsdetails = document.getElementById("newsdetails");

//Arry
var newsDataArr = [];

generalBtn.onclick = function () {
    generalBtn.style.background = "white";
    businessBtn.style.background = "";
    sportsBtn.style.background = "";
    entertainmentBtn.style.background = "";
    technologyBtn.style.background = "";

}
businessBtn.onclick = function () {
    generalBtn.style.background = "";
    businessBtn.style.background = "white";
    sportsBtn.style.background = "";
    entertainmentBtn.style.background = "";
    technologyBtn.style.background = "";

}
sportsBtn.onclick = function () {
    generalBtn.style.background = "";
    businessBtn.style.background = "";
    sportsBtn.style.background = "white";
    entertainmentBtn.style.background = "";
    technologyBtn.style.background = "";

}
entertainmentBtn.onclick = function () {
    generalBtn.style.background = "";
    businessBtn.style.background = "";
    sportsBtn.style.background = "";
    entertainmentBtn.style.background = "white";
    technologyBtn.style.background = "";

}
technologyBtn.onclick = function () {
    generalBtn.style.background = "";
    businessBtn.style.background = "";
    sportsBtn.style.background = "";
    entertainmentBtn.style.background = "";
    technologyBtn.style.background = "white";

}


//apis

const API_KEY = "84acd20ff699482fa3294054b64e4edc";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function () {
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlines();
};

generalBtn.addEventListener("click", function () {

    fetchGeneralNews();

});
businessBtn.addEventListener("click", function () {
    fetchBusinessNews();
});
sportsBtn.addEventListener("click", function () {
    fetchSportsNews();
});
entertainmentBtn.addEventListener("click", function () {
    fetchEntertainmentNews();
});
technologyBtn.addEventListener("click", function () {
    fetchTechnologyNews();
});
searchBtn.addEventListener("click", function () {
    fetchQueryNews();
});

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}
const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
}
const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
}
const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
}
const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
}
const fetchQueryNews = async () => {
    if (newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

function displayNews() {
    newsdetails.innerHTML = "";
    if (newsDataArr.length == 0) {
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    newsDataArr.forEach(news => {
        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height", "matchparent");
        image.setAttribute("width", "100%");
        image.src = news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className = "text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className = "btn btn-success";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML = "Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });






}