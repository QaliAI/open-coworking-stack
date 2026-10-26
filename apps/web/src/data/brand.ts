// CoworkingSpace.ai calls to action live here so every page links to the same place.
// Set PUBLIC_BOOKING_URL (for example a Cal.com or Calendly page) to turn the help buttons into
// a direct booking link. Without it they point to the CoworkingSpace.ai homepage.
const configuredBookingUrl = (import.meta.env.PUBLIC_BOOKING_URL ?? '').trim();

export const brand = {
  name: 'CoworkingSpace.ai',
  homeUrl: 'https://www.coworkingspace.ai/',
  freeToolsUrl: 'https://www.coworkingspace.ai/tools',
  repositoryUrl: 'https://github.com/QaliAI/open-coworking-stack',
  helpUrl: configuredBookingUrl.startsWith('https://')
    ? configuredBookingUrl
    : 'https://www.coworkingspace.ai/',
  helpLabel: configuredBookingUrl.startsWith('https://')
    ? 'Book a free setup call'
    : 'Talk to CoworkingSpace.ai',
  headerHelpLabel: 'Get setup help',
} as const;
