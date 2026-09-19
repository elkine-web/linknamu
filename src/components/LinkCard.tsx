"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, title, url }: LinkItem) {
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
      className="block w-full rounded-xl border border-neutral-300 px-4 py-3 text-center transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
    >
      {title}
    </a>
  );
}
