// Main application - applying KISS principle with simple initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Mermaid
    Utils.initMermaid();
    
    // Display initial overview notes
    NotesManager.displayNotes('overview');
}); 