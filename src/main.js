const baseUrl = 'https://api.github.com/users/ErickPu146'
const containerProjetcs = document.querySelector('#containerProjects');

let proyectos = '';

    
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        for (let repo of data) {
            let project = `
            <div class="col-12 col-md-6 col-lg-3">
                <div id="cardProject" class="card mb-4" style="border: 3px solid #d15706;">
                    <div class="card-body text-center">
                        <h5 class="card-title fs-5">${repo.name}</h5>
                    </div>
                    <div class="card-footer  text-center fs-5">
                        <a href="#" class="btn btn-outline-success 
                            stretched-link" data-bs-toggle="modal"
                            data-bs-target="#${repo.node_id}">
                            Informacion
                        </a>
                    </div>
                </div>
            </div>


            <div class="modal fade bg-warning" id="${repo.node_id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true" style="backgroun-color:"#f9ebc4"">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 orange" id="exampleModalLabel">${repo.name}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p class="fs-5">
                                <span class="fw-bold">Descripcion:</span>
                                ${repo.description}
                            </p>
                            <p class="fs-5">
                                <span class="fw-bold">Visibilidad:</span>
                                ${repo.visibility}
                            </p>
                            <p class="fs-5">
                                <span class="fw-bold">Fecha de creacion:</span>
                                ${repo.created_at}
                            </p>
                            <p class="fs-5">
                                <span class="fw-bold">Ultima modificacion:</span>
                                ${repo.updated_at}
                            </p>
                        </div>
                        <div class="modal-footer">
                            <a href="${repo.html_url}" target="_blank">
                                <button type="button" class="btn btn-info">Visitar repositorio</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `
            proyectos += project
        }
        containerProjetcs.innerHTML = proyectos
    } catch (error) {
        console.error(error)
    }
}

fetchData(`${baseUrl}/repos`)