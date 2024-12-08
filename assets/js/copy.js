function copyToClipboard(targetId) {
    const codeText = document.getElementById(targetId).textContent;

    // Copy the content to clipboard
    navigator.clipboard.writeText(codeText).then(function() {
        // Get the code box and create the checkmark icon
        const codeBox = document.getElementById(targetId);
        const checkmark = document.createElement('span');
        
        // Set the style for the checkmark icon
        checkmark.classList.add('checkmark-icon');
        checkmark.innerHTML = '&#x2705;';  // Unicode checkmark symbol

        // Append the checkmark icon to the code box
        codeBox.appendChild(checkmark);
        
        // Display the checkmark icon
        checkmark.style.display = 'inline';  // Make it inline to appear next to the content

        // Hide the checkmark after 1 second
        setTimeout(function() {
        checkmark.style.display = 'none';  // Hide the checkmark icon after 1 second
        }, 1000); // 1 second delay
    }).catch(function(err) {
        console.error("Failed to copy text:", err);
    });
}