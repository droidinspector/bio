import React from 'react';

const Section = React.forwardRef(({ id, children }, ref) => (
  <section className="section" ref={ref} id={id}>
    {children}
  </section>
));

export default Section;
