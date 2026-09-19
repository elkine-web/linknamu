export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "우승수",
  bio: "코딩 할 수 있다",
  avatarUrl: "https://picsum.photos/seed/linknamu/300/300",
};

export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://example.com/blog" },
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
];
