import { useQuery } from '@apollo/react-hooks';
import { CFooter, CImage } from '@coreui/react';
import { gql } from '@apollo/client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import FooterMenuMain from '../FooterMenuMain/FooterMenuMain';

export const QUERY_SETTINGS = gql`
  {
    settings {
      copyright_message
    }
  }
`;

export const QUERY_TEAM_MEMBERS = gql`
  {
    teamMembers {
      name
      url
      sort_order
      image {
        path
        content_type
      }
    }
  }
`;

export const FooterLoading: React.FC = () => {
  return (
    <CFooter className="footer p-4 h-auto d-block">
      <div className="footer__copyright d-flex justify-content-center">
        <ReactMarkdown>loadings</ReactMarkdown>
      </div>
      <div className="footer__team-members d-flex flex-wrap">
      </div>
    </CFooter>
  );
};

const Footer: React.FC = () => {
  const { loading, data } = useQuery(QUERY_SETTINGS);

  if (loading) {
    return <FooterLoading />;
  }

  const { settings: { copyright_message } } = data;

  const TeamMembers: React.FC = () => {
    const { loading: loadingTeamMembers, data: teamMemberData } = useQuery(QUERY_TEAM_MEMBERS);

    if (loadingTeamMembers) {
      return null;
    }

    // We want to sort, but we can't mutate the data directly, so let's make a clone
    const teamMembers = [...teamMemberData.teamMembers];

    return teamMembers
      .sort((a, b) => (a.sort_order > b.sort_order ? 1 : -1))
      .map((member) => {
        const {
          url, name, image: { path }, sort_order,
        } = member;

        return (
          <div className="team-members__member m-auto p-4" key={sort_order}>
            <a href={url} className="team-members__member-link d-flex align-items-center" target="_blank" rel="noopener noreferrer">
              {path && (
                <div>
                  <CImage
                    src={path}
                    className="team-members__member-image c-avatar-img developer-avatar round"
                    role="presentation"
                  />
                </div>
              )}
              <div className="team-members__member-name p-4">
                <span className="mr-1 font-weight-bold">{name}</span>
              </div>
            </a>
          </div>
        );
      });
  };

  return (
    <CFooter className="footer p-4 h-auto d-block">
      <div className="footer__copyright d-flex justify-content-center">
        <ReactMarkdown>{ copyright_message }</ReactMarkdown>
      </div>
      <div className="footer__team-members d-flex flex-wrap">
        <TeamMembers />
      </div>
      <FooterMenuMain />
    </CFooter>
  );
};

export default Footer;
