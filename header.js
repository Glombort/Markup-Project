class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav>

        <ul class="navbar">
          <li><a href="index.html" ><div class="logo-image"><img src="./logo.svg" alt="company logo"/></div></a></li>
          <li><a href="index.html"><b>Home</b></a></li>
          <li><a href="Meet-The-Team.html"><b>Meet The Team</b></a></li>
          <li><a href="Contact.html"><b>Contact Us</b></a></li>
        </ul>
        </nav>
      </header>
      `
    }
}

customElements.define('header-1', Header);