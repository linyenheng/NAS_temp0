function updateImage() {
    const scenario = document.getElementById('scenario').value;
    const period = document.getElementById('period').value;
    const image = document.getElementById('resultImage');
    image.src = `figures_show/${scenario}_${period}.png`;
    image.alt = `${scenario} ${period} Figure`;
}

// Add event listeners to dropdowns
document.getElementById('scenario').addEventListener('change', updateImage);
document.getElementById('period').addEventListener('change', updateImage);
//
// Initialize with default image
updateImage();
