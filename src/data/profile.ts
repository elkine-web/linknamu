export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "우승수",
  bio: "초보개발자 요즘 AI에 관심 많아요",
  avatarUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://example.com/blog" },
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
];
