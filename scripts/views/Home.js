export default class {
  async getHtml() {
    return `
        <div id="map" class="shadow">
          <button id="favorite" fav-button>Favoritar</button>
          <div id="legend">
            Legenda: <div class="blue">Default</div> <div class="green">Selecionado</div> <div class="violet">Favoritado</div>
          </div>
        <div>
        
    `;
  }

  async getTitle() {
    return 'FindTech';
  }

  async getSubtitle() {
    return 'O FindTech lista as principais empresas de software e tecnologia localizadas em Campinas e Região.';
  }
}