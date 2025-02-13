function toggleFullDescription(button) {
    const fullDesc = button.nextElementSibling;
    const isHidden = fullDesc.classList.contains('hidden');
    
    fullDesc.classList.toggle('hidden');
    button.textContent = isHidden ? 'Read Less' : 'Read More';
} 