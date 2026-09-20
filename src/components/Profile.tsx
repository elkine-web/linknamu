import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-36 w-36 overflow-hidden rounded-full border border-neutral-300 dark:border-neutral-700">
        <Image
          src={avatarUrl}
          alt={name}
          fill
          sizes="144px"
          className="object-cover"
          unoptimized
        />
      </div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{bio}</p>
    </div>
  );
}
