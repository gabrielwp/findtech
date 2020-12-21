export default class {
  async getHtml() {
    return `
    <div class="container mt-5 mb-5" content>
      <div class="card p-4">
        <form action="#" class="p-2 pb-4" method="POST">
          <div class="form-group mb-4 mt-4">
            <label for="name">Nome</label>
            <input class="form-control" id="name" name="name" required="" type="text" />
          </div>
          <div class="form-group mb-4">
            <label for="email">E-mail</label>
            <input class="form-control" id="email" name="email" required="" type="email" />
          </div>
          <div class="form-group mb-4 mt-4">
            <label for="subject">Assunto</label>
            <input class="form-control" id="subject" name="subject" required="" type="text" />
          </div>
          <div class="form-group mb-4">
            <label for="description">Descrição</label>
            <textarea
              class="form-control"
              id="description"
              name="description"
              required=""
              rows="5"
              ></textarea>
          </div>
          <input class="btn btn-dark btn-lg btn-block" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
    `;
  }

  async getTitle() {
    return 'Contato';
  }

  async getSubtitle() {
    return 'Possui alguma dúvida ou sugestão? Entre em contato com a gente!';
  }
}