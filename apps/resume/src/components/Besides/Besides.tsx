import styled from '@emotion/styled';
import { config, Divider, NextUITheme, useTheme } from '@nextui-org/react';
import { lighten, darken } from 'polished';

import Section from '../Section';

interface BesidesLink {
  type: 'website' | 'song';
  title: string;
  description?: string;
  link?: string;
  spotifyEmbedLink?: string;
}

interface BesidesProps {
  links: BesidesLink[];
}

function BesidesSection({ links }: BesidesProps) {
  const { theme } = useTheme();
  console.log(theme);
  //   return;
  return (
    <Section>
      <StyledTitle>Other Links</StyledTitle>
      {links.map((link, index) => (
        <>
          {link.type === 'website' && (
            <LinkWrapper key={index}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <WebsiteLink>
                  {link.title}
                  <p>{link.description}</p>
                </WebsiteLink>
              </a>
            </LinkWrapper>
          )}

          {link.type === 'song' && link.spotifyEmbedLink && (
            <SpotifyEmbedWrapper theme={theme} key={index}>
              <iframe
                style={{ borderRadius: '12px' }}
                src={link.spotifyEmbedLink}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </SpotifyEmbedWrapper>
          )}
        </>
      ))}
    </Section>
  );
}

export default BesidesSection;

const StyledTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  flex-direction: column;
  gap: 12px;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(1, 1, 1, 0.1);
  border: solid 1px #eee;

  & > div:first-of-type {
    height: auto;
  }

  @media ${config.media.xsMax} {
    flex-direction: column;
  }
`;

const WebsiteLink = styled.div`
  a {
    font-size: 1.2rem;
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }

  p {
    margin-top: 0.5rem;
    color: #666;
  }
`;

const SpotifyEmbedWrapper = styled.div<{ theme: NextUITheme | undefined }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;

  @media ${config.media.xsMax} {
    padding-left: 1rem;
    border-left: solid 3px ${({ theme }) => theme.colors.primary.value};
  }
`;
