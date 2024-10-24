import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DynamicLayout from '../DynamicLayout/DynamicLayout';
import ResortCardError from '../ResortCard/ResortCardError/ResortCardError';

/**
 * Restore the scroll everytime we change routes
 *
 * A handy component from https://v5.reactrouter.com/web/guides/scroll-restoration
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
};

export const QUERY_CMS_PAGES = gql`
  {
    cmsPages {
      url
      layout
      title
    }
  }
`;

interface CMSPage {
  url: string;
  layout: string | null;
  title: string;
}

interface CMSPagesData {
  cmsPages: CMSPage[];
}

const DynamicSwitch: React.FC = () => {
  const { loading, data } = useQuery<CMSPagesData>(QUERY_CMS_PAGES);

  if (loading) {
    return null;
  }

  const cmsPages = data?.cmsPages;

  if (!cmsPages || !cmsPages.length) {
    throw new Error('Application failed to establish routing. CMS pages data missing.');
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        {cmsPages.map(({ url, layout, title }) => (
          <Route
            key={url}
            path={url}
            element={<DynamicLayout url={url} layout={layout} title={title} />}
          />
        ))}
        <Route
          path="*"
          element={(
            <ResortCardError
              helpId="shredindex.404error.HELP"
              help="Looks like you've skied off the map!"
              titleId="shredindex.404error.TITLE"
              title="Woah!!... Epic Wipeout"
              errorName="404 Not Found"
              errorMessageId="shredindex.404error.ERRORMESSAGE"
              errorMessage="The page you're looking for has pulled a disappearing act."
              suggestionId="shredindex.404error.SUGGESTION"
              suggestion="Maybe try heading back to the bunny slopes (homepage)..."
            />
          )}
        />
      </Routes>
    </>
  );
};

export default DynamicSwitch;
