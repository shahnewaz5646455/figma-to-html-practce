// Add this JavaScript to handle nested offcanvas menus
document.addEventListener('DOMContentLoaded', function() {
  const nestedDropdownToggles = document.querySelectorAll('.dropend .dropdown-toggle');
  
  nestedDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      // Bootstrap will handle the dropdown toggle automatically
    });
  });
});