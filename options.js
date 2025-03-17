// Function to save the list of domains to chrome.storage
function saveDomains(domains) {
    chrome.storage.sync.set({ domains: domains });
}

// Function to load and display the currently registered domains
function loadDomains() {
    chrome.storage.sync.get("domains", function (data) {
        const domains = data.domains || [];
        const ul = document.getElementById("domainList");
        ul.innerHTML = "";
        domains.forEach((domain, index) => {
            const li = document.createElement("li");
            li.textContent = domain;
            // Create a delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                domains.splice(index, 1);
                saveDomains(domains);
                loadDomains();
            });
            li.appendChild(deleteButton);
            ul.appendChild(li);
        });
    });
}

// Handler for adding a new domain
document.getElementById("addDomain").addEventListener("click", function () {
    const input = document.getElementById("domainInput");
    const domain = input.value.trim();
    if (domain !== "") {
        chrome.storage.sync.get("domains", function (data) {
            const domains = data.domains || [];
            domains.push(domain);
            saveDomains(domains);
            loadDomains();
            input.value = "";
        });
    }
});

// Display the list of domains when the page loads
document.addEventListener("DOMContentLoaded", loadDomains);