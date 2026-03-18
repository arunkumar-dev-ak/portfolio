import Section from "./Section";
import { EXPERIENCE } from "./data";

export default function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold text-slate-100 mb-12">
        Work Experience
      </h2>

      <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-slate-950" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
              <span className="text-sm font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">
                {exp.period}
              </span>
            </div>

            <p className="text-sky-400 font-medium mb-4">{exp.company}</p>

            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
