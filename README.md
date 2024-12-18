# Zendesk Data Scraper

Note: This scrapper tool is build for educational purpose.

This project is a web scraping tool built with Puppeteer for extracting article content from Zendesk Guide pages is build just for educational purpose. The script automates the process of navigating to a Zendesk page and saving article content to a text file.

## Features
- Automates article scraping from Zendesk Guide pages.
- Saves extracted data into a neatly formatted `.txt` file.
- Lightweight and easy to configure.

## Prerequisites
- Node.js (v14 or higher) installed on your system.
- Basic understanding of JavaScript and npm.

## Installation

1. Clone this repository or download the files.
2. Navigate to the project directory.
3. Install the required dependencies using npm:
   ```bash
   npm install
   ```

## Usage

1. Open the `scrapper.js` file and update the `zendeskURL` variable with the URL of the Zendesk Guide page you want to scrape.
2. Run the scraper using the following command:
   ```bash
   node scrapper.js
   ```
3. After execution, the extracted articles will be saved in a file named `zendesk_articles.txt` in the project directory.

## Project Structure
```
|-- package.json          # Dependency configurations
|-- scrapper.js           # Main script for scraping Zendesk articles
|-- zendesk_articles.txt  # Output file generated after scraping
```

## Customization
- Adjust the `articleSelector` variable in `scrapper.js` to match the structure of your Zendesk Guide page.
- Modify the output file name or format in the script as needed.

## Error Handling
- If no articles are found, verify the `articleSelector` is correct.
- Ensure the target Zendesk URL is accessible and does not require login or authentication.

## Dependencies
- `puppeteer`
- `fs`

## License
This project is open-source and available.

Feel free to contribute and enhance this scraper as needed!

