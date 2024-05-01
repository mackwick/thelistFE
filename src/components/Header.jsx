import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Header(props) {
  return (
    <div className="header-container">
      <Link className="router-link" to="/">
        <h1 id="site-heading">The List Roulette</h1>
        <h4>Back to main</h4>
      </Link>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Header;
