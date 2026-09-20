export type LinkItem = {
  id: string;
  title: string;
  url: string;
  icon: string;
};

export const profile = {
  name: "우승수",
  bio: "초보개발자 요즘 AI에 관심 많아요",
  avatarUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "http://github.com/elkine-web", icon: "🐙" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com/elkine", icon: "📝" },
  { id: "email", title: "이메일", url: "mailto:elkine@naver.com", icon: "✉️" },
];
