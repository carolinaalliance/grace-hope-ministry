const ministryAreas = [
  {
    icon: "🏠",
    title: "Homebound Ministry",
    description:
      "Help churches maintain meaningful relationships with members who can no longer attend services regularly.",
  },
  {
    icon: "🏥",
    title: "Hospital Ministry",
    description:
      "Coordinate visits, prayer, family communication, and thoughtful follow-up during times of illness.",
  },
  {
    icon: "🌿",
    title: "Widow & Caregiver Ministry",
    description:
      "Encourage widows, widowers, and caregivers who may be carrying difficult burdens quietly.",
  },
  {
    icon: "🙏",
    title: "Prayer Ministry",
    description:
      "Receive, organize, share, and faithfully follow up on prayer requests while respecting confidentiality.",
  },
  {
    icon: "💌",
    title: "Encouragement Ministry",
    description:
      "Turn reminders into cards, telephone calls, visits, birthdays, and meaningful moments of care.",
  },
  {
    icon: "🤝",
    title: "Volunteer Ministry",
    description:
      "Equip willing church members with training, assignments, schedules, and opportunities to serve.",
  },
];

const steps = [
  {
    number: "01",
    title: "Join",
    description:
      "Create a church account and identify the ministry leaders who will coordinate care.",
  },
  {
    number: "02",
    title: "Organize",
    description:
      "Build your care team, add the people being served, and organize prayer, visits, calls, and assistance.",
  },
  {
    number: "03",
    title: "Encourage",
    description:
      "Turn compassionate intentions into faithful, consistent ministry throughout the church family.",
  },
];

const impactItems = [
  {
    value: "Churches",
    label: "Strengthened through practical care tools",
  },
  {
    value: "Volunteers",
    label: "Equipped for compassionate service",
  },
  {
    value: "People",
    label: "Remembered, encouraged, and prayed for",
  },
  {
    value: "Christ",
    label: "Glorified through faithful ministry",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-overlay" />

        <div className="container home-hero-grid">
          <div className="home-hero-content">
            <p className="eyebrow hero-eyebrow">
              Grace &amp; Hope Ministry
            </p>

            <h1>
  Honoring our senior saints.
  <br />
  Caring for them faithfully.
</h1>
           <p className="hero-copy">
  Helping local churches faithfully care for senior adults,
  the homebound, widows and widowers, the grieving, and others
  who need encouragement, prayer, and meaningful connection.
</p>

            <div className="button-row">
              <a className="button gold-button" href="#partner">
                Become a Partner Church
              </a>

              <a className="button hero-outline-button" href="#mission">
                Discover the Mission
              </a>
            </div>

            <div className="hero-promise">
              <span aria-hidden="true">✓</span>

              <p>
                Our goal is to provide the core church-care platform free to
                local churches.
              </p>
            </div>
          </div>

          <aside className="hero-ministry-card">
            <p className="eyebrow light-eyebrow">
              Today&apos;s Ministry
            </p>

            <h2>Who needs encouragement today?</h2>

            <div className="hero-care-list">
              <div>
                <span>❤️</span>

                <p>A homebound member waiting for a visit</p>
              </div>

              <div>
                <span>🙏</span>

                <p>A family asking their church to pray</p>
              </div>

              <div>
                <span>📞</span>

                <p>A widow who may need a telephone call</p>
              </div>

              <div>
                <span>🍲</span>

                <p>A caregiver who could use practical support</p>
              </div>
            </div>

            <strong>
              Every name has a story. Every story matters.
            </strong>
          </aside>
        </div>
      </section>

      <section className="ministry-statement">
        <div className="container ministry-statement-inner">
          <span className="statement-mark">“</span>

          <p>
            People are never interruptions to ministry.
            <strong> They are the ministry.</strong>
          </p>
        </div>
      </section>

      <section className="section white-section" id="mission">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Why Grace &amp; Hope?</p>

            <h2>Every church wants to care well.</h2>

            <p>
              Many faithful believers quietly become isolated because of
              illness, age, disability, grief, caregiving responsibilities, or
              difficult life circumstances. Grace &amp; Hope Ministry helps
              churches make compassionate care intentional, organized, and
              consistent.
            </p>
          </div>

          <div className="mission-grid">
            <article className="mission-card featured-mission-card">
              <span className="mission-icon">❤️</span>

              <h3>Encourage</h3>

              <p>
                Help churches provide visits, telephone calls, cards, prayer,
                and meaningful follow-up.
              </p>
            </article>

            <article className="mission-card">
              <span className="mission-icon">🏠</span>

              <h3>Care</h3>

              <p>
                Support homebound members, widows, caregivers, grieving
                families, and others facing difficult seasons.
              </p>
            </article>

            <article className="mission-card">
              <span className="mission-icon">🤝</span>

              <h3>Equip</h3>

              <p>
                Give pastors and volunteers practical tools, training,
                reminders, and organized ministry workflows.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section ministry-areas-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">A Complete Ministry of Care</p>

            <h2>Helping churches serve throughout every season of life.</h2>

            <p>
              Grace &amp; Hope Ministry is designed around real relationships
              and real opportunities to reflect the compassion of Jesus Christ.
            </p>
          </div>

          <div className="ministry-area-grid">
            {ministryAreas.map((area) => (
              <article className="ministry-area-card" key={area.title}>
                <span className="ministry-area-icon" aria-hidden="true">
                  {area.icon}
                </span>

                <div>
                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <a href="#partner">Learn more →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section how-it-works-section">
        <div className="container">
          <div className="section-heading light-section-heading">
            <p className="eyebrow gold-eyebrow">
              Simple, Purposeful, Faithful
            </p>

            <h2>How Grace &amp; Hope works</h2>

            <p>
              The platform helps churches move from loving intentions to
              organized, dependable, and compassionate action.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section founders-section">
        <div className="container founders-grid">
          <div className="founders-visual">
            <div className="founders-photo-placeholder">
              <span>G&amp;H</span>

              <p>Founder photograph can be added here later.</p>
            </div>

            <div className="founders-verse">
              <p>
                “Bear ye one another&apos;s burdens, and so fulfil the law of
                Christ.”
              </p>

              <strong>Galatians 6:2, KJV</strong>
            </div>
          </div>

          <div className="founders-copy">
            <p className="eyebrow">A Letter From the Founder</p>

            <h2>The heart behind Grace &amp; Hope Ministry</h2>

            <p>
              Every local church desires to love people well. Yet pastors,
              deacons, ministry leaders, and volunteers often carry many
              responsibilities, making it difficult to remember every visit,
              telephone call, birthday, prayer request, and follow-up need.
            </p>

            <p>
              Grace &amp; Hope Ministry was created to help churches strengthen
              their ministry of encouragement through practical organization
              while always remembering that people—not software—are the heart
              of ministry.
            </p>

            <blockquote>
              “Our prayer is that no person will feel forgotten simply because
              the church lacked an organized way to remember them.”
            </blockquote>

            <a className="text-link" href="#founders-vision">
              Read the Founder&apos;s Vision →
            </a>
          </div>
        </div>
      </section>

      <section className="scripture-feature">
        <div className="container scripture-feature-inner">
          <p className="eyebrow light-eyebrow">
            Our Biblical Calling
          </p>

          <blockquote>
            “Wherefore comfort yourselves together, and edify one another, even
            as also ye do.”
          </blockquote>

          <strong>1 Thessalonians 5:11, KJV</strong>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">The Impact of Care</p>

            <h2>Success measured through ministry, not merely numbers.</h2>

            <p>
              As Grace &amp; Hope grows, these categories will reflect the
              meaningful ways churches are serving and encouraging people.
            </p>
          </div>

          <div className="impact-grid">
            {impactItems.map((item) => (
              <article className="impact-card" key={item.value}>
                <strong>{item.value}</strong>

                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section partner-section" id="partner">
        <div className="container">
          <div className="section-heading light-section-heading">
            <p className="eyebrow gold-eyebrow">
              Help Shape the Ministry
            </p>

            <h2>Partner with Grace &amp; Hope</h2>

            <p>
              Churches, volunteers, prayer partners, advisers, and supporters
              can help build a ministry that equips congregations to care more
              faithfully.
            </p>
          </div>

          <div className="partner-grid">
            <article className="partner-card">
              <span className="partner-icon">⛪</span>

              <h3>For Churches</h3>

              <p>
                Become a founding partner church and help shape the care tools,
                training, and resources your congregation truly needs.
              </p>

              <a className="button primary-button" href="mailto:">
                Become a Partner Church
              </a>
            </article>

            <article className="partner-card">
              <span className="partner-icon">🤲</span>

              <h3>For Volunteers</h3>

              <p>
                Use your gifts, experience, prayer, and compassion to help
                churches strengthen their ministries of encouragement.
              </p>

              <a className="button secondary-button" href="mailto:">
                Volunteer With Us
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section final-call-section">
        <div className="container final-call-inner">
          <div>
            <p className="eyebrow">Freely Given</p>

            <h2>
              Churches should not be priced out of caring for people.
            </h2>

            <p>
              Our desire is to provide the core Grace &amp; Hope Ministry
              platform free to churches through voluntary donations,
              partnerships, prayer, and faithful stewardship.
            </p>
          </div>

          <div className="final-call-actions">
            <a className="button gold-button" href="#partner">
              Join the Mission
            </a>

            <a className="text-link" href="#support">
              Learn about supporting the ministry →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
