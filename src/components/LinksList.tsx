"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinksList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/click", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {
        // 클릭 수 조회 실패 시 0회로 유지
      });
  }, []);

  function handleClick(linkId: string) {
    setCounts((prev) => ({ ...prev, [linkId]: (prev[linkId] ?? 0) + 1 }));

    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId }),
      keepalive: true,
    }).catch(() => {
      // 클릭 집계 실패는 이동을 막지 않음
    });
  }

  return (
    <div className="flex w-full flex-col gap-6 px-1">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
          count={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </div>
  );
}
