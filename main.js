const App = (()=>{
    const blocks = document.querySelectorAll(".block");
    const resetBtn = document.querySelector(".resetBtn");
    const randomBtn = document.querySelector(".randomBtn");

    const setRandomColor = (e) =>{
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }

    const resetAll = () =>{
        blocks.forEach((element) =>{
            element.style.backgroundColor = "white";
        });
    }

    const randomize = () =>{
        blocks.forEach((block)=>{
            const r = Math.floor(Math.random()*256)
            const g = Math.floor(Math.random()*256)
            const b = Math.floor(Math.random()*256)
            block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        })
    }

    const listeners = () =>{
        blocks.forEach((element) =>{
            element.addEventListener("mouseover", setRandomColor)
        })

        resetBtn.addEventListener("click", resetAll)
        randomBtn.addEventListener("click", randomize)
    }

    return{
        listen: listeners
    }
})();

App.listen();