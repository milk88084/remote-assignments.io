function ajax(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }
  
  function render(data) {
    console.log(data);
  }
  
  const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
  
  ajax(url).then(data => {
    render(data);
  });
  