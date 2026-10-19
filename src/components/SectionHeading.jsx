import React from 'react';

// "01 — projects" style heading shared by every content section
const SectionHeading = ({ index, title, children }) => (
  <div className="flex items-baseline justify-between gap-4 mb-8">
    <h2 className="text-sm font-pixel text-muted-foreground">
      {index} — {title}
    </h2>
    {children}
  </div>
);

export default SectionHeading;
