import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grace & Hope Ministry",
  description:
    "Serving churches with free, Christ-centered tools for care, encouragement, prayer, and faithful follow-up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="/">
              <span className="brand-mark">G&amp;H</span>

              <span className="brand-words">
                <strong>Grace &amp; Hope</strong>
                <small>Ministry</small>
              </span>
            </a>

            <nav className="main-nav">
              <a href="#about">About</a>
              <a href="#churches">For Churches</a>
              <a href="#vision">Our Vision</a>
              <a href="#volunteer">Volunteer</a>
              <a className="nav-button" href="#support">
                Support the Mission
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h3>Grace &amp; Hope Ministry</h3>

                <p>
                  Helping local churches care faithfully for the homebound,
                  hurting, grieving, isolated, and anyone needing
                  encouragement.
                </p>
              </div>

              <div>
                <h3>Our Commitment</h3>

                <p>
                  Our goal is to provide the core church-care platform free to
                  local churches and support the ministry through voluntary
                  donations.
                </p>
              </div>
            </div>

            <div className="daily-reminder">
              <strong>
                Serving Churches. Encouraging People. Glorifying Christ.
              </strong>

              <p>
                Helping churches ensure that no one is forgotten and everyone
                is encouraged.
              </p>

              <p className="footer-verse">
                “Bear ye one another&apos;s burdens, and so fulfil the law of
                Christ.” — Galatians 6:2, KJV
              </p>
            </div>

            <div className="footer-bottom">
              <p>
                © {new Date().getFullYear()} Grace &amp; Hope Ministry
              </p>

              <p>Every name has a story. Every story matters.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
