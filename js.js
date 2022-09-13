const Count = document.querySelector(".count")
    let son = 0

    function nol() {
        son = 0
        Count.innerHTML = son
    }

    function qoshish() {
        son++
        console.log(son)
        Count.innerHTML = son
    }
    