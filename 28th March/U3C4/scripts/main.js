async function apiCall(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }

  //add api call logic here
}

function appendArticles(articles, main) {
  //   console.log(articles);
  articles.map(function (el) {
    let box = document.createElement("div");
    box.addEventListener("click", function () {
      article(el);
    });

    let title = document.createElement("p");
    title.innerText = el.title;

    let desc = document.createElement("p");
    desc.innerText = el.description;

    let img = document.createElement("img");
    img.src = el.urlToImage;
    img.setAttribute("id", "poster");

    box.append(title, desc, img);
    main.append(box);
  });

  //add append logic here
}
function article(el) {
  let arr = [];
  arr.push(el);

  localStorage.setItem("article", JSON.stringify(arr));
  window.location.href = "./blog.html";
}

export { apiCall, appendArticles };
