import { Tilt_Neon } from 'next/font/google';
import localFont from 'next/font/local';

export const fontText = Tilt_Neon({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-text'
});

export const gagalin = localFont({
  src: [
    { 
      path: './gagalin.otf',
      weight: '400',
      variable: '--font-title',
      style: 'regular'
    }
  ],
});