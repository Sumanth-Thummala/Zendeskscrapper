// Zendesk Data Scraper using Puppeteer
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        // Replace with the Zendesk URL to scrape
        const zendeskURL = 'https://your-zendesk-guide-url.com';
        await page.goto(zendeskURL, { waitUntil: 'domcontentloaded' });

        console.log('Page loaded.');

        // Adjust this selector to match the Zendesk article content structure
        const articleSelector = '.article-content'; 

        // Wait for the articles to load
        await page.waitForSelector(articleSelector, { timeout: 10000 });

        console.log('Extracting articles...');

        // Scrape the content of all articles
        const articles = await page.evaluate((selector) => {
            const elements = document.querySelectorAll(selector);
            return Array.from(elements).map(el => el.textContent.trim());
        }, articleSelector);

        if (articles.length === 0) {
            console.error('No articles found with the given selector. Check the page structure.');
        } else {
            console.log(`${articles.length} articles extracted.`);
        }

        // Save articles to a text file
        const filePath = 'zendesk_articles.txt';
        fs.writeFileSync(filePath, articles.join('\n\n'), 'utf-8');

        console.log(`Scraping complete. Articles saved to ${filePath}`);

        // Close browser
        await browser.close();
        console.log('Browser closed.');
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
})();
