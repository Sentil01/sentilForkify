import icons from 'url:../../img/icons.svg';

class searchRecipe {
  #data;

  #parentEl = document.querySelector('.search-results');
  _getQuery() {
    const query = document.querySelector('.search__field').value;
    document.querySelector('.search__field').innerHTML = '';
    return query;
  }
  addHandlerSearch(handler) {
    document.querySelector('.search').addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
  render(recipes) {
    this.#data = recipes;

    recipes.map(i =>
      this.#parentEl.insertAdjacentHTML('afterbegin', this._generateMarkup(i))
    );
  }
  _generateMarkup(i) {
    return ` 
    <li class="preview">
     <a class="preview__link preview__link--active" href="${i.id}">
     <figure class="preview__fig">
       <img src="${i.image_url}" alt="Test" />
     </figure>
     <div class="preview__data">
       <h4 class="preview__title">${i.title}</h4>
       <p class="preview__publisher">${i.publisher}</p>
       <div class="preview__user-generated">
         <svg>
           <use href="${icons}#icon-user"></use>
         </svg>
       </div>
     </div>
     </a>
    </li>`;
  }
}
export default new searchRecipe();
