import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hyunchanwi.github.io/study-hub/'),
  title: 'Semester Hub | 인하대 2학년 2학기 학습실',
  description: '파이낸스경영과 컴퓨터공학 강의 노트를 한곳에서 연결하는 개인 학습 포털',
  openGraph: {
    title: 'Semester Hub | 인하대 2학년 2학기 학습실',
    description: '6개 과목의 강의 노트를 한곳에서 연결하는 개인 학습 포털',
    images: ['https://hyunchanwi.github.io/study-hub/og.png'],
  },
  twitter: { card: 'summary_large_image', images: ['https://hyunchanwi.github.io/study-hub/og.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
