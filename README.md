# Title Shorter Extension

## Overview

**Title Shorter** is a lightweight Chrome extension that shortens webpage titles by removing unnecessary text. It focuses on cleaning up titles by eliminating substrings enclosed in various types of brackets, making your browser tabs tidier and more informative.

## Key Features

- **Automatic Title Processing:**  
  The extension processes webpage titles by removing substrings enclosed in:
  - `()` (half-width parentheses)
  - `[]` (half-width brackets)
  - `（）` (full-width parentheses)
  - `【】` (full-width brackets)

- **Domain-Specific Operation:**  
  The extension only processes titles on domains that you specify. This means you can tailor its behavior to only work on websites where you want cleaner titles.

- **Easy Configuration:**  
  Through the options page, users can easily add or remove domain names. The extension uses Chrome’s storage API to save your settings, ensuring your preferences persist between sessions.

## How It Works

1. **Retrieve Domains:**  
   The extension retrieves a list of target domains from Chrome's storage.
2. **Domain Check:**  
   It then checks if the current page’s hostname contains any of the specified domains.
3. **Process Title:**  
   If there’s a match, the extension processes the title by:
   - Removing text within `()`, `[]`, `（）`, and `【】` along with the brackets themselves.
   - Trimming the title and updating the browser tab with the new, shortened title.

## Installation

1. **Download or Clone:**  
   Get the extension's source code from the repository.
2. **Open Extensions Page:**  
   In Chrome, navigate to `chrome://extensions/`.
3. **Enable Developer Mode:**  
   Turn on Developer Mode by toggling the switch at the top-right corner.
4. **Load Unpacked Extension:**  
   Click "Load unpacked" and select the extension folder.

## Use Cases

- **Cleaner Tabs:**  
  By removing extraneous text, your browser tabs display only the essential part of the title, helping you focus on what matters.
- **Customizable Experience:**  
  Tailor the extension to work only on specific domains, ensuring that only the desired pages are affected.

## Conclusion

**Title Shorter** is designed to improve your browsing experience by decluttering your tab titles. With its easy configuration and smart processing, you can enjoy a more streamlined interface, keeping your workflow efficient and your desktop organized.
