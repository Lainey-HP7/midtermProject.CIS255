async function getPapers() {
    try {
        const response = await fetch("https://upadhayay.github.io/db.json");
        const data = await response.json();

        const papers_div = document.getElementById("papers");

        for (let paper of data.books) {
            //Only papers that were PUBLISHED by Einstein (Published === false --> don't include)
            if (paper.published === true) {
                console.log(paper);
                const eachPaper_div = document.createElement("div");

                eachPaper_div.innerHTML = `
            <h2> Title: ${paper.title} </h2>
            <h3> Year: ${paper.year} </h3>
            <h4> Published: ${paper.published} </h4>`;

                eachPaper_div.classList.add('eachPaper');
                papers_div.append(eachPaper_div);
            }
        }
    }
    catch (error) {
        console.log("Error: ", error);
    }

}
getPapers();

const hamburger = document.getElementById("hamburger");
const hiddenmenu = document.getElementById("hiddenmenu");

hamburger.addEventListener(
    'click',
    () => {
        if (hiddenmenu.style.display == 'none') {
            hiddenmenu.style.display = 'block';
        }
        else {
            hiddenmenu.style.display = 'none';
        }
        
    }
)
