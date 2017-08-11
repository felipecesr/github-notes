class Notes {
  constructor(data, element) {
    this.data = data;
    this.element = element;
  }

  get userId() {
    return this.data.id;
  }

  render() {
    const markup = this.data.map(user => `
      <li class="note">${user.name} <a href="#" class="remove-note">Remove</a></li>
    `).join('');

    this.element.innerHTML = markup;
  }
}

export default Notes;