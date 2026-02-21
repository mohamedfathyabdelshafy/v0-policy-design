"use client"

import { useEffect, useState, useCallback } from "react"

type Lang = "ar" | "en"

export default function PrivacyPolicyPage() {
  const [lang, setLang] = useState<Lang>("ar")

  const switchLang = useCallback((l: Lang) => {
    setLang(l)
    document.documentElement.setAttribute("lang", l)
    document.documentElement.setAttribute("dir", l === "ar" ? "rtl" : "ltr")
    document.title =
      l === "ar"
        ? "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 | Salek Driver"
        : "Privacy Policy | Salek Driver"
  }, [])

  useEffect(() => {
    const browserLang = (navigator.language || "ar").toLowerCase()
    if (browserLang.startsWith("en")) {
      switchLang("en")
    } else {
      switchLang("ar")
    }
  }, [switchLang])

  const t = (ar: string, en: string) => (lang === "ar" ? ar : en)
  const year = new Date().getFullYear()

  return (
    <div className="policy-page">
      {/* Ambient background glows */}
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />
      <div className="ambient-glow glow-3" />

      <div className="container">
        {/* Top Bar */}
        <nav className="topbar" role="banner">
          <div className="brand">
            <img
              src="/images/salek-logo.png"
              alt="Salek Driver Logo"
              className="brand-logo"
            />
            <div className="brand-text">
              <strong>Salek Driver</strong>
              <span>{t("\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629", "Privacy Policy")}</span>
            </div>
          </div>

          <div className="actions">
            <button
              className={`lang-btn ${lang === "ar" ? "active" : ""}`}
              onClick={() => switchLang("ar")}
              type="button"
            >
              <span className="lang-indicator" />
              AR
            </button>
            <button
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => switchLang("en")}
              type="button"
            >
              <span className="lang-indicator" />
              EN
            </button>
            <a className="contact-btn" href="#contact">
              {t("\u062A\u0648\u0627\u0635\u0644", "Contact")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Hero */}
        <header className="hero">
          <div className="hero-inner">
            <div className="hero-badge-row">
              <div className="hero-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {t("\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B", "Last Updated")}: <b>2026-02-21</b>
              </div>
              <div className="hero-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 3v4M8 3v4" />
                </svg>
                {t("\u0627\u0644\u0646\u0637\u0627\u0642", "Scope")}: <b>{t("\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0633\u0627\u0626\u0642", "Driver App")}</b>
              </div>
              <div className="hero-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {t("\u0627\u0644\u062A\u0631\u0643\u064A\u0632", "Focus")}: <b>{t("\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 + \u0627\u0644\u0645\u0648\u0642\u0639", "Privacy + Location")}</b>
              </div>
            </div>

            <h1>{t("\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 \u0644\u062A\u0637\u0628\u064A\u0642 Salek Driver", "Privacy Policy for Salek Driver")}</h1>

            <div className="hero-callout">
              <div className="hero-callout-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <p>
                {t(
                  "\u0646\u0633\u062A\u062E\u062F\u0645 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639 \u0641\u0642\u0637 \u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629: \u062A\u062A\u0628\u0639 \u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633\u060C \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u062D\u0644\u0627\u062A\u060C \u0648\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0633\u0627\u0626\u0642 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0631 \u0648\u0646\u0642\u0627\u0637 \u0627\u0644\u062A\u062C\u0645\u0639. \u0644\u0627 \u0646\u0633\u062A\u062E\u062F\u0645 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0623\u0648 \u0627\u0644\u062A\u062A\u0628\u0639 \u0627\u0644\u062A\u0633\u0648\u064A\u0642\u064A.",
                  "We use location data only to operate the service: bus live tracking, trip management, and helping the driver follow routes and pickup points. We do not use location data for advertising or marketing tracking."
                )}
              </p>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="content-grid">
          {/* TOC Sidebar */}
          <aside className="toc-card">
            <div className="toc-header">
              <h2>{t("\u0627\u0644\u0641\u0647\u0631\u0633", "Contents")}</h2>
            </div>
            <div className="toc-body">
              {tocItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="toc-link">
                  <span className="toc-num">{item.num}</span>
                  <span className="toc-label">{t(item.ar, item.en)}</span>
                  <svg className="toc-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          </aside>

          {/* Sections */}
          <div className="sections">
            {/* 1 - Introduction */}
            <PolicySection id="intro" num="01" title={t("\u0645\u0642\u062F\u0645\u0629", "Introduction")}>
              <p>
                {t(
                  "\u062A\u0637\u0628\u064A\u0642 Salek Driver \u0645\u062E\u0635\u0635 \u0644\u0633\u0627\u0626\u0642\u064A \u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633\u0627\u062A \u0644\u062F\u0639\u0645 \u062A\u0634\u063A\u064A\u0644 \u0631\u062D\u0644\u0627\u062A \u0646\u0642\u0644 \u0637\u0644\u0627\u0628 \u0627\u0644\u062C\u0627\u0645\u0639\u0627\u062A\u060C \u0645\u062B\u0644 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u062D\u062C\u0632\u060C \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u062D\u0644\u0629\u060C \u0648\u0645\u0639\u0631\u0641\u0629 \u0646\u0642\u0627\u0637 \u0627\u0644\u062A\u062C\u0645\u0639 \u0648\u062E\u0637 \u0627\u0644\u0633\u064A\u0631\u060C \u0645\u0639 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0628\u062B \u0645\u0648\u0642\u0639 \u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633 \u0644\u0644\u0637\u0644\u0627\u0628 (\u0639\u0628\u0631 \u0623\u0646\u0638\u0645\u062A\u0646\u0627) \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u062D\u0644\u0629.",
                  "Salek Driver is designed for bus drivers to operate university student transportation services, including booking follow-up, trip management, pickup points, route tracking, and providing live bus location to students (via our systems) during trips."
                )}
              </p>
            </PolicySection>

            {/* 2 - Data We Collect */}
            <PolicySection id="data" num="02" title={t("\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u064A \u0646\u062C\u0645\u0639\u0647\u0627", "Data We Collect")}>
              <p className="bold-intro">
                {t("\u0646\u062C\u0645\u0639 \u0641\u0642\u0637 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629.", "We collect only what is necessary to operate the service.")}
              </p>

              <DataSubSection
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                title={t("\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628", "Account Data")}
              >
                <ul>
                  <li>{t("\u0627\u0633\u0645 \u0627\u0644\u0633\u0627\u0626\u0642 / \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 / \u0631\u0642\u0645 \u0623\u0648 \u0643\u0648\u062F \u0627\u0644\u0633\u0627\u0626\u0642 / \u062C\u0647\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644", "Driver name / phone number / driver ID or code / operator affiliation")}</li>
                </ul>
              </DataSubSection>

              <DataSubSection
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>}
                title={t("\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639 (Precise Location)", "Location Data (Precise Location)")}
              >
                <ul>
                  <li>{t("\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u062F\u0642\u064A\u0642 \u0644\u0644\u0633\u0627\u0626\u0642/\u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633 \u0639\u0628\u0631 GPS \u0644\u062A\u062A\u0628\u0639 \u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633 \u0644\u062D\u0638\u064A\u064B\u0627 \u0648\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0631\u062D\u0644\u0629", "Precise GPS location of the driver/bus to enable live bus tracking and trip operations")}</li>
                  <li>{t("\u0642\u062F \u064A\u062A\u0645 \u062C\u0645\u0639 \u0627\u0644\u0645\u0648\u0642\u0639 \u0623\u062B\u0646\u0627\u0621 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u060C \u0648\u0642\u062F \u064A\u062A\u0645 \u0641\u064A \u0627\u0644\u062E\u0644\u0641\u064A\u0629 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629 (\u0625\u0646 \u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0630\u0644\u0643)", "Location may be collected while using the app and in the background during active trips (if enabled)")}</li>
                </ul>
              </DataSubSection>

              <DataSubSection
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>}
                title={t("\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0648\u0627\u0644\u0631\u062D\u0644\u0629", "Trip & Operational Data")}
              >
                <ul>
                  <li>{t("\u0627\u0644\u062E\u0637/\u0627\u0644\u0645\u0633\u0627\u0631\u060C \u0646\u0642\u0627\u0637 \u0627\u0644\u062A\u062C\u0645\u0639\u060C \u062D\u0627\u0644\u0629 \u0627\u0644\u0631\u062D\u0644\u0629\u060C \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0628\u062F\u0627\u064A\u0629/\u0627\u0644\u0646\u0647\u0627\u064A\u0629", "Route/line, pickup points, trip status, start/end time")}</li>
                </ul>
              </DataSubSection>

              <DataSubSection
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>}
                title={t("\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u0642\u0646\u064A\u0629 \u0648\u062A\u0634\u062E\u064A\u0635\u064A\u0629", "Technical & Diagnostic Data")}
              >
                <ul>
                  <li>{t("\u0646\u0648\u0639 \u0627\u0644\u062C\u0647\u0627\u0632\u060C \u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u060C \u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u060C \u0648\u0633\u062C\u0644\u0627\u062A \u0627\u0644\u0623\u0639\u0637\u0627\u0644 \u0644\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0627\u0633\u062A\u0642\u0631\u0627\u0631", "Device type, OS version, app version, and crash logs to improve stability")}</li>
                </ul>
              </DataSubSection>

              <div className="warning-note">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                <span>
                  {t(
                    "\u0644\u0627 \u0646\u0633\u062A\u062E\u062F\u0645 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A \u0623\u0648 \u0627\u0644\u062A\u062A\u0628\u0639 \u0639\u0628\u0631 \u062A\u0637\u0628\u064A\u0642\u0627\u062A/\u0645\u0648\u0627\u0642\u0639 \u0623\u062E\u0631\u0649.",
                    "We do not use location data for advertising or cross-app/website tracking."
                  )}
                </span>
              </div>
            </PolicySection>

            {/* 3 - How We Use Data */}
            <PolicySection id="use" num="03" title={t("\u0643\u064A\u0641\u064A\u0629 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", "How We Use Data")}>
              <ul>
                <li>{t("\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0648\u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A", "Operate the service and manage trips and bookings")}</li>
                <li>{t("\u0625\u0638\u0647\u0627\u0631 \u0645\u0648\u0642\u0639 \u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633 \u0644\u062D\u0638\u064A\u064B\u0627 \u0644\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0645\u0635\u0631\u0651\u062D \u0644\u0647\u0645 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u062D\u0644\u0629", "Show live bus location to authorized students during trips")}</li>
                <li>{t("\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0633\u0627\u0626\u0642 \u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0631 \u0648\u0646\u0642\u0627\u0637 \u0627\u0644\u062A\u062C\u0645\u0639 \u0648\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645 \u0628\u062E\u0637 \u0627\u0644\u0633\u064A\u0631", "Assist driver with route and pickup points and improve route compliance")}</li>
                <li>{t("\u062A\u062D\u0633\u064A\u0646 \u062C\u0648\u062F\u0629 \u0627\u0644\u062E\u062F\u0645\u0629 \u0648\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0634\u0643\u0627\u0648\u0649 \u0648\u0627\u0644\u0623\u0639\u0637\u0627\u0644", "Improve service quality and handle issues and complaints")}</li>
              </ul>
              <div className="commitment-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p>
                  <strong>{t("\u062A\u0639\u0647\u062F:", "Commitment:")}</strong>{" "}
                  {t(
                    "\u0644\u0627 \u0646\u0628\u064A\u0639 \u0628\u064A\u0627\u0646\u0627\u062A\u0643. \u0644\u0627 \u0646\u0633\u062A\u062E\u062F\u0645\u0647\u0627 \u0644\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062A. \u0644\u0627 \u0646\u0633\u062A\u062E\u062F\u0645\u0647\u0627 \u0644\u0644\u062A\u062A\u0628\u0639 \u0627\u0644\u062A\u0633\u0648\u064A\u0642\u064A.",
                    "We do not sell your data. We do not use it for ads. We do not use it for marketing tracking."
                  )}
                </p>
              </div>
            </PolicySection>

            {/* 4 - Data Sharing */}
            <PolicySection id="sharing" num="04" title={t("\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", "Data Sharing")}>
              <p>{t("\u0642\u062F \u0646\u0634\u0627\u0631\u0643 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0641\u0642\u0637 \u0628\u0627\u0644\u0642\u062F\u0631 \u0627\u0644\u0644\u0627\u0632\u0645 \u0645\u0639:", "We may share data only as needed with:")}</p>
              <ul>
                <li>{t("\u062C\u0647\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644/\u0627\u0644\u062C\u0627\u0645\u0639\u0629 \u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062E\u062F\u0645\u0629", "The operator/university to manage the service")}</li>
                <li>{t("\u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0645\u0635\u0631\u0651\u062D \u0644\u0647\u0645 (\u0645\u0648\u0642\u0639 \u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633 \u0641\u0642\u0637 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u062D\u0644\u0627\u062A)", "Authorized students (bus live location only during trips)")}</li>
                <li>{t("\u0645\u0632\u0648\u062F\u064A \u0627\u0644\u0627\u0633\u062A\u0636\u0627\u0641\u0629 \u0648\u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u062A\u062D\u062A\u064A\u0629 \u0627\u0644\u0622\u0645\u0646\u0629 \u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0646\u0638\u0627\u0645", "Secure hosting and infrastructure providers to run the system")}</li>
              </ul>
              <div className="warning-note">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                <span>{t("\u0644\u0627 \u0646\u0634\u0627\u0631\u0643 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0639 \u0645\u0639\u0644\u0646\u064A\u0646 \u0623\u0648 \u0648\u0633\u0637\u0627\u0621 \u0625\u0639\u0644\u0627\u0646\u0627\u062A.", "We do not share data with advertisers or ad brokers.")}</span>
              </div>
            </PolicySection>

            {/* 5 - Retention & Deletion */}
            <PolicySection id="retention" num="05" title={t("\u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u062D\u0630\u0641", "Retention & Deletion")}>
              <p>
                {t(
                  "\u0646\u062D\u062A\u0641\u0638 \u0628\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0644\u0645\u062F\u0629 \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062E\u062F\u0645\u0629 \u0648\u062D\u0644 \u0627\u0644\u0646\u0632\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u0634\u0643\u0627\u0648\u0649 \u0648\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u062C\u0648\u062F\u0629\u060C \u062B\u0645 \u064A\u062A\u0645 \u062D\u0630\u0641\u0647\u0627 \u0623\u0648 \u0625\u062E\u0641\u0627\u0621 \u0647\u0648\u064A\u062A\u0647\u0627 (Anonymization) \u0648\u0641\u0642\u064B\u0627 \u0644\u0633\u064A\u0627\u0633\u0627\u062A\u0646\u0627 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629.",
                  "We retain trip and location data only as necessary for service operations, dispute resolution, complaints handling, and quality improvement, then delete or anonymize it according to our internal policies."
                )}
              </p>
            </PolicySection>

            {/* 6 - Background Location */}
            <PolicySection id="background" num="06" title={t("\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u0648\u0642\u0639 \u0641\u064A \u0627\u0644\u062E\u0644\u0641\u064A\u0629", "Background Location")}>
              <p>
                {t(
                  "\u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629\u060C \u0642\u062F \u064A\u062A\u0645 \u062C\u0645\u0639 \u0645\u0648\u0642\u0639 \u0627\u0644\u0623\u062A\u0648\u0628\u064A\u0633 \u0641\u064A \u0627\u0644\u062E\u0644\u0641\u064A\u0629 \u0644\u062A\u0648\u0641\u064A\u0631 \u062A\u062A\u0628\u0639 \u0644\u062D\u0638\u064A \u0628\u062F\u0648\u0646 \u0627\u0646\u0642\u0637\u0627\u0639 \u0644\u0644\u0637\u0644\u0627\u0628\u060C \u0648\u0636\u0645\u0627\u0646 \u062F\u0642\u0629 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629.",
                  "During active trips, the app may collect bus location in the background to provide uninterrupted live tracking for students and ensure accurate operational monitoring."
                )}
              </p>
              <ul>
                <li>{t("\u064A\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0630\u0644\u0643 \u0641\u0642\u0637 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u0634\u063A\u064A\u0644/\u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629.", "This is enabled only during active operation/trips.")}</li>
              </ul>
            </PolicySection>

            {/* 7 - Security */}
            <PolicySection id="security" num="07" title={t("\u0623\u0645\u0627\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", "Data Security")}>
              <ul>
                <li>{t("\u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0645\u0634\u0641\u0631\u0629 (HTTPS)", "Encrypted communications (HTTPS)")}</li>
                <li>{t("\u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0648\u0635\u0648\u0644 \u062D\u0633\u0628 \u0627\u0644\u062F\u0648\u0631 (Role-based access)", "Role-based access controls")}</li>
                <li>{t("\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u062D\u0645\u0627\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u062E\u0648\u0627\u062F\u0645 \u0648\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", "Security measures on servers and databases")}</li>
              </ul>
              <p className="muted-text">
                {t("\u0648\u0631\u063A\u0645 \u0630\u0644\u0643\u060C \u0644\u0627 \u064A\u0648\u062C\u062F \u0646\u0638\u0627\u0645 \u0622\u0645\u0646 100%\u060C \u0644\u0643\u0646\u0646\u0627 \u0646\u0639\u0645\u0644 \u0628\u0627\u0633\u062A\u0645\u0631\u0627\u0631 \u0639\u0644\u0649 \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u062D\u0645\u0627\u064A\u0629.", "However, no system is 100% secure; we continuously improve protections.")}
              </p>
            </PolicySection>

            {/* 8 - User Controls */}
            <PolicySection id="controls" num="08" title={t("\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0627\u0644\u062A\u062D\u0643\u0645", "User Controls")}>
              <ul>
                <li>{t("\u064A\u0645\u0643\u0646\u0643 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C \u0641\u064A \u0623\u064A \u0648\u0642\u062A.", "You can log out at any time.")}</li>
                <li>{t("\u064A\u0645\u0643\u0646\u0643 \u062A\u0639\u0637\u064A\u0644 \u0625\u0630\u0646 \u0627\u0644\u0645\u0648\u0642\u0639 \u0645\u0646 \u0625\u0639\u062F\u0627\u062F\u0627\u062A iOS\u060C \u0644\u0643\u0646 \u0642\u062F \u064A\u062A\u0639\u0637\u0644 \u0639\u0645\u0644 \u0627\u0644\u062A\u062A\u0628\u0639 \u0648\u0627\u0644\u0631\u062D\u0644\u0627\u062A.", "You can disable location permission in iOS settings, but live tracking and trips may not work properly.")}</li>
              </ul>
            </PolicySection>

            {/* 9 - Children's Privacy */}
            <PolicySection id="children" num="09" title={t("\u062E\u0635\u0648\u0635\u064A\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644", "Children's Privacy")}>
              <p>
                {t(
                  "\u062A\u0637\u0628\u064A\u0642 Salek Driver \u0645\u062E\u0635\u0635 \u0644\u0644\u0633\u0627\u0626\u0642\u064A\u0646 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u064A\u0646 \u0641\u0642\u0637. \u0644\u0627 \u0646\u062C\u0645\u0639 \u0639\u0645\u062F\u064B\u0627 \u0628\u064A\u0627\u0646\u0627\u062A \u0634\u062E\u0635\u064A\u0629 \u0645\u0646 \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u0639\u0628\u0631 \u0647\u0630\u0627 \u0627\u0644\u062A\u0637\u0628\u064A\u0642.",
                  "Salek Driver is intended for authorized drivers only. We do not knowingly collect personal data from children through this app."
                )}
              </p>
            </PolicySection>

            {/* 10 - Policy Changes */}
            <PolicySection id="changes" num="10" title={t("\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629", "Policy Changes")}>
              <p>
                {t(
                  "\u0642\u062F \u0646\u0642\u0648\u0645 \u0628\u062A\u062D\u062F\u064A\u062B \u0647\u0630\u0647 \u0627\u0644\u0633\u064A\u0627\u0633\u0629 \u0645\u0646 \u0648\u0642\u062A \u0644\u0622\u062E\u0631. \u0633\u064A\u062A\u0645 \u0646\u0634\u0631 \u0623\u064A \u062A\u0639\u062F\u064A\u0644 \u0647\u0646\u0627 \u0645\u0639 \u062A\u062D\u062F\u064A\u062B \u062A\u0627\u0631\u064A\u062E \"\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B\".",
                  "We may update this policy from time to time. Any changes will be posted here with an updated \"Last Updated\" date."
                )}
              </p>
            </PolicySection>

            {/* 11 - Contact */}
            <PolicySection id="contact" num="11" title={t("\u0627\u0644\u062A\u0648\u0627\u0635\u0644", "Contact")}>
              <p>{t("\u0644\u0648 \u0639\u0646\u062F\u0643 \u0623\u064A \u0623\u0633\u0626\u0644\u0629 \u0628\u062E\u0635\u0648\u0635 \u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629\u060C \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631:", "If you have questions about this Privacy Policy, contact us:")}</p>
              <div className="contact-grid">
                <div className="contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <span className="contact-label">{t("\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", "Email")}</span>
                    <a href="mailto:info@DMJ-EG.com">info@DMJ-EG.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <div>
                    <span className="contact-label">{t("\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629", "Company")}</span>
                    <span>DMJ Company Software / Salek</span>
                  </div>
                </div>
                <div className="contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <span className="contact-label">{t("\u0627\u0644\u0639\u0646\u0648\u0627\u0646", "Address")}</span>
                    <span>{t("\u0645\u0635\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0634\u064A\u0631\u0627\u062A\u0648\u0646 - \u0627\u0644\u0642\u0627\u0647\u0631\u0629 - \u0645\u0635\u0631", "Heliopolis Sheraton - Cairo - Egypt")}</span>
                  </div>
                </div>
              </div>
            </PolicySection>
          </div>
        </div>

        {/* Footer */}
        <footer className="page-footer">
          <div className="footer-line" />
          <p>
            {"© "}{year}{" Salek Driver — "}
            {t("\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629", "Privacy Policy")}
          </p>
        </footer>
      </div>
    </div>
  )
}

/* ─── Sub-components ─── */

function PolicySection({
  id,
  num,
  title,
  children,
}: {
  id: string
  num: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="section-card" id={id}>
      <div className="section-header">
        <span className="section-num">{num}</span>
        <h2>{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  )
}

function DataSubSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="data-sub">
      <div className="data-sub-header">
        <span className="data-sub-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  )
}

/* ─── TOC items data ─── */

const tocItems = [
  { id: "intro", num: "01", ar: "\u0645\u0642\u062F\u0645\u0629", en: "Introduction" },
  { id: "data", num: "02", ar: "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u064A \u0646\u062C\u0645\u0639\u0647\u0627", en: "Data We Collect" },
  { id: "use", num: "03", ar: "\u0643\u064A\u0641\u064A\u0629 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", en: "How We Use Data" },
  { id: "sharing", num: "04", ar: "\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", en: "Data Sharing" },
  { id: "retention", num: "05", ar: "\u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0648\u0627\u0644\u062D\u0630\u0641", en: "Retention & Deletion" },
  { id: "background", num: "06", ar: "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u0648\u0642\u0639 \u0641\u064A \u0627\u0644\u062E\u0644\u0641\u064A\u0629", en: "Background Location" },
  { id: "security", num: "07", ar: "\u0627\u0644\u0623\u0645\u0627\u0646", en: "Security" },
  { id: "controls", num: "08", ar: "\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", en: "User Controls" },
  { id: "children", num: "09", ar: "\u062E\u0635\u0648\u0635\u064A\u0629 \u0627\u0644\u0623\u0637\u0641\u0627\u0644", en: "Children's Privacy" },
  { id: "changes", num: "10", ar: "\u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u0633\u0629", en: "Policy Changes" },
  { id: "contact", num: "11", ar: "\u0627\u0644\u062A\u0648\u0627\u0635\u0644", en: "Contact" },
]
