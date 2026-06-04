import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Star,
  Leaf,
  Zap,
  Wind,
  Scissors,
  Droplets,
  ArrowRight,
  Plus,
} from "lucide-react";

type Service = {
  title: string;
  price: string;
  addOn?: string;
  icon: React.ElementType;
};

type Category = {
  label: string;
  description: string;
  services: Service[];
};

const categories: Category[] = [
  {
    label: "Facials",
    description:
      "Personalized treatments designed to cleanse, treat, and revitalize your skin using medical-grade products.",
    services: [
      { title: "Facial Esencial", price: "$100", addOn: "+ Ampoule", icon: Sparkles },
      { title: "Plasma Acne Facial", price: "$115", addOn: "+ Ampoule", icon: Zap },
      { title: "Hydrafacial", price: "$150", addOn: "+ Ampoule", icon: Droplets },
      { title: "Lift + Facial", price: "$140", addOn: "+ Ampoule", icon: Sparkles },
      { title: "Brightening Facial", price: "$140", addOn: "+ Ampoule", icon: Sparkles },
      { title: "Sensitive Skin Facial", price: "$130", addOn: "+ Ampoule", icon: Leaf },
      { title: "Microdermabrasion", price: "$75", icon: Wind },
      { title: "Microdermabrasion + Facial", price: "$130", addOn: "+ Ampoule", icon: Wind },
      { title: "Chemical Peel Facial (Superficial)", price: "$150", addOn: "+ Ampoule", icon: Zap },
      { title: "Luxury Spa Facial", price: "$180", addOn: "+ Ampoule", icon: Sparkles },
      { title: "Back Facial", price: "$250", icon: Sparkles },
      { title: "Dermaplaning", price: "$100", icon: Wind },
    ],
  },
  {
    label: "Lash & Brow",
    description:
      "Expert lash and brow treatments to define and elevate your natural features.",
    services: [
      { title: "Lash Lift", price: "$70", icon: Star },
      { title: "Brow Lamination", price: "$70", icon: Leaf },
      { title: "Lash & Brow Tint", price: "$50", icon: Leaf },
    ],
  },
  {
    label: "Body",
    description:
      "Nourishing and smoothing body treatments for a full head-to-toe glow.",
    services: [
      { title: "Body Scrub", price: "$40", icon: Droplets },
    ],
  },
  {
    label: "Waxing",
    description:
      "Fast, gentle hair removal using premium wax formulas for long-lasting smooth results.",
    services: [
      { title: "Waxing", price: "$40", addOn: "per zone", icon: Scissors },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-studio-accent text-xs font-bold tracking-[0.25em] uppercase">
            Full Service Menu
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-studio-text mt-4 mb-5 text-balance">
            Our Services
          </h1>
          <p className="text-studio-muted max-w-xl mx-auto leading-relaxed text-lg">
            From skincare essentials to transformative beauty treatments —
            everything you need to look and feel your very best.
          </p>
        </div>

        {/* Ampoule add-on note */}
        <div className="flex items-start gap-3 bg-studio-surface border border-studio-accent/25 rounded-xl p-4 mb-14 max-w-lg mx-auto">
          <div className="w-8 h-8 rounded-lg bg-studio-accent/15 border border-studio-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Plus size={14} className="text-studio-accent" />
          </div>
          <p className="text-studio-muted text-sm leading-relaxed">
            <span className="text-studio-text font-semibold">Ampoule Add-On available</span> for
            most facial treatments — an extra boost of concentrated active ingredients
            customized to your skin concern.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Category header */}
              <div className="mb-8 pb-4 border-b border-studio-border">
                <h2 className="text-2xl font-bold text-studio-text">{cat.label}</h2>
                <p className="text-studio-muted text-sm mt-1.5 max-w-lg">{cat.description}</p>
              </div>

              {/* Service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.services.map(({ title, price, addOn, icon: Icon }) => (
                  <Card
                    key={title}
                    className="group hover:border-studio-accent/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-studio-accent/10 border border-studio-accent/25 flex items-center justify-center flex-shrink-0 group-hover:bg-studio-accent/20 transition-colors">
                        <Icon size={18} className="text-studio-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-studio-text font-semibold text-sm leading-snug mb-1.5">
                          {title}
                        </p>
                        <p className="text-studio-accent font-bold text-lg">{price}</p>
                        {addOn && (
                          <p className="text-studio-subtle text-xs mt-0.5">{addOn}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl bg-studio-surface border border-studio-border p-12 md:p-16 text-center overflow-hidden mt-20">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,136,42,0.09) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-studio-text mb-4 text-balance">
              Not Sure Where to Start?
            </h3>
            <p className="text-studio-muted max-w-md mx-auto mb-8 leading-relaxed">
              Book a complimentary skin consultation and our estheticians will
              recommend the perfect treatments for your unique skin profile and
              beauty goals.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Book a Consultation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
