const cheerio = require("cheerio");
const axios = require("axios");

const fetchData = async (text) => {
    const result = await axios.get(`http://www.ultimasnoticias.com.ve/?s=${text}`);
    return cheerio.load(result.data);
};

const getResults = async (text) => {
    const $ = await fetchData(text);

    const titles = new Set();

    $('.entry-title a').each((index, element) => {
        titles.add($(element).text());
    });

    return {
        titles: [...titles].sort()
    }
}

module.exports = getResults;