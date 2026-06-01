import { ArrowUpRight, Play } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { CONTENT } from '../data/content';

function VideoCard({ video, index }) {
  const thumb = video.videoId
    ? `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
    : null;

  return (
    <li className="reveal border-b border-line last:border-b-0" style={{ transitionDelay: `${index * 0.06}s` }}>
      <a
        href={video.href}
        target="_blank"
        rel="noopener noreferrer"
        className="grid sm:grid-cols-[140px_1fr_auto] gap-5 py-6 group focus-visible:outline-none focus-visible:bg-surface-2"
      >
        <div className="relative aspect-video sm:aspect-[4/3] bg-surface-2 border border-line overflow-hidden">
          {thumb ? (
            <img src={thumb} alt="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Play size={20} className="text-faint group-hover:text-accent transition-colors" aria-hidden="true" />
            </div>
          )}
          {video.duration && (
            <span className="absolute bottom-2 right-2 text-[10px] px-1.5 py-0.5 bg-void/90 text-muted border border-line">
              {video.duration}
            </span>
          )}
        </div>

        <div className="min-w-0 flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-ink tracking-tight group-hover:text-accent transition-colors">{video.title}</h3>
          <p className="text-xs text-muted mt-1.5 leading-relaxed">{video.note}</p>
        </div>

        <ArrowUpRight size={14} className="text-faint group-hover:text-ink shrink-0 self-center transition-colors" aria-hidden="true" />
      </a>
    </li>
  );
}

export default function ContentSection() {
  return (
    <section id="content" className="py-24 px-6 lg:px-12 border-t border-line bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="reveal grid lg:grid-cols-[1fr_1.1fr] gap-16">
          <div>
            <SectionHeader
              number="04"
              label="Content"
              title={{ serif: 'Writing & video', main: '@ActuallyIndian_AI' }}
            />
            <p className="text-sm text-muted leading-relaxed mb-8 max-w-md -mt-6">{CONTENT.description}</p>
            <a href={CONTENT.channelUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              YouTube channel <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <ul className="border-t border-line">
            {CONTENT.videos.map((video, i) => (
              <VideoCard key={video.title} video={video} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
