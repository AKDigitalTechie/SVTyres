export const PHONE_DISPLAY = '+91 70261 75137';
export const PHONE_HREF = 'tel:+917026175137';

const WA_MSG = encodeURIComponent(
  'Hello SV Tyres and Services,\n\nI would like to know about tyre availability for my vehicle.'
);
export const WHATSAPP_HREF = `https://wa.me/917026175137?text=${WA_MSG}`;

// Maps/directions link — will be set after the full address below so we can encode it.
export let MAPS_HREF = 'https://maps.app.goo.gl/AgjjW19i5RtsFh9c8';
export const MAPS_APP_SHORT = 'https://maps.app.goo.gl/Xd8iEcC6QjJGcimu9';
export const INSTAGRAM_HREF = 'https://www.instagram.com/svtyres_?igsh=eWt4dTRpeHYyMHRv';
export const EMAIL = 'svtyres9@gmail.com';
export const FACEBOOK_HREF = 'https://facebook.com/svtyres';

export const BUSINESS_NAME = 'SV Tyres and Services';
export const TAGLINE = 'Your Trusted Tyre Shop in Basaveshwara Nagar, Bangalore';
export const SHORT_ADDRESS = 'Basaveshwara Nagar, Bengaluru – 560044';
export const FULL_ADDRESS =
  'No. 378, Mayagappa Complex, 8th Main Road, Mahaganapathi Nagar, 6th Phase, 1st Stage, Rajaji Nagar Industrial Town, Basaveshwara Nagar, Bengaluru, Karnataka – 560044';
export const HOURS_WEEKDAY = 'Monday – Saturday: 9:30 AM – 8:30 PM';
export const HOURS_SUNDAY = 'Sunday: 9:30 AM – 6:00 PM';

// build a Google Maps directions URL using the full address (mobile/desktop "Get Directions")
MAPS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  FULL_ADDRESS
)}&travelmode=driving`;

export const SHOP_IMAGE = '/BHE.png';
