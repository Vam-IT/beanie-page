import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Terms = () => {
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

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Health Disclaimer Callout Box */}
        <div className="mb-10 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <h3 className="text-base font-bold text-white">
              {lang === 'de'
                ? 'Wichtiger Gesundheitshinweis (Kein Medizinprodukt):'
                : 'Critical Health Notice (Not a Medical Device):'}
            </h3>
          </div>
          <p className="text-xs text-amber-200/90 leading-relaxed font-light">
            {lang === 'de'
              ? 'Beanie ist kein Medizinprodukt und bietet keine medizinische oder therapeutische Diagnostik. Alle Koffeinmengen und Grenzwerte sind reine Orientierungs- und Schätzwerte. Bei gesundheitlichen Beschwerden oder Fragen zu Ihrem Koffeinkonsum konsultieren Sie stets qualifiziertes medizinisches Fachpersonal.'
              : 'Beanie is not a medical device and provides no medical or diagnostic advice. All caffeine numbers and limits are estimations and general guidance. Always consult a qualified medical professional regarding individual caffeine sensitivity or health conditions.'}
          </p>
        </div>

        {lang === 'de' ? (
          /* ================= DEUTSCH ================= */
          <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                Nutzungsbedingungen (Terms of Use)
              </h1>
              <p className="text-xs text-amber-400 font-medium">
                App: Beanie (iOS &amp; watchOS) · Stand: Oktober 2026
              </p>
            </div>

            <section className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/5">
              <h2 className="text-xl font-bold text-white">1. Geltungsbereich &amp; Anbieter</h2>
              <p>
                Diese Nutzungsbedingungen gelten für die Nutzung der iOS- und watchOS-Applikation <strong>„Beanie“</strong> (einschließlich Widgets und Begleit-Apps) der:
              </p>
              <div className="text-white space-y-1">
                <p className="font-semibold">VAMIT UG (haftungsbeschränkt)</p>
                <p>Petersfeldstraße 16</p>
                <p>46395 Bocholt, Deutschland</p>
                <p className="pt-2"><strong className="text-gray-300">Vertreten durch die Geschäftsführung:</strong> Veselin Kolev</p>
                <p><strong className="text-gray-300">Handelsregister:</strong> Amtsgericht Coesfeld, HRB 23796</p>
                <p><strong className="text-gray-300">Support-E-Mail:</strong> <a href="mailto:info@vam-it.com" className="text-amber-400 hover:underline">info@vam-it.com</a></p>
              </div>
              <p className="pt-2">
                Die Nutzung der App unterliegt den Bestimmungen des Standard-Endbenutzer-Lizenzvertrags für lizenzierte Anwendungen von Apple (<em>Apple Standard EULA / Licensed Application End User License Agreement</em>). Die vorliegenden Nutzungsbedingungen dienen als produktspezifische <strong>Ergänzung zur Apple Standard EULA</strong>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">2. Wesentlicher Gesundheitshinweis (Keine medizinische Beratung)</h2>
              <div className="space-y-3">
                <p>
                  <strong>1. Schätzwerte &amp; Orientierung:</strong> Alle in der App angezeigten Koffeingehalte, Tagessummen und Standard-Tageslimits (z. B. der Richtwert von 400 mg Koffein pro Tag für gesunde Erwachsene) beruhen auf allgemeinen publizierten Durchschnittswerten. Die App summiert lediglich die von Ihnen erfassten Getränkemengen auf. Es gibt <strong>keine biologische Abbaukurve, keine Halbwertszeitberechnung und keine medizinische Diagnostik</strong>. Der tatsächliche Koffeingehalt eines Heißgetränks variiert in der Realität erheblich je nach Bohnenart (Arabica vs. Robusta), Röstgrad, Mahlgrad, Brühdauer, Extraktion und Portionsgröße.
                </p>
                <p>
                  <strong>2. Individuelle Unterschiede:</strong> Die individuelle Koffeintoleranz und gesundheitliche Verträglichkeit hängen von zahlreichen biologischen Faktoren ab (u. a. Körpergewicht, Genetik, Alter, Leberstoffwechsel, Einnahme von Medikamenten).
                </p>
                <p>
                  <strong>3. Ärztlicher Rat:</strong> Bei Schwangerschaft, in der Stillzeit, bei Herz-Kreislauf-Erkrankungen, Bluthochdruck, Herzrhythmusstörungen, Schlafstörungen, Angstzuständen oder sonstigen gesundheitlichen Einschränkungen sollten Sie Ihren Koffeinkonsum stets mit einer qualifizierten Ärztin oder einem qualifizierten Arzt abstimmen.
                </p>
                <p>
                  <strong>4. Keine Haftung für Überkonsum:</strong> Die App schützt Sie nicht vor den physischen oder psychischen Folgen eines übermäßigen Koffeinkonsums. Hören Sie stets auf Ihren eigenen Körper und gesundheitliche Warnsignale.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">3. Leistungsbeschreibung &amp; Nutzung der App</h2>
              <p>
                Beanie ist ein persönliches Kaffee- und Koffein-Tagebuch mit Gamification-Elementen (Begleiter „Bean“, Streaks, Level und Errungenschaften).
              </p>
              <p>
                Die Datenverarbeitung erfolgt rein lokal auf Ihren persönlichen Endgeräten. Der Anbieter bemüht sich um eine kontinuierliche Verfügbarkeit und Fehlerfreiheit der App, übernimmt jedoch keine Garantie für die ununterbrochene Funktionsfähigkeit auf allen Betriebssystemversionen oder Hardware-Kombinationen.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">4. Gamification-Elemente (XP, Streaks, Abzeichen)</h2>
              <p>
                Alle in der App enthaltenen Erfahrungspunkte (XP), Tages-Streaks, Level-Titel und Abzeichen (Badges) sind rein virtuelle spielerische Motivationselemente.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sie besitzen <strong>keinen monetären oder wirtschaftlichen Gegenwert</strong> und begründen keine realen Vermögenswerte.</li>
                <li>Sie können weder ausgezahlt, umgetauscht noch auf Dritte übertragen werden.</li>
                <li>Es besteht <strong>kein Rechtsanspruch</strong> auf das dauerhafte Bestehen, die Wiederherstellung oder den Erhalt von virtuellen Punkteständen oder Streaks (z. B. im Fall von Datenverlust, App-Zurücksetzung oder Gerätewechsel).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">5. In-App-Käufe &amp; Abonnements</h2>
              <p>
                Die aktuelle Version von Beanie enthält <strong>keine In-App-Käufe, keine Abonnements und keine Bezahlschranken</strong>. Die App ist aktuell kostenlos im Apple App Store erhältlich.
              </p>
              <p>
                Sollten zukünftig optionale kostenpflichtige Erweiterungen eingeführt werden, erfolgt deren Abwicklung transparent über den Apple App Store gemäß den Richtlinien von Apple.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">6. Geistiges Eigentum</h2>
              <p>
                Sämtliche Marken, Logos, Grafiken, Designs (einschließlich des Charakters und Maskottchens „Bean“), Soundeffekte und Softwarecodes der App sind urheberrechtlich geschützt und stehen im ausschließlichen Eigentum der VAMIT UG (haftungsbeschränkt) bzw. ihrer Lizenzgeber.
              </p>
              <p>
                Nutzer erhalten ein einfaches, nicht-exklusives, nicht übertragbares und widerrufliches Recht zur bestimmungsgemäßen privaten Nutzung der App auf ihren persönlichen Geräten.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">7. Haftungsbeschränkung</h2>
              <div className="space-y-2">
                <p>
                  <strong>1. Unbeschränkte Haftung:</strong> Die VAMIT UG haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen, sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen, sowie nach den Vorschriften des Produkthaftungsgesetzes.
                </p>
                <p>
                  <strong>2. Leichte Fahrlässigkeit:</strong> Bei einfacher oder leichter Fahrlässigkeit haftet der Anbieter nur bei der Verletzung wesentlicher Vertragspflichten (Kardinalpflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Nutzer regelmäßig vertrauen darf). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
                </p>
                <p>
                  <strong>3. Ausschluss im Übrigen:</strong> Im Übrigen ist die Haftung des Anbieters ausgeschlossen. Dies gilt insbesondere für Schäden, die dadurch entstehen, dass der Nutzer die in der App errechneten Werte als verbindlich erachtet hat oder Warnsignale des eigenen Körpers missachtet wurden.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">8. Schlussbestimmungen</h2>
              <p>
                <strong>Anwendbares Recht:</strong> Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG). Zwingende Verbraucherschutzvorschriften des Staates, in dem der Nutzer seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.
              </p>
              <p>
                <strong>Gerichtsstand:</strong> Sofern der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, ist Gerichtsstand der Sitz des Anbieters (Bocholt / zuständiges Amtsgericht).
              </p>
              <p>
                <strong>Änderungen:</strong> Der Anbieter behält sich vor, diese Bedingungen anzupassen, wenn dies durch Funktionsänderungen der App, Gesetzesänderungen oder gerichtliche Entscheidungen erforderlich wird.
              </p>
            </section>
          </div>
        ) : (
          /* ================= ENGLISH ================= */
          <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                Terms of Use
              </h1>
              <p className="text-xs text-amber-400 font-medium">
                App: Beanie (iOS &amp; watchOS) · As of: October 2026
              </p>
            </div>

            <section className="space-y-3 p-5 rounded-2xl bg-white/5 border border-white/5">
              <h2 className="text-xl font-bold text-white">1. Scope &amp; Provider</h2>
              <p>
                These Terms of Use govern the use of the iOS and watchOS application <strong>„Beanie“</strong> (including its widgets and complications), provided by:
              </p>
              <div className="text-white space-y-1">
                <p className="font-semibold">VAMIT UG (haftungsbeschränkt)</p>
                <p>Petersfeldstraße 16</p>
                <p>46395 Bocholt, Germany</p>
                <p className="pt-2"><strong className="text-gray-300">Managing Director:</strong> Veselin Kolev</p>
                <p><strong className="text-gray-300">Commercial Register:</strong> Local Court (Amtsgericht) Coesfeld, HRB 23796</p>
                <p><strong className="text-gray-300">Support Email:</strong> <a href="mailto:info@vam-it.com" className="text-amber-400 hover:underline">info@vam-it.com</a></p>
              </div>
              <p className="pt-2">
                Use of the application is governed by the <em>Apple Standard Licensed Application End User License Agreement (Standard EULA)</em>. These Terms of Use serve as product-specific supplementary terms to the Apple Standard EULA.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white">2. Critical Health Notice (No Medical Advice)</h2>
              <div className="space-y-3">
                <p>
                  <strong>1. Approximations &amp; Guidance Only:</strong> All caffeine estimates, daily totals, and default daily limits (such as the standard 400 mg daily reference) are based on general published scientific averages. The app simply sums up your logged beverage intake. There is <strong>no biological decay curve, no half-life calculation, and no clinical diagnostics</strong>. The actual caffeine concentration in any prepared beverage varies significantly depending on bean origin, roast level, grind size, brewing time, and extraction method.
                </p>
                <p>
                  <strong>2. Individual Variability:</strong> Biological responses to caffeine depend on weight, age, genetic metabolic rates, liver enzyme activity, medications, and individual sensitivity.
                </p>
                <p>
                  <strong>3. Seek Medical Counsel:</strong> If you are pregnant, nursing, have cardiovascular conditions, high blood pressure, arrhythmias, anxiety disorders, or other medical concerns, always consult a qualified healthcare professional regarding your daily caffeine intake.
                </p>
                <p>
                  <strong>4. No Liability for Overconsumption:</strong> The application cannot prevent adverse physical reactions resulting from excessive caffeine consumption. Always pay attention to your own physical symptoms and limits.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">3. Description of Services</h2>
              <p>
                Beanie serves as a personal coffee logging and caffeine tracking tool with interactive mascot companion features.
              </p>
              <p>
                All core calculations and storage operate entirely locally on your Apple device. While we strive for high stability and reliability, we do not warrant that the application will be uninterrupted or error-free at all times.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">4. Gamification (XP, Streaks, Badges)</h2>
              <p>
                All experience points (XP), daily streaks, levels, and achievement badges are purely virtual motivational mechanics.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>They possess <strong>no real-world monetary value</strong>, represent no financial assets, and cannot be redeemed, sold, or transferred.</li>
                <li>You have no legal claim to the permanent preservation or restoration of streaks or virtual badges (e.g. following data resets or device replacements).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">5. In-App Purchases &amp; Subscriptions</h2>
              <p>
                The current version of Beanie contains <strong>no in-app purchases, paid subscriptions, or paywalls</strong>.
              </p>
              <p>
                If premium extensions are introduced in future releases, they will be processed directly through Apple's In-App Purchase system under Apple's App Store terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">6. Intellectual Property</h2>
              <p>
                All trademarks, copyrights, visual designs, illustrations (including the mascot "Bean"), sound effects, and software code are the exclusive property of VAMIT UG (haftungsbeschränkt) or its licensors.
              </p>
              <p>
                Users are granted a limited, revocable, non-exclusive, non-transferable license to use the app for personal, non-commercial purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">7. Limitation of Liability</h2>
              <div className="space-y-2">
                <p>
                  <strong>1. Uncapped Liability:</strong> The provider is liable without limitation for intent, gross negligence, bodily injury, death, and claims under mandatory product liability legislation.
                </p>
                <p>
                  <strong>2. Slight Negligence:</strong> In cases of slight negligence, the provider is liable only for breach of material contractual obligations (<em>Kardinalpflichten</em>). In such instances, liability is strictly limited to typically foreseeable damages.
                </p>
                <p>
                  <strong>3. Exclusion:</strong> Any further liability is excluded, in particular for damages arising from reliance on estimated caffeine calculations or disregard of personal physical tolerance limits.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">8. Governing Law &amp; Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).
              </p>
              <p>
                Mandatory statutory consumer protection rights under the laws of your country of residence remain unaffected.
              </p>
              <p>
                The provider reserves the right to amend these terms to reflect feature updates, legal changes, or technical requirements.
              </p>
            </section>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Terms;
