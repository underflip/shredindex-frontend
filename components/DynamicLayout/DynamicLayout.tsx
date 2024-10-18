import React from 'react';
import { Helmet } from 'react-helmet';
import { layouts } from '../../pages/_app';

interface DynamicLayoutProps {
  url: string;
  layout?: string;
  headerMenuItems?: unknown[];
  footerMenuItems?: unknown[];
}

const DynamicLayout: React.FC<DynamicLayoutProps> = ({
  url,
  layout,
  headerMenuItems,
  footerMenuItems,
}) => {
  const Component = layouts[layout];

  if (!Component) {
    console.warn(`Layout "${layout}" not found`);
    return null;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;700;800;900&family=Roboto:wght@100;300;500;700;900&family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Shred Index</title>
        <meta name="description" content="Shred Index - Snow resort rankings"/>
      </Helmet>
      <Component
        url={url}
        headerMenuItems={headerMenuItems}
        footerMenuItems={footerMenuItems}
      />
    </>
  );
};

export default DynamicLayout;
