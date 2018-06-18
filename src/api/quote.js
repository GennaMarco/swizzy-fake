


export const loadQuote = async() => {
    const url = "https://talaikis.com/api/quotes/random/";
    const result = await fetch(url);
    const data = await result.json();
    return data;
};

