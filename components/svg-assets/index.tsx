import {
  Github,
  Linkedin,
  Next,
  Location,
  MailIcon,
  PhoneIcon,
  AchieveIcon,
  BioIcon,
  ProjectIcon,
  ArrowIcon,
  Like,
} from "./icons";

const assets = {
  github: Github,
  linkedin: Linkedin,
  next: Next,
  location: Location,
  mail: MailIcon,
  phone: PhoneIcon,
  achieve: AchieveIcon,
  bio: BioIcon,
  project: ProjectIcon,
  arrow: ArrowIcon,
  like: Like,
};

type SvgAssetProps = {
  kind: keyof typeof assets;
  href: string | undefined;
  size?: number;
};

export default function SvgAsset({ kind, href, size = 24 }: SvgAssetProps) {
  const SvgIcon = assets[kind];

  return (
    <a href={href} className="text-zinc-800">
      <span className="sr-only">{kind}</span>
      <SvgIcon
        className={`text-zinc-800`}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </a>
  );
}
