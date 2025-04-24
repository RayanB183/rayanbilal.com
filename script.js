document.addEventListener('DOMContentLoaded', function() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        // Add click event to the entire category
        category.addEventListener('click', function(e) {
            // Prevent event from bubbling up
            e.stopPropagation();
            
            // Toggle the active class
            this.classList.toggle('active');
            
            // Close other dropdowns
            skillCategories.forEach(otherCategory => {
                if (otherCategory !== this) {
                    otherCategory.classList.remove('active');
                }
            });
        });
    });

    // Add click event to document to close dropdowns when clicking outside
    document.addEventListener('click', function() {
        skillCategories.forEach(category => {
            category.classList.remove('active');
        });
    });
}); 
}); 