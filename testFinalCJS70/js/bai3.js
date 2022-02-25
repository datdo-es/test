const longElement = document.getElementById("result")
    document.getElementById("shortco").addEventListener("click", (e)=> {
        const url = document.getElementById("txturl").value;
    fetch("https://api.shrtco.de/v2/shorten?url=" + url)
        .then((response) => response.json())
        .then((data) => {
            if (data.result.short_link) {
                longElement.textContent = data.result.short_link;
            }
        })
        .catch((error) => {
            alert("Lỗi: " + error.message);
        });
        })

    document.getElementById("shiny").addEventListener("click", (e)=> {
        const url = document.getElementById("txtUrl").value;
        fetch("https://api.shrtco.de/v2/shorten?url=" + url)
            .then((response) => response.json())
            .then((data) => {
                if (data.result.share_link) {
                    longElement.textContent = data.result.share_link;
                }
            })
        .catch((error) => {
            alert("Lỗi: " + error.message);
        });
    })
    document.getElementById("nightqr").addEventListener("click", (e)=> {
        const url = document.getElementById("txtUrl").value;
    fetch("https://api.shrtco.de/v2/shorten?url=" + url)
        .then((response) => response.json())
        .then((data) => {
            if (data.result.short_link2) {
                longElement.textContent = data.result.short_link2;
            }
        })
        .catch((error) => {
            alert("Lỗi: " + error.message);
        });
    })