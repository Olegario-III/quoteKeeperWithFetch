const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];
  
  function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
  }
  
  const body = document.querySelector("body");
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
  
    
    body.style.backgroundColor = color;
  }
  
      async function fetchQuote() {
        try {
          const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
          const text = await response.text();
          const data = JSON.parse(text);
          const quotes = data.quotes;
          const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
          const quoteText = randomQuote.quote;
          const quoteAuthor = randomQuote.author || "Unknown";
  
          document.getElementById('text').textContent = `"${quoteText}"`;
          document.getElementById('author').textContent = `– ${quoteAuthor}`;
          document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quoteText + '" – ' + quoteAuthor)}`;
          changeBackgroundColor();
        } catch (err) {
          document.getElementById('text').textContent = "Failed to load quote.";
          document.getElementById('author').textContent = "";
        }
      }
  
      document.getElementById('new-quote').addEventListener('click', fetchQuote);
  
      // Load quote on first load
      fetchQuote();