import { motion } from 'framer-motion';

const Imprint = () => {
  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-effect p-8 rounded-2xl"
      >
        <h1 className="text-4xl font-bold text-gradient mb-8">Impressum</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              VAMIT UG (haftungsbeschränkt)<br />
              Petersfeldstraße 16<br />
              46395 Bocholt
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Handelsregister</h2>
            <p className="leading-relaxed">
              Handelsregister B des Amtsgerichts Coesfeld<br />
              HRB 23796
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Vertreten durch</h2>
            <p className="leading-relaxed">
              Geschäftsführer: Kolev, Veselin
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Kontakt</h2>
            <p className="leading-relaxed">
              E-Mail: <a href="mailto:info@vam-it.com" className="text-vami-primary hover:text-orange-400 transition-colors">info@vam-it.com</a><br />
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Imprint;
