function main() { 
	const cheerio = require("cheerio"); 

    const pageHTML = await axios.get("https://blog.naver.com/eyeray")

    // initializing cheerio 
const $ = cheerio.load(pageHTML.data)
} 
 
main()
