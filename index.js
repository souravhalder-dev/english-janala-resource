const loadData = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};

const displayData = (posts) => {
  const lession = document.getElementById("lession");
  posts.forEach((post) => {
    const creE = document.createElement("div");
    creE.innerHTML = `
     <a class="btn btn-soft btn-primary" href="http://"
                ><i class="fa-solid fa-book-open"></i> learning -${post.level_no}</a
              >
    `;
    lession.appendChild(creE);
  });
};
loadData();
