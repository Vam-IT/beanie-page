import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Lock, Smartphone, Globe, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Privacy = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="container mx-auto px-6 py-28 max-w-4xl text-gray-200">
      {/* Back Link & Header */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}</span>
        </Link>

        {/* Language Switcher */}
        <div className="glass-ultra p-1 rounded-full border border-white/10 flex items-center gap-1">
          <button
            onClick={() => setLang('de')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              lang === 'de'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Deutsch (DE)
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              lang === 'en'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            English (EN)
          </button>
        </div>
      </div>

      {/* Main Privacy Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Summary Box */}
        <div className="mb-10 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h3 className="text-base font-bold text-white">
              {lang === 'de' ? 'Das Wichtigste auf einen Blick:' : 'Key Highlights:'}
            </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>
                {lang === 'de'
                  ? 'Alle Daten verbleiben zu 100% lokal auf deinen Geräten.'
                  : 'All data is stored exclusively locally on your devices.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>
                {lang === 'de'
                  ? 'Keine Server, keine Benutzerkonten, kein Cloud-Profil.'
                  : 'No external servers, no user accounts, no cloud profile.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>
                {lang === 'de'
                  ? 'Kein GPS-Tracking (Orts-Tags sind rein manuell).'
                  : 'No GPS tracking (location labels are strictly manual).'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>
                {lang === 'de'
                  ? 'Keine Analyse-SDKs, kein Meta-, Firebase- oder Werbetracking.'
                  : 'No analytics SDKs, no Meta, Firebase, or advertising tracking.'}
              </span>
            </li>
          </ul>
        </div>

        {lang === 'de' ? (
          /* ================= DEUTSCH ================= */
          <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                Datenschutzerklärung
              </h1>
              <p className="text-xs text-amber-400 font-medium">
                App: CupTrail (iOS &amp; watchOS) · Stand: Oktober 2026
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">1. Präambel &amp; Grundsatz</h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein zentrales Anliegen. Die App <strong>„CupTrail“</strong> (einschließlich der Widgets und der Begleit-App für die Apple Watch) folgt den Prinzipien von <strong>„Privacy by Design“</strong> und <strong>„Datensparsamkeit“</strong>.
              </p>
              <p>
                Sämtliche Daten (erfasste Kaffees, geschätzte Koffeinmengen, Tageslimits, Streaks und Erfahrungspunkte) werden <strong>ausschließlich lokal auf Ihren Endgeräten</strong> gespeichert. Wir betreiben keine eigenen Server, erheben keine Benutzerkonten und setzen keinerlei Analyse-, Tracking- oder Werbe-SDKs ein. Wir haben zu keinem Zeitpunkt Zugriff auf Ihre protokollierten Daten.
              </p>
            </section>

            <section className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/5">
              <h2 className="text-xl font-bold text-white">2. Verantwortlicher (Art. 4 Nr. 7 DSGVO)</h2>
              <p>Verantwortliche Stelle für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO):</p>
              <div className="text-white space-y-1">
                <p className="font-semibold">VAMIT UG (haftungsbeschränkt)</p>
                <p>Petersfeldstraße 16</p>
                <p>46395 Bocholt, Deutschland</p>
                <p className="pt-2"><strong className="text-gray-300">Vertreten durch die Geschäftsführung:</strong> Veselin Kolev</p>
                <p><strong className="text-gray-300">Handelsregister:</strong> Amtsgericht Coesfeld, HRB 23796</p>
                <p><strong className="text-gray-300">E-Mail für Datenschutz &amp; Support:</strong> <a href="mailto:info@vam-it.com" className="text-amber-400 hover:underline">info@vam-it.com</a></p>
                <p><strong className="text-gray-300">Website:</strong> <a href="https://vam-it.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">https://vam-it.com</a></p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">3. Datenverarbeitung innerhalb der App</h2>

              <div className="space-y-2">
                <h3 className="font-semibold text-amber-300">a) Kaffee- und Konsumprotokoll</h3>
                <p>
                  <strong>Erfasste Daten:</strong> Datum und Uhrzeit des Eintrags, gewählte Kaffeesorte (z. B. Espresso, Cappuccino, Flat White, Filterkaffee), Portionsgröße in Millilitern (ml) oder Unzen (oz), errechnete geschätzte Koffeinmenge in Milligramm (mg), manuell gewähltes Orts-Label („Home“, „Office“, „Cafe“) sowie optionale Notizen und Geschmacks-Tags.
                </p>
                <p>
                  <strong>Zweck:</strong> Berechnung der täglichen Koffeinsumme, Anzeige Ihres Verlaufs und Abgleich mit Ihrem gewählten Tageslimit.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. Bereitstellung der von Ihnen gewünschten App-Funktionen).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-amber-300">b) Zieleinstellungen &amp; App-Präferenzen</h3>
                <p>
                  <strong>Erfasste Daten:</strong> Persönliches tägliches Koffein-Limit (z. B. 400 mg Richtwert), Volumeneinheit („ml“ oder „oz“), Interface-Einstellungen (z. B. Dark Mode) und Onboarding-Status.
                </p>
                <p>
                  <strong>Zweck:</strong> Personalisierung der Berechnungen und optische Darstellung der App.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-amber-300">c) Gamification &amp; Errungenschaften</h3>
                <p>
                  <strong>Erfasste Daten:</strong> Zählerstände für Errungenschaften (z. B. Anzahl aufeinanderfolgender Tage / Streaks, erreichte Abzeichen, Level und gesammelte Erfahrungspunkte/XP mit Begleiter Bean).
                </p>
                <p>
                  <strong>Zweck:</strong> Bereitstellung der spielerischen Motivations- und Begleiterfunktionen.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <h3 className="font-semibold text-amber-200">d) Keine Standortdaten / Kein GPS-Tracking</h3>
                <p>
                  Sie können einzelnen Getränkeeinträgen Labels wie <strong>„Home“</strong>, <strong>„Office“</strong> oder <strong>„Cafe“</strong> zuordnen. Diese Labels sind <strong>keine Geodaten</strong>. Die App greift zu keinem Zeitpunkt auf Ortungsdienste (GPS, WLAN-Ortung oder Mobilfunkdaten) Ihres Geräts zu. Es handelt sich um eine rein manuelle Kategorieauswahl.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-amber-300">e) Lokale Benachrichtigungen</h3>
                <p>
                  <strong>Erfasste Daten:</strong> Berechtigungsstatus für Mitteilungen und gewählte morgendliche Erinnerungszeit (Standard: 09:00 Uhr).
                </p>
                <p>
                  <strong>Zweck:</strong> Lokaler Reminder am Morgen, um das Eintragen des ersten Kaffees zu erleichtern und Streaks aufrechtzuerhalten.
                </p>
                <p>
                  <strong>Wichtig:</strong> Benachrichtigungen werden <strong>rein lokal durch das iOS-Betriebssystem</strong> auf Ihrem Gerät ausgelöst. Es werden keine Push-Token oder Gerätekennungen an externe Server übermittelt.
                </p>
                <p>
                  <strong>Rechtsgrundlage:</strong> Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Die Berechtigung kann jederzeit in den iOS-Einstellungen widerrufen werden.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">4. Kontaktaufnahme per E-Mail / Support</h2>
              <p>
                Wenn Sie uns per E-Mail für Support oder Feedback kontaktieren, werden Ihre E-Mail-Adresse sowie die in der Nachricht übermittelten Angaben (z. B. Name, Problembeschreibung) bei uns gespeichert.
              </p>
              <p>
                <strong>Zweck &amp; Rechtsgrundlage:</strong> Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO bei vertraglichen Belangen bzw. Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an einer effektiven Nutzerbetreuung).
              </p>
              <p>
                <strong>Löschung:</strong> Die Daten werden gelöscht, sobald Ihre Anfrage abschließend geklärt ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">5. Speicherorte, Apple-Plattform &amp; Dritte</h2>
              <div className="space-y-2">
                <p>
                  <strong>a) Lokale Gerätespeicherung &amp; Widgets:</strong> Alle App-Daten werden in der geschützten Sandbox auf Ihrem Endgerät gespeichert. Um Widgets auf dem Home- und Sperrbildschirm sowie Watch-Komplikationen zu aktualisieren, werden Tagessummen in einem lokalen App-Group-Container (<code className="text-amber-300 font-mono">group.com.vamit.beanie</code>) abgelegt.
                </p>
                <p>
                  <strong>b) Apple als Plattform-Provider:</strong> Download, Installation und Updates erfolgen über den Apple App Store. Sofern Sie in den iOS-Einstellungen die Freigabe aktiviert haben („Mit App-Entwicklern teilen“), stellt Apple uns anonymisierte Absturz- und Nutzungsstatistiken zur Verfügung. Diese lassen keinen Rückschluss auf Ihre Person zu. Weitere Hinweise finden Sie in <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Apples Datenschutzrichtlinie</a>.
                </p>
                <p>
                  <strong>c) Apple Watch Synchronisation:</strong> Die Synchronisation zwischen iPhone und Apple Watch erfolgt direkt über den Apple-Systemdienst <code className="text-amber-300 font-mono">WatchConnectivity</code> zwischen Ihren gekoppelten Geräten. Wir erhalten dabei keinerlei Daten.
                </p>
                <p>
                  <strong>d) Keine Drittanbieter-Tracker oder Werbenetzwerke:</strong> CupTrail bindet keine externen Werbenetzwerke oder Tracking-SDKs (wie Google Firebase, Meta SDK o.ä.) ein.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">6. Speicherdauer &amp; Datenlöschung</h2>
              <p>
                Ihre Daten verbleiben auf Ihrem Gerät, bis Sie diese löschen oder die App deinstallieren.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li><strong>Einzelne Einträge löschen:</strong> Sie können jeden erfassten Kaffee direkt in der Historie löschen.</li>
                <li><strong>Vollständiges Zurücksetzen:</strong> In den Einstellungen können Sie über <em>„Reset All App Data“</em> sämtliche Einträge, Statistiken und Badges mit einem Tippen rückstandslos löschen.</li>
                <li><strong>Deinstallation:</strong> Beim Löschen der App vom Gerät werden alle lokalen Daten und Sandbox-Dateien durch iOS unwiderruflich gelöscht.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">7. Ihre Rechte nach der DSGVO</h2>
              <p>Sie haben nach der DSGVO folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können alle gespeicherten Daten direkt in der App einsehen.</li>
                <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können Limits und Präferenzen jederzeit in den Einstellungen anpassen.</li>
                <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Jederzeit möglich über „Reset All App Data“ oder App-Deinstallation.</li>
                <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong> sowie <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong>.</li>
                <li><strong>Widerruf von Einwilligungen (Art. 7 Abs. 3 DSGVO):</strong> Benachrichtigungsrechte können jederzeit in den iOS-Einstellungen widerrufen werden.</li>
              </ul>

              <div className="pt-3">
                <p className="font-semibold text-white">Zuständige Aufsichtsbehörde (Art. 77 DSGVO):</p>
                <p className="text-gray-300">
                  Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)<br />
                  Kavalleriestraße 2–4, 40213 Düsseldorf<br />
                  Telefon: 0211 / 38424-0 · Website: <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">https://www.ldi.nrw.de</a>
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">8. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Erklärung bei Funktionserweiterungen der App oder geänderten rechtlichen Vorgaben anzupassen. Die jeweils aktuelle Fassung ist stets in der App und auf dieser Website abrufbar.
              </p>
            </section>
          </div>
        ) : (
          /* ================= ENGLISH ================= */
          <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                Privacy Policy
              </h1>
              <p className="text-xs text-amber-400 font-medium">
                App: CupTrail (iOS &amp; watchOS) · As of: October 2026
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">1. Overview &amp; Privacy Principles</h2>
              <p>
                Protecting your personal data is a top priority for us. The <strong>„CupTrail“</strong> application (including its widgets and Apple Watch companion app) is built strictly following the principles of <strong>Privacy by Design</strong> and <strong>Data Minimization</strong>.
              </p>
              <p>
                All data (logged coffees, estimated caffeine amounts, daily limits, streaks, and XP) is stored <strong>exclusively locally on your devices</strong>. We run no remote servers, create no user accounts, and integrate no third-party analytics, tracking, or advertising SDKs. We never have access to your personal logging data.
              </p>
            </section>

            <section className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/5">
              <h2 className="text-xl font-bold text-white">2. Data Controller (Art. 4(7) GDPR)</h2>
              <p>The data controller responsible under the General Data Protection Regulation (GDPR) is:</p>
              <div className="text-white space-y-1">
                <p className="font-semibold">VAMIT UG (haftungsbeschränkt)</p>
                <p>Petersfeldstraße 16</p>
                <p>46395 Bocholt, Germany</p>
                <p className="pt-2"><strong className="text-gray-300">Managing Director:</strong> Veselin Kolev</p>
                <p><strong className="text-gray-300">Commercial Register:</strong> Local Court (Amtsgericht) Coesfeld, HRB 23796</p>
                <p><strong className="text-gray-300">Privacy &amp; Support Email:</strong> <a href="mailto:info@vam-it.com" className="text-amber-400 hover:underline">info@vam-it.com</a></p>
                <p><strong className="text-gray-300">Website:</strong> <a href="https://vam-it.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">https://vam-it.com</a></p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">3. Data Processing within the App</h2>

              <div className="space-y-2">
                <h3 className="font-semibold text-amber-300">a) Coffee &amp; Caffeine Consumption History</h3>
                <p>
                  <strong>Data processed:</strong> Timestamp of entry, selected coffee type (e.g. Espresso, Flat White, Cappuccino), volume in milliliters (ml) or ounces (oz), calculated estimated caffeine amount in milligrams (mg), manually selected location category ("Home", "Office", "Cafe"), and optional notes/tags.
                </p>
                <p>
                  <strong>Purpose:</strong> Calculating your daily caffeine total, charting your daily/weekly progress, and monitoring your personal daily limit.
                </p>
                <p>
                  <strong>Legal Basis:</strong> Art. 6(1)(b) GDPR (Performance of contract / providing requested app functionality).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-amber-300">b) Target Settings &amp; App Preferences</h3>
                <p>
                  <strong>Data processed:</strong> Personal daily caffeine limit (e.g. 400 mg reference limit), volume measurement unit ("ml" or "oz"), interface preferences (dark mode), and onboarding completion status.
                </p>
                <p>
                  <strong>Purpose:</strong> Personalizing caffeine calculations and customizing the visual interface.
                </p>
                <p>
                  <strong>Legal Basis:</strong> Art. 6(1)(b) GDPR.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-amber-300">c) Gamification &amp; Achievements</h3>
                <p>
                  <strong>Data processed:</strong> Counters for achievement badges (e.g. daily streaks, unlocked milestones, levels, and earned XP with mascot Bean).
                </p>
                <p>
                  <strong>Purpose:</strong> Providing interactive motivational mechanics within the app.
                </p>
                <p>
                  <strong>Legal Basis:</strong> Art. 6(1)(b) GDPR.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <h3 className="font-semibold text-amber-200">d) No GPS / Geographic Location Tracking</h3>
                <p>
                  You can categorize individual brews using labels such as <strong>"Home"</strong>, <strong>"Office"</strong>, or <strong>"Cafe"</strong>. These labels are <strong>not location data</strong>. The app never accesses device location services (GPS, Wi-Fi, or cellular networks) and collects no geographic coordinates. It is solely a manually selected categorical tag.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-amber-300">e) Local Notifications</h3>
                <p>
                  <strong>Data processed:</strong> Notification permission status and preferred morning reminder time (default: 09:00 AM).
                </p>
                <p>
                  <strong>Purpose:</strong> Local morning reminder to log your first brew and maintain your streak.
                </p>
                <p>
                  <strong>Important:</strong> Notifications are triggered <strong>entirely locally on your device</strong> by the operating system. No device tokens or push data are sent to external servers.
                </p>
                <p>
                  <strong>Legal Basis:</strong> Art. 6(1)(a) GDPR (Consent granted via native system dialog). Permissions may be withdrawn at any time in iOS Settings.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">4. Contacting Support via Email</h2>
              <p>
                When you contact us via email for support or feedback, your email address and any information you provide are stored by us to handle your inquiry.
              </p>
              <p>
                <strong>Purpose &amp; Legal Basis:</strong> Handling your inquiry (Art. 6(1)(b) GDPR or Art. 6(1)(f) GDPR for legitimate interest in providing reliable support).
              </p>
              <p>
                <strong>Retention:</strong> Your inquiry data is deleted once the matter has been conclusively resolved.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">5. Storage Locations, Apple Platform &amp; Third Parties</h2>
              <div className="space-y-2">
                <p>
                  <strong>a) Local Storage &amp; Widgets:</strong> All data is stored in the sandboxed, private storage on your device. To provide iOS Widgets and Apple Watch complication updates, current totals are stored in a local, app-group container (<code className="text-amber-300 font-mono">group.com.vamit.beanie</code>).
                </p>
                <p>
                  <strong>b) Apple as Platform Provider:</strong> The distribution and updates are handled through Apple's App Store. If enabled in your iOS Settings ("Share with App Developers"), Apple may provide us with anonymized crash logs. Refer to <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Apple's Privacy Policy</a> for more details.
                </p>
                <p>
                  <strong>c) Apple Watch Synchronization:</strong> Synchronization is performed via Apple's native <code className="text-amber-300 font-mono">WatchConnectivity</code> system service between your paired devices. We receive no data.
                </p>
                <p>
                  <strong>d) No Third-Party Analytics, Advertising, or Tracking:</strong> CupTrail does not integrate any advertising networks, third-party analytics services, or social media tracking libraries.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">6. Data Retention &amp; Deletion</h2>
              <p>Your data remains stored locally on your device until you choose to delete it or uninstall the app.</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li><strong>Deleting Single Entries:</strong> Remove individual coffee logs directly from your history view.</li>
                <li><strong>Full Reset:</strong> In Settings, tapping <em>"Reset All App Data"</em> permanently and immediately deletes all logged entries, statistics, and badges.</li>
                <li><strong>Uninstalling:</strong> Deleting the app removes all sandboxed files and local data from your device.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">7. Your Rights under the GDPR</h2>
              <p>Under European data protection law, you have the following rights:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Access (Art. 15 GDPR):</strong> View all stored data directly within the app.</li>
                <li><strong>Rectification (Art. 16 GDPR):</strong> Correct or update your presets and limits in Settings.</li>
                <li><strong>Erasure (Art. 17 GDPR):</strong> Delete all data via "Reset All App Data" or app removal.</li>
                <li><strong>Restriction of Processing (Art. 18 GDPR)</strong> and <strong>Data Portability (Art. 20 GDPR)</strong>.</li>
                <li><strong>Withdrawal of Consent (Art. 7(3) GDPR):</strong> Revoke notification permissions anytime in iOS Settings.</li>
              </ul>

              <div className="pt-3">
                <p className="font-semibold text-white">Supervisory Authority (Art. 77 GDPR):</p>
                <p className="text-gray-300">
                  Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)<br />
                  Kavalleriestraße 2–4, 40213 Düsseldorf, Germany<br />
                  Phone: +49 (0)211 38424-0 · Website: <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">https://www.ldi.nrw.de</a>
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">8. Changes to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The latest version will always remain accessible within the app and on this website.
              </p>
            </section>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Privacy;
