import React from 'react';

export default function Content(props) {
  const {title, children} = props;
  return (
    <section>
      <div class="tarjeta">
       <header>
         <h3>{title}</h3>
       </header>
       {children}
      </div>
    </section>
  );
}
