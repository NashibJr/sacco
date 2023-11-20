import React from "react";
import Link from "./Link";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <div>
          <ul>
            <Link href="/" label="LOGO" />
            <Link href="/dashboard" label="Dashboard" />
            <Link href="/Investiments" label="Investiments" />
            <Link href="/Savings" label="Savings" />
            <Link href="/Projects" label="Projects" />
            <Link href="/Analysis" label="Analysis" />
            <Link href="/Reports" label="Reports" />
          </ul>
        </div>
        <div>
          <select>
            <option>My account</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
