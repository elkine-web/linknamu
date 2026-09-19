import DarkModeToggle from "@/components/DarkModeToggle";
import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-4 py-8">
      <div className="relative flex w-full max-w-sm flex-col items-center gap-6 rounded-[2rem] border border-neutral-300 px-6 py-10 dark:border-neutral-700">
        <DarkModeToggle />
        <Profile name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
        <div className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard key={link.id} {...link} />
          ))}
        </div>
      </div>
    </main>
  );
}
