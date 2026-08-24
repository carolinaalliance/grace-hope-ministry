"use client";

import {
  FormEvent,
  useState,
} from "react";

const prayerCategories = [
  "Health and Healing",
  "Family",
  "Grief and Loss",
  "Salvation",
  "Caregiving",
  "Financial Need",
  "Church or Ministry",
  "Military or First Responders",
  "Homebound or Isolated",
  "Other",
];

export default function PrayerRequestPage() {
  const [submitted, setSubmitted] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitError, setSubmitError] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSubmitted(false);
    setSubmitError("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const followUpSelections =
      formData.getAll("followUp");

    const payload = {
      name: String(
        formData.get("name") || ""
      ).trim(),

      email: String(
        formData.get("email") || ""
      ).trim(),

      phone: String(
        formData.get("phone") || ""
      ).trim(),

      category: String(
        formData.get("category") || ""
      ),

      requestTitle: String(
        formData.get("requestTitle") || ""
      ).trim(),

      prayerRequest: String(
        formData.get("request") || ""
      ).trim(),

      visibility: String(
        formData.get("visibility") || ""
      ),

      followUpRequested:
        followUpSelections.includes("contact"),

      allowFutureUpdates:
        followUpSelections.includes("updates"),

      consentConfirmed:
        formData.get("consent") === "on",
    };

    try {
      const response = await fetch(
        "/api/prayer-requests",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to submit request."
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error(
        "Prayer submission failed:",
        error
      );

      setSubmitError(
        "We could not submit your prayer request. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      <section className="prayer-page-hero">
        <div className="container prayer-page-hero-inner">
          <p className="eyebrow light-eyebrow">
            Grace &amp; Hope Prayer Ministry
          </p>

          <h1>How may we pray for you?</h1>

          <p>
            Share your prayer request with Grace
            &amp; Hope Ministry. Every request
            should be handled with compassion,
            dignity, prayer, and appropriate
            confidentiality.
          </p>

          <blockquote>
            “Casting all your care upon him; for
            he careth for you.”
          </blockquote>

          <strong>1 Peter 5:7, KJV</strong>
        </div>
      </section>

      <section className="section prayer-intro-section">
        <div className="container prayer-intro-grid">
          <div>
            <p className="eyebrow">
              A Ministry of Prayer and Follow-Up
            </p>

            <h2>
              You do not have to carry your
              burden alone.
            </h2>

            <p className="large-copy">
              Whether you are facing illness,
              grief, isolation, family concerns,
              caregiving responsibilities, or
              another difficult season, we would
              be honored to pray with you.
            </p>

            <div className="prayer-guidelines">
              <div>
                <span>🙏</span>

                <div>
                  <h3>Prayerful Care</h3>

                  <p>
                    Requests should be reviewed
                    by approved ministry leaders
                    and prayer volunteers.
                  </p>
                </div>
              </div>

              <div>
                <span>🔒</span>

                <div>
                  <h3>Respectful Privacy</h3>

                  <p>
                    You may choose who is
                    permitted to view and pray
                    over your request.
                  </p>
                </div>
              </div>

              <div>
                <span>❤️</span>

                <div>
                  <h3>
                    Compassionate Follow-Up
                  </h3>

                  <p>
                    When requested, an authorized
                    ministry leader may contact
                    you for prayer or care
                    follow-up.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="prayer-emergency-card">
            <h3>Important</h3>

            <p>
              Grace &amp; Hope Ministry is not an
              emergency or crisis-response
              service.
            </p>

            <p>
              For an immediate medical or safety
              emergency, contact 911 or the
              appropriate emergency service in
              your area.
            </p>

            <p>
              For urgent pastoral care, contact
              your local church or pastor
              directly.
            </p>
          </aside>
        </div>
      </section>

      <section className="section prayer-form-section">
        <div className="container prayer-form-layout">
          <div className="prayer-form-copy">
            <p className="eyebrow">
              Submit a Prayer Request
            </p>

            <h2>
              Share only what you are comfortable
              sharing.
            </h2>

            <p>
              You may submit the request using
              your name or anonymously. Sensitive
              details should be limited to what
              is necessary for prayer and
              appropriate ministry care.
            </p>

            <div className="prayer-form-reminder">
              <strong>
                Daily Ministry Reminder
              </strong>

              <p>
                Every prayer request represents a
                real person, a real burden, and an
                opportunity to reflect the
                compassion of Christ.
              </p>
            </div>
          </div>

          <form
            className="prayer-request-form"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Optional if submitting anonymously"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Optional"
                />
              </div>

              <div className="form-field">
                <label htmlFor="category">
                  Prayer Category
                </label>

                <select
                  id="category"
                  name="category"
                  required
                >
                  <option value="">
                    Select a category
                  </option>

                  {prayerCategories.map(
                    (category) => (
                      <option
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="requestTitle">
                Prayer Request Title
              </label>

              <input
                id="requestTitle"
                name="requestTitle"
                type="text"
                placeholder="A brief title for the request"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="request">
                Prayer Request
              </label>

              <textarea
                id="request"
                name="request"
                placeholder="Please share how we may pray for you."
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="visibility">
                Who may view this prayer request?
              </label>

              <select
                id="visibility"
                name="visibility"
                required
              >
                <option value="">
                  Select a privacy level
                </option>

                <option value="pastor">
                  Authorized pastor or ministry
                  leader only
                </option>

                <option value="prayer-team">
                  Approved Grace &amp; Hope prayer
                  team
                </option>

                <option value="church-list">
                  Approved church prayer list
                </option>

                <option value="anonymous">
                  Share anonymously with approved
                  prayer volunteers
                </option>
              </select>
            </div>

            <fieldset className="form-field prayer-checkbox-group">
              <legend>
                Follow-Up Preferences
              </legend>

              <label>
                <input
                  type="checkbox"
                  name="followUp"
                  value="contact"
                />

                I would appreciate contact from
                an authorized ministry leader.
              </label>

              <label>
                <input
                  type="checkbox"
                  name="followUp"
                  value="updates"
                />

                I would like to provide future
                updates or answered-prayer
                testimony.
              </label>
            </fieldset>

            <label className="consent-checkbox">
              <input
                type="checkbox"
                name="consent"
                required
              />

              <span>
                I understand this form is for
                prayer and ministry follow-up and
                is not an emergency service.
              </span>
            </label>

            <button
              className="button gold-button prayer-submit-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting Prayer Request..."
                : "Submit Prayer Request"}
            </button>

            {submitted && (
              <div
                className="prayer-success-message"
                role="status"
              >
                <strong>
                  Your prayer request has been
                  received.
                </strong>

                <p>
                  Thank you for allowing Grace
                  &amp; Hope Ministry to pray with
                  you. Your request has been
                  submitted for ministry review.
                </p>
              </div>
            )}

            {submitError && (
              <div
                className="prayer-error-message"
                role="alert"
              >
                <strong>
                  We were unable to submit the
                  request.
                </strong>

                <p>{submitError}</p>
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="prayer-closing-section">
        <div className="container prayer-closing-inner">
          <p className="eyebrow light-eyebrow">
            Our Commitment
          </p>

          <h2>
            Prayer should lead to compassionate
            care.
          </h2>

          <p>
            Grace &amp; Hope Ministry is being
            built to help churches receive prayer
            needs, pray faithfully, follow up
            thoughtfully, and protect the dignity
            of each person.
          </p>

          <blockquote>
            “The effectual fervent prayer of a
            righteous man availeth much.”
          </blockquote>

          <strong>James 5:16, KJV</strong>
        </div>
      </section>
    </main>
  );
}
