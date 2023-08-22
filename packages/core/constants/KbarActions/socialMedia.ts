import { openExternalLink } from '../../utils';
import { facebookUrl, githubUrl, instagramUrl, linkedInUrl, twitterUrl } from '../SocialMedia';
import { IconActionType } from './type';

function isValid(value: unknown) {
  if (typeof value === 'string' && value.length > 2) {
    return true;
  }

  return false;
}

function getSocialMediaId(value: string) {
  return value.split('/').pop();
}

export const socialActions: IconActionType[] = [];

function pushActionWhenValid(value: string, action: IconActionType) {
  if (!isValid(value)) return;
  socialActions.push(action);
}

pushActionWhenValid(githubUrl, {
  id: 'github',
  name: 'Github',
  subtitle: getSocialMediaId(githubUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'github, source code, open, code',
  icon: 'Github',
  perform: () => openExternalLink(githubUrl),
});

pushActionWhenValid(instagramUrl, {
  id: 'instagram',
  name: 'Instagram',
  subtitle: getSocialMediaId(instagramUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'dm, meta, contact, social media',
  icon: 'Instagram',
  perform: () => openExternalLink(instagramUrl),
});

pushActionWhenValid(facebookUrl, {
  id: 'facebook',
  name: 'Facebook',
  subtitle: getSocialMediaId(facebookUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'dm, meta, contact, social media',
  icon: 'Facebook',
  perform: () => openExternalLink(facebookUrl),
});

pushActionWhenValid(linkedInUrl, {
  id: 'linkedin',
  name: 'LinkedIn',
  subtitle: getSocialMediaId(linkedInUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'contact, hire, job',
  icon: 'Linkedin',
  perform: () => openExternalLink(linkedInUrl),
});

pushActionWhenValid(twitterUrl, {
  id: 'twitter',
  name: 'Twitter',
  subtitle: getSocialMediaId(twitterUrl),
  section: 'Social',
  shortcut: [],
  keywords: 'dm, twitter, contact',
  icon: 'Twitter',
  perform: () => openExternalLink(twitterUrl),
});

pushActionWhenValid('./cv-pdf/Avery_2023.pdf', {
  id: 'pdf',
  name: 'My Resume (Last Updated by 2023-08)',
  subtitle: 'Avery_2023.pdf',
  section: 'Documents',
  shortcut: [],
  keywords: 'pdf, resume, document',
  icon: 'Info',
  perform: () => openExternalLink('./cv-pdf/Avery_2023.pdf'),
});


