"use client"
import { Mail, Github, Phone, MapPin } from "lucide-react"
import { FadeIn, SectionLabel } from "./ui"
import { meta } from "@/lib/data"

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6">

        {/* Top — section label + heading */}
        <FadeIn className="mb-14">
          <SectionLabel>04 / Contact</SectionLabel>
          <h2 className="font-display text-display-lg text-ink leading-tight tracking-tight max-w-[560px]">
            Let&apos;s build something{" "}
            <span className="italic text-ink/60">worth building.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-[1fr_auto] gap-14 md:gap-24 items-start">

          {/* Left — copy + primary CTA */}
          <FadeIn delay={0.08} className="max-w-[480px]">
            <p className="text-[15.5px] text-ink-2 leading-loose mb-8">
              I&apos;m actively looking for internships and full-time roles in AI
              engineering, analytics, data products, CRM/ops tech, and software.
              If you&apos;re working on something interesting — or you just want to
              talk about a project — reach out.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${meta.email}`}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-email-cta"
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-canvas bg-accent hover:bg-accent-dim px-5 py-2.5 rounded-sm transition-colors"
              >
                <Mail size={13} />
                Send an email
              </a>
              <a
                href={meta.resumeUrl}
                download
                id="contact-resume-cta"
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-2 hover:text-ink border border-border hover:border-border-hi px-5 py-2.5 rounded-sm transition-all"
              >
                Download resume ↗
              </a>
            </div>
          </FadeIn>

          {/* Right — contact details */}
          <FadeIn delay={0.14}>
            <div className="flex flex-col gap-4">
              {[
                { icon: <Mail size={13} />, label: "Email", value: meta.email, href: `https://mail.google.com/mail/?view=cm&to=${meta.email}`, external: true },
                { icon: <Github size={13} />, label: "GitHub", value: "github.com/Liam4Shaw", href: meta.github, external: true },
                { icon: <Phone size={13} />, label: "Phone", value: meta.phone, href: `tel:${meta.phone.replace(/\s/g, "")}` },
                { icon: <MapPin size={13} />, label: "Location", value: meta.location, href: null },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-3">
                  <span className="text-ink-3 w-4 flex-shrink-0">{l.icon}</span>
                  <span className="font-mono text-[9.5px] text-ink-3 tracking-widest uppercase w-14 flex-shrink-0">
                    {l.label}
                  </span>
                  {l.href ? (
                    <a
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                      className="text-[13.5px] text-ink-2 hover:text-ink transition-colors"
                    >
                      {l.value}
                    </a>
                  ) : (
                    <span className="text-[13.5px] text-ink-2">{l.value}</span>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-border pt-8">
        <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-ink-3">
            © 2026 <span className="text-ink-2">Liam Shaw</span> · liamshaw.in
          </p>
          <p className="font-mono text-[10px] text-ink-3/40">
            Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </section>
  )
}
