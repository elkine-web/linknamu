import DarkModeToggle from "@/components/DarkModeToggle";
import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import FloatingMascots from "@/components/FloatingMascots";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-8">
      <FloatingMascots />
      <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-8 rounded-[2rem] border border-neutral-200 bg-white/80 px-8 py-14 shadow-xl backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/70 sm:px-12">
        <DarkModeToggle />
        <Profile name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
        <div className="flex w-full flex-col gap-6 px-1">
          {links.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </div>
      </div>
    </main>
  );
}
