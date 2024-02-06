document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("list");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  let page = 1;

  const fetchData = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`
        );
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  const renderRepo = (repo) => {
    const listItem = document.createElement("li");
    const topicsHTML = repo.topics
      .map(
        (topic, index) =>
          `<span class="topic topic-${index + 1}">${topic}</span>`
      )
      .join(" ");
    listItem.innerHTML = `
           
            <p class="repoN">${repo.name}</p> <strong class="repoV">${
      repo.private ? "Private" : "Public"
    }</strong>
            <p class="repoD">${repo.description}</p>
            <div class="repoTopics">${topicsHTML}</div>
            
        `;
    list.appendChild(listItem);
  };

  const handleLoadMore = () => {
    page++;
    fetchData()
      .then((data) => data.forEach(renderRepo))
      .catch((error) => console.error("Error fetching data:", error));
  };

  loadMoreBtn.addEventListener("click", handleLoadMore);

  // Initial data load
  fetchData()
    .then((data) => data.forEach(renderRepo))
    .catch((error) => console.error("Error fetching data:", error));
});
