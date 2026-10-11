# Privacy Policy – UNREP - Unlock Apps with Reps

**Last Updated: October 2026**

Your privacy is our top priority. This Privacy Policy explains how the App UNREP - Unlock Apps with Reps (hereinafter "the App") processes data and what your rights are.

---

## 1. Data Controller

Responsible for data processing in this App is:

**VAMIT UG (haftungsbeschränkt)**
Petersfeldstraße 16
46395 Bocholt
Germany

Managing Director: Veselin Kolev
Commercial Register: Amtsgericht Coesfeld, HRB 23796
Email: info@vam-it.com

---

## 2. Hosting of this Privacy Policy Page

This Privacy Policy is published on our App landing page (vamiapp.com), which is hosted via **GitHub Pages** (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). When you visit this page, your browser automatically transmits technical access data (IP address, browser type, date/time, requested URL) to GitHub's servers. GitHub is certified under the **EU-U.S. Data Privacy Framework (DPF)**, ensuring an adequate level of data protection pursuant to Art. 45 GDPR. Further information: https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement

---

## 3. Camera Usage & On-Device Processing (Privacy by Design)

The core feature of the App is counting your push-ups using your device's camera.

- **Type of Processing:** We use Apple's Vision Framework for real-time body pose estimation.
- **On-Device Only:** All camera data is processed locally on your device. No video or images are ever recorded, stored, or transmitted to any server.
- **No Storage or Transmission:** The visual data is discarded immediately after movement analysis is performed in the device's volatile memory (RAM).
- **Legal Basis:** Performance of a contract (Art. 6 (1) (b) GDPR) and your explicit consent when granting camera permissions (Art. 6 (1) (a) GDPR).

---

## 4. Analytics & App Improvement (PostHog)

We use PostHog to monitor app stability and improve features. You have full control over this via the *"Share anonymous usage data"* toggle in the App's Settings and the initial in-app consent screen.

- **Service Provider:** PostHog Inc., EU Cloud (server location: Frankfurt, Germany). Data remains within the European Economic Area (EEA) at all times. No analytics data is transferred to the United States.
- **IP Masking:** IP addresses and GeoIP location tracking are completely disabled/scrubbed on-device (`$ip: "0.0.0.0"`).
- **Toggle enabled (opted in):** If you consent to sharing usage data, we collect pseudonymous usage statistics (e.g. features used, session duration) linked to a persistent anonymous ID. This data cannot be used to identify you personally.
- **Toggle disabled (opted out):** If you disable *"Share anonymous usage data"* in Settings or decline the consent prompt, PostHog is fully deactivated. No analytics data leaves your device.
- **Retention:** Anonymous analytics data is retained for a maximum of 12 months, after which it is automatically deleted.
- **Legal Basis:** Consent (Art. 6 (1) (a) GDPR).

You can withdraw your consent at any time via the *"Share anonymous usage data"* toggle in the App's Settings.

---

## 5. In-App Purchases (RevenueCat)

We use RevenueCat to manage subscriptions and in-app purchases.

- **Data Processed:** Purchase history, subscription status, and a randomly generated anonymous App User ID. This ID is not linked to your name, email address, or Apple ID.
- **Payment Processing:** All actual payment details (credit card, Apple ID billing information) are processed exclusively by Apple and are never accessible to us or to RevenueCat.
- **Purpose:** Verifying purchases, managing subscription status, and unlocking premium features.
- **Data Sharing:** RevenueCat acts as our data processor for this purpose and does not use this data for advertising or share it with third parties for marketing purposes.
- **Legal Basis:** Performance of a contract (Art. 6 (1) (b) GDPR).

Further information: [RevenueCat Privacy Policy](https://www.revenuecat.com/privacy)

---

## 6. Health Data (Apple HealthKit)

The App integrates with Apple HealthKit to store your workout activity and to power the app-unlock reward feature.

Purpose: We write your push-up workouts (repetitions, duration, calories) to HealthKit so they appear in the Apple Health app. We also read relevant HealthKit data to automatically unlock apps you have blocked as a training incentive.

On-Device Only: All HealthKit data is read and written exclusively on your device via Apple's HealthKit framework. It is never transmitted to our servers, to PostHog, or to any other third party.

No Advertising Use: In accordance with Apple's Developer Program guidelines, HealthKit data is never used for advertising, marketing, or shared with data brokers.

Deletion: You can revoke HealthKit access at any time in iOS Settings → Privacy & Security → Health. Uninstalling the App does not delete data already written to Apple Health; this must be managed separately within the Health app.

Legal Basis: Performance of a contract (Art. 6 (1) (b) GDPR) and your explicit consent when granting HealthKit permissions (Art. 6 (1) (a) GDPR).

## 7. Family Controls / Screen Time (App Blocking Feature)

The App uses Apple's Family Controls framework (a restricted Apple API) to let you block distracting apps and "earn back" access to them by completing push-up workouts.

Purpose: Gamification — motivating consistent training by linking workout completion to temporary app access.

On-Device Only: All information about which apps you choose to block, for how long, and when they are unlocked is stored exclusively on your device (in a local App Group). This information never leaves your device and is never transmitted to our servers or any third party.

No Usage Monitoring: We do not receive any data about your general app usage, screen time, or which third-party apps are installed on your device.

Legal Basis: Your explicit consent when enabling the Screen Time feature (Art. 6 (1) (a) GDPR).

## 8. Local Data Storage (UserDefaults)

Your profile information (e.g. age, gender, weight) and workout statistics (e.g. push-up counts, personal records, goals) are stored locally on your device using iOS UserDefaults.

- This data never leaves your device and is never transmitted to our servers.
- The data is automatically and permanently deleted when you uninstall the App.

---

## 9. Data We Do Not Collect

- Names, email addresses, or any other directly identifying personal information
- Payment information (all purchases are handled exclusively by Apple)
- Location data
- Contact lists
- Video or images from the camera (processed on-device only, see Section 3)
- Health & fitness data or Screen Time/app-blocking data (processed on-device only, see Sections 6 and 7) — we never receive this data on our servers, even though the App requests permission to access it locally on your device

---

## 10. Your Rights

You have the following rights regarding your personal data:

- **Right of Access (Art. 15 GDPR):** You can request information about the data we hold. Given our Privacy by Design approach, this typically only includes an anonymous PostHog analytics ID.
- **Right to Erasure (Art. 17 GDPR):** You can delete all local data at any time using the "Delete All Data" button in the App's Settings, which permanently erases all local app data, resets your analytics ID, and signs you out of RevenueCat — restoring the App to its initial installation state. Alternatively, uninstalling the App achieves the same result.
- **Right to Withdraw Consent (Art. 7 (3) GDPR):** You can withdraw your consent to analytics at any time with effect for the future via the "Share anonymous usage data" toggle in the App's Settings.
- **Right to Object (Art. 21 GDPR):** You may object to processing based on legitimate interests at any time.
- **Right to Lodge a Complaint (Art. 77 GDPR):** You have the right to lodge a complaint with a supervisory authority. The competent authority for VAMIT UG is: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf, https://www.ldi.nrw.de

To exercise your rights, please contact us at: info@vam-it.com

---

## 11. Data Security

We follow a **Privacy by Design** approach:

- The most sensitive data (camera feed) is processed exclusively on-device and never transmitted to our servers.
- All network communication (e.g., PostHog analytics) is encrypted via TLS/SSL.
- This landing page is served exclusively over HTTPS.

---

## 12. Children's Privacy

This App is not directed at children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us at info@vam-it.com and we will delete it promptly.

---

## 13. Feedback (Featurebase)

Within the App, we provide a link to an external feedback platform ("Featurebase"), where you can submit feature requests and feedback anonymously, without registration or login. When you tap this link, you leave the App and are redirected to Featurebase's website in your device's browser. Any data you choose to enter there (e.g. feedback text) is processed directly by Featurebase, Inc., not by us. We do not receive, store, or have access to any data submitted on that platform. Please refer to Featurebase's own privacy policy for information on how they process data.

---

## 14. Advertising & Install Attribution (Meta / Apple SKAdNetwork)

We advertise the App on Facebook and Instagram (Meta Platforms Ireland Ltd.). To measure whether an installation resulted from one of our ads, we use Apple's SKAdNetwork framework. The App does not contain any Meta/Facebook SDK and does not access your advertising identifier (IDFA).

How it works: Attribution is determined by Apple on your device. Apple then sends a cryptographically signed, anonymous and aggregated notification to Meta, containing only the campaign and the fact that an installation occurred. No device identifiers, usage data, health data or other personal data from the App are transmitted to Meta or to us.

Display of ads: The display and targeting of ads on Facebook and Instagram is the sole responsibility of Meta. Please refer to Meta's privacy policy: https://www.facebook.com/privacy/policy

Legal Basis: To the extent personal data is processed at all, our legitimate interest in measuring the effectiveness of our advertising (Art. 6 (1) (f) GDPR).

---

## 15. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in the App or applicable law. The current version is always available at vamiapp.com/privacy. Material changes will be communicated via an in-app notice where required by law.

---

*VAMIT UG (haftungsbeschränkt) · Petersfeldstraße 16 · 46395 Bocholt · Germany*
