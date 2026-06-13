// ── WhatsApp Payment Config ───────────────────────────────────────────────────
// Update ADMIN_WHATSAPP_NUMBER if the admin number changes.
// Format: international with country code, no spaces or dashes.

export const ADMIN_WHATSAPP_NUMBER = '+916305964802';

/**
 * Builds a WhatsApp deep-link URL with a prefilled message.
 * @param {string} phone  - E.164 format (e.g. '+916305964802')
 * @param {string} message - Plain-text message body
 */
export const buildWhatsAppUrl = (phone, message) => {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
};

/**
 * Builds the standardised registration payment message.
 * @param {{ eventName: string, userName: string, passes: number }} opts
 */
export const buildRegistrationMessage = ({ eventName, userName, passes }) =>
  `Hello,\n\nI would like to register for:\n\nEvent: ${eventName}\nName: ${userName}\nPasses: ${passes}\n\nPlease find my payment shortly.\n\nThank you.`;
