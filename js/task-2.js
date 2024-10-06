class Storage {
  // Приватное свойство items
  #items;

  constructor(items) {
    // Инициализируем приватное свойство
    this.#items = items;
  }

  // Метод для получения списка товаров
  getItems() {
    return this.#items;
  }

  // Метод для добавления нового товара
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Метод для удаления товара
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Проверка
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
