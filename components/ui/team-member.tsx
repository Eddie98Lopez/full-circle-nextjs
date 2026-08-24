import { CardContent, Card, CardTitle, CardDescription } from "./card";
import Image from "next/image";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
}

const TeamMemberCard = ({ image, name, role }: TeamMemberCardProps) => {
  return (
    <li>
      <Card className="bg-transparent border-none shadow-none ring-0 outline-none">
        <CardContent className="border-none flex flex-col items-center">
          <div className="size-80 bg-primary rounded-full overflow-hidden">
            <Image src={image} alt={name} width={600} height={600} />
          </div>
          <CardTitle className="tex-title text-[2rem]">{name}</CardTitle>
          <CardDescription className="text-lg font-medium">
            {role}
          </CardDescription>
        </CardContent>
      </Card>
    </li>
  );
};

export default TeamMemberCard;
