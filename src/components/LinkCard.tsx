"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, title, url, icon }: LinkItem) {
  function handleClick() {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: id }),
      keepalive: true,
    }).catch(() => {
      // 클릭 집계 실패는 이동을 막지 않음
    });
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center justify-center gap-3 rounded-2xl border border-neutral-300 bg-white/60 px-6 py-6 text-center text-lg font-medium transition-colors hover:border-sky-300 hover:bg-sky-100 dark:border-neutral-700 dark:bg-neutral-900/40 dark:hover:border-sky-700 dark:hover:bg-sky-950/50"
    >
      <span aria-hidden="true" className="text-2xl">{icon}</span>
      <span>{title}</span>
    </a>
  );
}
