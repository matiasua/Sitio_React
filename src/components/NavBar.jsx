import React from 'react';

export default function NavBar (props) {
  return (
    <header>
    <nav>
      <ul>
        {props.links.map(link => <li><a href={link.href}>{link.title}</a></li>)}
      </ul>
    </nav>
    </header>
  );
}
