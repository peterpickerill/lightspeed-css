window.addEventListener('load', hello);

function hello() {
    document.querySelectorAll("#table-color-selector li").forEach(function(el) {
        el.onclick = function() {
            document.getElementById("table").className = el.className;
        }
    });
    document.querySelectorAll("#button-color-selector li").forEach(function(el) {
        el.onclick = function() {
            document.getElementById("button").className = el.className;
        }
    });
    document.querySelectorAll("#tags-color-selector li").forEach(function(el) {
        el.onclick = function() {
            document.getElementById("tag").className = "tags " + el.className;
        }
    });
    document.querySelectorAll("#alert-color-selector li").forEach(function(el) {
        el.onclick = function() {
            document.getElementById("alert").className = "alert " + el.className;
            document.getElementById("alert-small").className = "alert small " + el.className;
            document.getElementById("prompt").className = "prompt " + el.className;
            document.getElementById("prompt-small").className = "prompt small " + el.className;
            document.getElementById("confirm-two-btn").className = "confirm " + el.className;
            document.getElementById("confirm-three-btn").className = "confirm small " + el.className;
        }
    });
    document.querySelectorAll("#banner-color-selector li").forEach(function(el) {
        el.onclick = function() {
            let color = el.className;
            document.getElementById("banner").className = "banner " + color; 
            document.getElementById("banner-with-icon").className = "banner with-icon " + color;  
            
            let list = document.getElementsByClassName("color");
            for (let i=0<list.length;i++;) {
                list[i].innerText = color;
            }
        }
    });
}