var empty;
console.log("test)

const temp = () => {
    return empty
}

const p = document.querySelector(".badClass");

p.textContent = temp();

throw new Error("test")