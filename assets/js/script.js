(async function () {
    document.querySelector(".filmes").innerHTML = "carregando...";

    let req = await fetch("https://api.b7web.com.br/cinema/");
    let json = await req.json();
    console.log(json);
    montarBlog(json);
 
    function montarBlog(list) {
        let html = "";

        for (let i in list) {
            html += 
                `<div class="col-md-3 bg-light rounded-3 p-2">
                        
                    <div class="filme ">

                        <img class="img-thumbnail" src="${list[i].avatar}"/>
                        
                        <h5 class="mb-3 text-center">${list[i].titulo}</h5>

                    </div>

                </div>`;
        }
        document.querySelector(".filmes").innerHTML = html;
    }
})();