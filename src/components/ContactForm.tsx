import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-ice transition"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: typeof Phone; title: string; lines: string[] }) {
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ice/10 border border-ice/20">
          <Icon className="h-5 w-5 text-ice" />
        </div>
        <div className="font-display font-semibold">{title}</div>
      </div>
      <div className="mt-2 space-y-1">
        {lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3 glass-strong rounded-2xl p-8 md:p-10">
          {sent ? (
            <div className="py-20 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-ice shadow-glow mb-5">
                <Send className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold">Mensaje enviado</h3>
              <p className="mt-3 text-muted-foreground">Un ingeniero se pondrá en contacto en 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
              <h3 className="font-display text-2xl font-bold mb-2">Solicitar cotización</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nombre completo" name="name" />
                <Field label="Empresa" name="company" />
                <Field label="Correo electrónico" name="email" type="email" />
                <Field label="Teléfono" name="phone" type="tel" />
              </div>
              <Field label="Ubicación del proyecto" name="location" />
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-ice transition"
                  placeholder="Dimensiones de la cámara, rango de temperatura, cronograma..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gradient-ice text-white font-medium shadow-glow hover:opacity-90 transition"
              >
                Enviar mensaje <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="lg:col-span-2 space-y-4">
          <InfoCard icon={Phone} title="Teléfono" lines={["+52 (55) 1234 5678", "Emergencias 24/7"]} />
          <InfoCard icon={Mail} title="Correo" lines={["info@smr.engineering", "engineering@smr.engineering"]} />
          <InfoCard icon={MapPin} title="Cobertura" lines={["Nacional — México", "Sede: Querétaro"]} />
          <a
            href="https://wa.me/525512345678"
            className="block glass-strong rounded-2xl p-6 hover:border-ice/40 transition"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ice/10 border border-ice/20">
                <MessageCircle className="h-5 w-5 text-ice" />
              </div>
              <div>
                <div className="font-display font-semibold">WhatsApp</div>
                <div className="text-xs text-muted-foreground">Respuesta más rápida</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Toca para chatear directamente con nuestro equipo →</p>
          </a>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="mx-auto max-w-7xl px-6 mt-12">
        <div className="relative h-80 rounded-2xl border border-border overflow-hidden grid-blueprint">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-ice shadow-glow animate-pulse-glow">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <p className="mt-4 font-display text-xl font-semibold">Red de servicio en México</p>
              <p className="text-sm text-muted-foreground">Querétaro · CDMX · Monterrey · Guadalajara · +20 ciudades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
