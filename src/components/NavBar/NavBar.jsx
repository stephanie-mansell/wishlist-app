import "./NavBar.scss";

function NavBar() {
  return (
    <nav class="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sign-in">Login</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
