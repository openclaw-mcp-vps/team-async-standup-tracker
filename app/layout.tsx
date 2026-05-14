import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Standup Tracker — Track Async Standup Completion',
  description: 'Automated system to track who completed standups, extract action items, and follow up on commitments. Built for remote teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7445b4ad-146f-4e68-9708-07bd44d0c9dd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
