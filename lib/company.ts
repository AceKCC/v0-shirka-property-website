// Company constants - single source of truth for business details
// All components should import these values instead of hardcoding

export const COMPANY_NAME = "Shirka"

// Phone numbers
export const PRIMARY_PHONE_DISPLAY = "020 8068 9722"
export const PRIMARY_PHONE_TEL = "+442080689722"

// Email addresses
export const PRIMARY_EMAIL = "hello@shirka.co.uk"
export const FALLBACK_EMAIL = "enquire@shirka.co.uk"

// Helper function to get tel: link
export const getPhoneLink = () => `tel:${PRIMARY_PHONE_TEL}`
