const ministryAreas = [
  {
    icon: "🏠",
    title: "Homebound Care",
    description:
      "Help churches remember, visit, call, pray for, and encourage members who can no longer attend regularly.",
  },
  {
    icon: "🙏",
    title: "Prayer and Follow-Up",
    description:
      "Organize prayer requests and compassionate follow-up so people know their church continues to care.",
  },
  {
    icon: "🤝",
    title: "Volunteer Coordination",
    description:
      "Equip willing servants with meaningful opportunities, clear assignments, training, and encouragement.",
  },
];

const peopleWeServe = [
  "Homebound church members",
  "Hospital patients",
  "Nursing-home and assisted-living residents",
  "Widows and widowers",
  "Caregivers",
  "Families experiencing crisis",
  "People recovering from illness or surgery",
  "Anyone needing intentional encouragement",
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">The Grace &amp; Hope Initiative</p>

            <h1>No one in the family of God should feel forgotten.</h1>

            <p className="hero-lead">
              Grace &amp; Hope Ministry equips local churches with free,
              Christ-centered resources and technology that help pastors,
              ministry leaders, and volunteers care for people faithfully.
            </p>

            <div className="button-row">
              <a className="button primary-button" href="#churches">
                Learn About Church Partnerships
              </a>

              <a className="button secondary-button" href="#vision">
                Read Our Vision
              </a>
            </div>

            <p className="free-promise">
              ✓ Our goal is to keep the core care platform free to local
              churches.
            </p>
          </div>

          <aside className="ministry-card">
            <p className="eyebrow light-eyebrow">
              Daily Ministry Reminder
            </p>

            <h2>Today&apos;s Ministry</h2>

            <blockquote>
              “God has entrusted us with opportunities to encourage people
              today.”
            </blockquote>

            <div className="divider" />

            <p>
              Every reminder should lead to care. Every assignment should lead
              to ministry. Every name represents someone deeply loved by God.
            </p>

            <strong>Every name has a story. Every story matters.</strong>
          </aside>
        </div>
      </section>

      <section className="section white-section" id="about">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Why We Exist</p>

            <h2>
              Helping loving churches turn good intentions into faithful care.
            </h2>

            <p>
              Most churches care deeply. Grace &amp; Hope provides organization,
              training, resources, and thoughtful technology that help
              compassion become consistent action.
            </p>
          </div>

          <div className="three-column-grid">
            {ministryAreas.map((area) => (
              <article className="feature-card" key={area.title}>
                <span className="feature-icon">{area.icon}</span>

                <h3>{area.title}</h3>

                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section" id="churches">
        <div className="container two-column-grid">
          <div>
            <p className="eyebrow">Built for the Local Church</p>

            <h2>Technology that supports ministry—not replaces it.</h2>

            <p className="large-copy">
              A reminder should lead to a telephone call. A prayer request
              should lead to prayer. A scheduled assignment should lead to a
              visit. The software exists to help people remember and care for
              people.
            </p>

            <ul className="check-list">
              <li>Simple church-care organization</li>
              <li>Homebound and hospital ministry support</li>
              <li>Volunteer assignments and follow-up</li>
              <li>Prayer requests, meals, visits, and encouragement</li>
              <li>Privacy, dignity, and confidentiality</li>
            </ul>
          </div>

          <div className="quote-panel">
            <p className="eyebrow">Why We Serve</p>

            <h3>Faithful presence can become powerful ministry.</h3>

            <p>
              Someone may not remember everything we said, but they may always
              remember that someone from their church came, prayed with them,
              encouraged them, and reminded them that they were not forgotten.
            </p>

            <strong>That is ministry.</strong>
          </div>
        </div>
      </section>

      <section className="section white-section" id="vision">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">People Before Process</p>

            <h2>Care throughout every season of life.</h2>

            <p>
              Grace &amp; Hope Ministry is being designed to help churches care
              consistently without ever making people feel like records, cases,
              numbers, or tasks.
            </p>
          </div>

          <div className="people-grid">
            {peopleWeServe.map((person) => (
              <div className="person-item" key={person}>
                <span>♡</span>
                <p>{person}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scripture-section">
        <div className="container scripture-inner">
          <blockquote>
            “Wherefore comfort yourselves together, and edify one another, even
            as also ye do.”
          </blockquote>

          <p>1 Thessalonians 5:11, KJV</p>
        </div>
      </section>

      <section className="section callout-section" id="volunteer">
        <div className="container callout-content">
          <p className="eyebrow gold-eyebrow">Join the Mission</p>

          <h2>
            Help churches ensure that no one is forgotten and everyone is
            encouraged.
          </h2>

          <p>
            Pray with us, serve with us, become a future pilot church, or help
            support the ministry so its core tools can remain freely available.
          </p>

          <div className="button-row centered-buttons">
            <a className="button gold-button" href="mailto:">
              Volunteer With Us
            </a>

            <a className="button outline-button" href="#support">
              Support the Mission
            </a>
          </div>
        </div>
      </section>

      <section className="section support-section" id="support">
        <div className="container two-column-grid">
          <div>
            <p className="eyebrow">Freely Given</p>

            <h2>Churches should not be priced out of caring for people.</h2>

            <p className="large-copy">
              Our desire is to provide the core Grace &amp; Hope Ministry
              platform free to local churches whenever responsibly possible.
              The ministry will be supported through voluntary donations,
              charitable gifts, partnerships, and faithful stewardship.
            </p>
          </div>

          <div className="support-card">
            <h3>Support Grace &amp; Hope Ministry</h3>

            <p>
              Donation options will be added after the ministry&apos;s financial
              and nonprofit structure is properly established.
            </p>

            <p>
              Until then, we invite you to pray for wisdom, direction,
              protection, and the right people to help build this ministry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
