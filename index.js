const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('click', () => {
    console.log('clicked');
    document.body.classList.toggle('dark'); 
})