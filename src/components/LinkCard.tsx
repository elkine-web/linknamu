import type { LinkItem } from "@/data/profile";

type LinkCardProps = LinkItem & {
  count: number;
  onClick: () => void;
};

export default function LinkCard({ title, url, icon, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-2xl border border-neutral-300 bg-white/60 px-6 py-6 text-lg font-medium transition-colors hover:border-sky-300 hover:bg-sky-100 dark:border-neutral-700 dark:bg-neutral-900/40 dark:hover:border-sky-700 dark:hover:bg-sky-950/50"
    >
      <span aria-hidden="true" className="text-2xl">{icon}</span>
      <span className="flex-1 text-center">{title}</span>
      <span className="text-xs text-neutral-500 dark:text-neutral-400">{count}회</span>
    </a>
  );
}
