import { SectionHeader } from './SectionHeader';
import { SKILLS } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="03"
          label="Expertise"
          title={{ serif: 'Tools & domains', main: 'Skills' }}
          description="Production stack across ML, cloud, and mobile. Not a keyword dump, what I reach for when shipping."
        />

        <div className="reveal border-t border-line">
          {SKILLS.map((group) => (
            <div key={group.category} className="grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-10 py-6 border-b border-line items-start">
              <p className="eyebrow pt-1">{group.category}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-muted">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
