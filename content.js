// Function to process the title
function processTitle(title) {
    // 1. Remove the substring within () including the parentheses
    title = title.replace(/\([^)]*\)/g, "");
    // 2. Remove the substring within [] including the brackets
    title = title.replace(/\[[^\]]*\]/g, "");
    // 3. Remove the substring within full-width parentheses （） including the parentheses
    title = title.replace(/（[^）]*）/g, "");
    // 4. Remove the substring within full-width brackets 【】 including the brackets
    title = title.replace(/【[^】]*】/g, "");
    return title.trim();
  }
  
  // Retrieve target domain settings from chrome.storage and check the current page's hostname
  chrome.storage.sync.get("domains", function(data) {
    const domains = data.domains || [];
    const currentDomain = window.location.hostname;
    // If any of the configured domains is included in the current hostname, execute the title processing
    if (domains.some(d => currentDomain.includes(d))) {
      const newTitle = processTitle(document.title);
      document.title = newTitle;
    }
  });