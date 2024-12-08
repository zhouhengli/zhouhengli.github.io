function createPopupButton(targetId, popupId, renderType) {
    var button = document.createElement('a');
    button.classList.add('btn', 'btn-outline-primary', 'btn-sm');
    
    // Apply dynamic styles based on parameters
    if (renderType === 'normal') {
        button.classList.add('show-button-normal');
    } else if (renderType === 'big') {
        button.classList.add('show-button-big');
    }
    button.style.cssText = `text-decoration: none; margin-left: 8px;`;

    button.id = 'triggerPopup';
    button.textContent = 'Cite';
    
    // Append the button to the content div
    document.getElementById(targetId).appendChild(button);

    // Add an event listener to the button to trigger the popup
    button.addEventListener('click', function() {
        document.getElementById(popupId).style.display = 'block';  // Show popup
    });
}

// Function to close the popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';  // Hide popup
}
