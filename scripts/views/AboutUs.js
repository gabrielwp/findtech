export default class {
  async getHtml() {
    return `
    <div class="container pt-5 pb-5">
      <div class="">
        <div class="card mb-3">
          <div class="row no-gutters d-flex justify-content-center align-items-start">
            <div class="col-sm-auto img-column">
              <img
                alt="test"
                class="ratio img-responsive img-circle"
                src="./assets/gabriels-pic.png"/>
            </div>
            <div class="col-md">
              <div class="card-body">
                <h5 class="card-title mb-0">Gabriel</h5>
                <p class="card-text">
                  <em><small class="text-muted">Front End Developer</small></em>
                </p>
                <p class="card-text">
                  Cursando Análise e Desenvolvimento de Sistemas no Instituto Federal de Educação,
                  Ciência e Tecnologia de São Paulo, Campus Campinas.
                </p>
                <a
                  class="card-link"
                  href="https://github.com/gabrielwp"
                  rel="noopener noreferrer"
                  target="_blank"
                  >GitHub</a>
                <a
                  class="card-link"
                  href="https://www.linkedin.com/in/gabrielwp/"
                  rel="noopener noreferrer"
                  target="_blank"
                  >LinkedIn
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Frameworks Utilizados</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">
              <div class="col">
                <div class="card mb-3 mt-3">
                  <div class="card-body p-4">
                    <h5 class="card-title mb-0">Bootstrap</h5>
                    <p class="card-text">
                      <small class="text-muted">v4.5</small>
                    </p>
                    <p class="card-text">
                      Framework de código aberto para desenvolvimento de componentes de interface para
                      sites e aplicações web.
                    </p>
                    <a
                      class="btn btn-dark"
                      href="https://getbootstrap.com/docs/4.5/getting-started/introduction/"
                      rel="noopener noreferrer"
                      target="_blank"
                      >Documentação
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    `;
  }

  async getTitle() {
    return 'Sobre Nós';
  }

  async getSubtitle() {
    return 'FindTech é um site desenvolvido pelos alunos do IFSP Campinas.';
  }
}