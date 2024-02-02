    function output() {
    const number = document.getElementById('inputText').value;
    const resultText = document.getElementById('result');

    
    fetch(`/getData?number=${number}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.text();
    })
    .then(result => {
      resultText.textContent = `${result}`;
    })
    .catch(error => {
      resultText.textContent = error.message;
    });  

}