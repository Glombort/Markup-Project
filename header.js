class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav>
        <ul class="navbar">
          <li><a href="index.html">Home</a></li>
          <li><a href="Meet-The-Team.html">Meet The Team</a></li>
          <li><a href="Contact.html">Contact Us</a></li>
        </ul>
        </nav>
      </header>
      `
    }
}

customElements.define('header-1', Header);