const App = (()=>{
    const blocks = document.querySelectorAll(".block");
    const resetBtn = document.querySelector(".resetBtn");
    const theBox = document.querySelector(".technicolor");
    const instruction = document.querySelector(".instruction");

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

    const listeners = () =>{
        blocks.forEach((element) =>{
            element.addEventListener("mouseover", setRandomColor)
        })

        resetBtn.addEventListener("click", resetAll)
    }

    return{
        listen: listeners
    }
})();

App.listen();