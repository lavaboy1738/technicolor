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

    const blockListner = (item) =>{
        item.addEventListener("mouseover", setRandomColor)
    }

    const resetColor = (element) =>{
        element.style.backgroundColor = "white";
    }

    const resetAll = () =>{
        blocks.forEach(resetColor);
    }

    const listeners = () =>{
        blocks.forEach(blockListner)
        resetBtn.addEventListener("click", resetAll)
    }

    return{
        listen: listeners
    }
})();

App.listen();