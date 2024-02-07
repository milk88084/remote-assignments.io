const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

function ajax(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`錯誤連結 ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function render(data) {
  const container = document.getElementById("container");
  const table = `
        <table >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody >
                ${data
                  .map(
                    (product) => `
                    <tr>
                        <td  style="text-align: center;">${product.name}</td>
                        <td  style="text-align: center;">${product.price}</td>
                        <td  style="text-align: center;">${product.description}</td>
                    </tr>
                `
                  )
                  .join("")}
            </tbody>
        </table>
    `;
  container.innerHTML = table;
}

ajax(url).then((data) => {
  render(data);
});
