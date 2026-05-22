import { useState } from "react";
import {
  Building2, FlaskConical, ShoppingCart, Truck, UtensilsCrossed,
  ArrowRight, ArrowUpRight, CheckCircle2, X
} from "lucide-react";

interface Industry {
  icon: React.ElementType;
  title: string;
  desc: string;
  img: string;
  features: string[];
  projects: { name: string; loc: string; temp: string; cap: string }[];
  cta: string;
  reverse?: boolean;
}

const industries: Industry[] = [
  {
    icon: UtensilsCrossed,
    title: "Industria Alimentaria",
    desc: "Plantas procesadoras, túneles de congelación rápida y almacenamiento en frío de producto terminado con diseño higiénico estricto.",
    img: "/images/cold-room.jpg",
    features: [
      "Diseño higiénico certificado (HACCP / BPM)",
      "Túneles de congelación rápida IQF hasta −40°C",
      "Almacenes de producto terminado multi-zona",
      "Sistemas de lavado y desinfección integrados",
      "Trazabilidad de temperatura en tiempo real",
      "Certificación NOM-251 y FDA Ready",
    ],
    projects: [
      { name: "Planta procesadora de aves", loc: "Guadalajara · 2024", temp: "−25°C", cap: "4,200 m³" },
      { name: "Almacén de producto terminado", loc: "CDMX · 2023", temp: "−18°C", cap: "6,800 m³" },
    ],
    cta: "Cotiza tu planta alimentaria",
  },
  {
    icon: FlaskConical,
    title: "Farmacéutica",
    desc: "Control de temperatura y humedad compatible con BPM para vacunas, biológicos e ingredientes activos.",
    img: "/images/engineer.jpg",
    features: [
      "Cuartos fríos GMP certificados",
      "Control de temperatura ±0.5°C",
      "Monitoreo continuo con alarmas 24/7",
      "Registro de datos validado (CFR 21 Part 11)",
      "Segregación por rangos: 2–8°C / −20°C / −80°C",
      "Calificación IQ/OQ/PQ disponible",
    ],
    projects: [
      { name: "Cuarto limpio farmacéutico", loc: "CDMX · 2023", temp: "+2 / +8°C", cap: "1,200 m³" },
      { name: "Cámara de vacunas", loc: "Monterrey · 2022", temp: "−20°C", cap: "800 m³" },
    ],
    cta: "Cotiza tu solución farmacéutica",
    reverse: true,
  },
  {
    icon: Truck,
    title: "Logística",
    desc: "Centros de distribución multizona, andenes refrigerados e instalaciones de cross-docking diseñados para alto rendimiento.",
    img: "/images/warehouse.jpg",
    features: [
      "Plantas centrales de amoniaco o CO₂",
      "Multi-zona: congelado, refrigerado y fresco",
      "Andenes refrigerados con cortinas de aire",
      "SCADA con integración WMS/ERP",
      "Sistemas de rack y mezzanine frigorífico",
      "Diseño para operaciones 24/7",
    ],
    projects: [
      { name: "Hub de distribución en frío", loc: "Querétaro · 2024", temp: "−25°C", cap: "8,400 m³" },
      { name: "Centro logístico multizona", loc: "Monterrey · 2023", temp: "−25 / +4°C", cap: "12,000 m³" },
    ],
    cta: "Diseña tu centro de distribución",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes y HORECA",
    desc: "Paquetes de refrigeración comercial para cadenas HORECA con servicio rápido e instalaciones estandarizadas.",
    img: "/images/pipes.jpg",
    features: [
      "Cámaras walk-in y reach-in a medida",
      "Instalación en 24–48 horas por sitio",
      "Rollout para cadenas (10–500 tiendas)",
      "Contrato de mantenimiento único por red",
      "Monitoreo remoto centralizado",
      "Equipos de bajo ruido para áreas de servicio",
    ],
    projects: [
      { name: "Despliegue cadena de restaurantes", loc: "Nacional · 2024", temp: "0 / +4°C", cap: "68 locales" },
      { name: "Dark kitchen industrial", loc: "CDMX · 2023", temp: "−18 / +4°C", cap: "850 m²" },
    ],
    cta: "Cotiza tu cadena HORECA",
    reverse: true,
  },
  {
    icon: ShoppingCart,
    title: "Supermercados",
    desc: "Sistemas de exhibición, cámaras de backroom y refrigeración transcrítica con CO₂ de bajo GWP.",
    img: "/images/cold-room.jpg",
    features: [
      "Sistemas transcríticos CO₂ para bajo GWP",
      "Muebles exhibidores multideck y island",
      "Cuartos fríos de backroom integrados",
      "Control centralizado por tienda",
      "Rollout para cadenas retail",
      "Cumplimiento F-Gas y refrigerantes naturales",
    ],
    projects: [
      { name: "Cadena de supermercados", loc: "Nacional · 2024", temp: "−25 / +4°C", cap: "42 tiendas" },
      { name: "Hipermercado ancla", loc: "Puebla · 2023", temp: "−30 / +8°C", cap: "3,400 m²" },
    ],
    cta: "Diseña tu refrigeración retail",
  },
  {
    icon: Building2,
    title: "Centros de Distribución",
    desc: "Almacenamiento en frío multizona a gran escala con plantas centrales de amoniaco o CO₂ y monitoreo SCADA.",
    img: "/images/warehouse.jpg",
    features: [
      "Plantas de amoniaco hasta 5 MW",
      "Racks de compresión centralizados",
      "Automatización SCADA completa",
      "Integración con sistemas WMS",
      "Diseño sismorresistente",
      "Energía fotovoltaica + recuperación de calor",
    ],
    projects: [
      { name: "Retrofit planta de amoniaco", loc: "Monterrey · 2023", temp: "−30°C", cap: "5 MW" },
      { name: "Centro de distribución nacional", loc: "Querétaro · 2024", temp: "−18°C", cap: "18,000 m³" },
    ],
    cta: "Planea tu centro de distribución",
    reverse: true,
  },
];

function IndustryModal({ industry, onClose }: { industry: Industry; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <img src={industry.img} alt={industry.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.05_240)/80%] to-transparent" />
          <div className="absolute bottom-5 left-6 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-ice">
              <industry.icon className="h-5 w-5 text-white" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white">{industry.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-8">
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{industry.desc}</p>

          <h3 className="font-display text-lg font-semibold text-foreground mb-4">Capacidades clave</h3>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {industry.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-ice shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>

          <h3 className="font-display text-lg font-semibold text-foreground mb-4">Proyectos recientes</h3>
          <div className="space-y-3 mb-8">
            {industry.projects.map((p) => (
              <div key={p.name} className="flex items-center justify-between rounded-xl border border-border p-4 bg-muted/40">
                <div>
                  <div className="font-medium text-foreground text-sm">{p.name}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-0.5">{p.loc}</div>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs font-mono px-2 py-1 rounded-full bg-ice/10 text-ice border border-ice/20">{p.temp}</span>
                  <span className="text-xs font-mono px-2 py-1 rounded-full bg-ice/10 text-ice border border-ice/20">{p.cap}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gradient-ice text-white font-medium shadow-glow hover:opacity-90 transition w-full justify-center"
          >
            {industry.cta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesInteractive() {
  const [selected, setSelected] = useState<Industry | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 space-y-8">
        {industries.map((ind, i) => (
          <div
            key={ind.title}
            className={`grid lg:grid-cols-2 gap-8 items-center ${ind.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            {/* Image */}
            <div
              className="relative h-80 rounded-2xl overflow-hidden border border-border group cursor-pointer"
              onClick={() => setSelected(ind)}
            >
              <img
                src={ind.img}
                alt={ind.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.16_0.05_240)/60%] to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-strong rounded-xl px-4 py-3 flex items-center justify-between">
                  <span className="text-sm text-white/80 font-mono">{ind.projects.length} proyectos recientes</span>
                  <span className="text-xs text-ice flex items-center gap-1 font-mono uppercase tracking-wider">
                    Ver detalles <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="p-4 lg:p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ice/10 border border-ice/20 mb-5">
                <ind.icon className="h-5 w-5 text-ice" />
              </div>
              <h2 className="font-display text-3xl font-bold mb-3 text-foreground">{ind.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{ind.desc}</p>

              <ul className="space-y-2 mb-6">
                {ind.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-ice shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelected(ind)}
                className="inline-flex items-center gap-2 text-ice font-medium hover:gap-3 transition-all text-sm"
              >
                Ver casos de estudio <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <IndustryModal industry={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
