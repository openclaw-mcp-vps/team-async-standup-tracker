export default function Home() {
  const faqs = [
    {
      q: 'Which platforms does it integrate with?',
      a: 'Standup Tracker connects with Slack and Discord to automatically capture standup messages from your existing channels — no workflow changes needed.'
    },
    {
      q: 'How does AI action item extraction work?',
      a: 'Each standup is analyzed to identify blockers, commitments, and follow-ups. Items are surfaced in your dashboard and trigger automated reminders if unresolved.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Remote Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Miss a Standup<br />or a Follow-Up Again
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically track who submitted their async standup, extract action items with AI, and send accountability reminders — all without leaving Slack or Discord.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required · Cancel anytime</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '✅', title: 'Completion Tracking', desc: 'See at a glance who submitted their standup each day.' },
          { icon: '🤖', title: 'AI Action Items', desc: 'Commitments and blockers extracted automatically.' },
          { icon: '🔔', title: 'Auto Follow-Ups', desc: 'Reminders sent until open items are resolved.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-white font-semibold mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · unlimited team members</div>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Slack & Discord integration',
              'AI action item extraction',
              'Automated follow-up reminders',
              'Team completion dashboard',
              'Weekly analytics digest',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started — $12/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Standup Tracker. All rights reserved.
      </footer>
    </main>
  )
}
