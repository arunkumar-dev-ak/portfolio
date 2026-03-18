import Section from "./Section";
import { AWS_SERVICES } from "./data";
import { Cloud } from "lucide-react";

export default function AWSKnowledge() {
  return (
    <Section className="bg-gradient-to-br from-slate-900/50 to-slate-950 border-y border-slate-900">
      <div className="flex items-center gap-3 mb-8 justify-center">
        <Cloud className="w-8 h-8 text-amber-400" />
        <h2 className="text-3xl font-bold text-slate-100">AWS Knowledge</h2>
      </div>

      <p className="text-center text-slate-400 max-w-2xl mx-auto mb-10">
        Experienced in architecting and deploying scalable cloud solutions using
        Amazon Web Services.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {AWS_SERVICES.map((service) => (
          <div
            key={service.name}
            className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:text-amber-400 transition-colors text-slate-300 text-sm font-medium flex items-center gap-2">
            <span>{service.name}</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="text-xs text-slate-500 uppercase tracking-wider">
              {service.category}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
