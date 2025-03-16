import { updateText } from "./app.js";

document.getElementById("submitButton").addEventListener("click",() => {

    const text = document.getElementById("textInput").value;
    updateText(text);
   
}) ;
