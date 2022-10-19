const headerComponent = () => {
  return /*html*/ `
    <header class="header">
      New York Times Bestseller
      <span class="material-icons menu">menu</span>
    </header>
  `;
};

const cardComponent = (title, sub, text, id) => {
  return /*html*/ `
      <div class="card">
        <p class="id">${id}</p>
        <h2 class="sub">${sub}</h2>
        <h1 class="title">${title}</h1>
        <p class="text">${text}</p>
        <button>
          read more
          <span class="material-icons arrow">arrow_forward</span>
        </button>
      </div>
    `;
};

window.addEventListener("load", (_) => {
  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentHTML("beforebegin", headerComponent());

  const bookCards = books.cards
    .map((book, index) =>
      cardComponent(book.title, book.sub, book.text, index + 1)
    )
    .join("");

  rootElement.insertAdjacentHTML("beforeend", bookCards);
});
