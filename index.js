const tranforme = document.getElementById("iT")

tranforme.addEventListener('click', () => {
    const header = document.getElementById("header")
    const login = document.getElementById("login")

    if (tranforme.classList.contains('fa-moon')) {
        
        tranforme.classList.remove('fa-moon')
        tranforme.classList.add('fa-sun')
        header.classList.add('dark');
        login.classList.add('dark');
    } else {
        
        tranforme.classList.add('fa-moon');
        tranforme.classList.remove('fa-sun');
        login.classList.remove('dark');
    }
    

})