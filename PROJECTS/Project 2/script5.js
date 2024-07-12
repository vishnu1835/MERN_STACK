let val = "x";

function mouseMove(obj1) {
    if (obj1.innerHTML == "") {
        if (val == "x") {
            obj1.innerHTML = val;
            check(obj1);
            val = "o";
        } else {
            obj1.innerHTML = val;
            check(obj1);
            val = "x";
        }
    }

    let key = obj1.innerHTML;
    console.log(key);
    console.log(obj1.id);
}

function check(obj1) {
    let key = obj1.innerHTML;
    let key1 = document.getElementById("box1").innerHTML;
    let key2 = document.getElementById("box2").innerHTML;
    let key3 = document.getElementById("box3").innerHTML;
    let key4 = document.getElementById("box4").innerHTML;
    let key5 = document.getElementById("box5").innerHTML;
    let key6 = document.getElementById("box6").innerHTML;
    let key7 = document.getElementById("box7").innerHTML;
    let key8 = document.getElementById("box8").innerHTML;
    let key9 = document.getElementById("box9").innerHTML;

    if ((key1 == key && key2 == key && key3 == key) || (key1 == key && key5 == key && key9 == key) || (key1 == key && key4 == key && key7 == key)) {
        alert(`${key} wins`);
        reset();
    } else if ((key2 == key && key1 == key && key3 == key) || (key2 == key && key5 == key && key8 == key)) {
        alert(`${key} wins`);
        reset();
    } else if ((key3 == key && key2 == key && key1 == key) || (key3 == key && key6 == key && key9 == key) || (key3 == key && key5 == key && key7==key)) {
        alert(`${key} wins`);
        reset();
    } else if ((key4 == key && key1 == key && key7 == key) || (key4 == key && key5 == key && key6 == key)) {
        alert(`${key} wins`);
        reset();
    } else if ((key5 == key && key4 == key && key6 == key) || (key5 == key && key2 == key && key8 == key) || (key5 == key && key1 == key && key9 == key) || (key5 == key && key3 == key && key7)) {
        alert(`${key} wins`);
        reset();
    } else if ((key6 == key && key5 == key && key4 == key) || (key6 == key && key3 == key && key9 == key)) {
        alert(`${key} wins`);
        reset();
    } else if ((key7 == key && key4 == key && key1 == key) || (key7 == key && key5 == key && key3 == key) || (key7 == key && key8 == key && key9 == key)) {
        alert(`${key} wins`);
        reset();
    } else if ((key8 == key && key7 == key && key9 == key) || (key8 == key && key5 == key && key2 == key)) {
        alert(`${key} wins`);
        reset();
    } else if ((key9 == key && key5 == key && key1 == key) || (key9 == key && key8 == key && key7 == key) || (key9 == key && key6 == key && key3 == key)) {
        alert(`${key} wins`);
        reset();
    } else {
        occupied();
    }
}

function reset() {
    location.reload();
}

function occupied() {
    let allSquaresFilled = true;
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById(`box${i}`).innerHTML === "") {
            allSquaresFilled = false;
            break;
        }
    }
    if (allSquaresFilled) {
        console.log("It's a draw");
        alert("It's a draw");
        reset();
    }
}