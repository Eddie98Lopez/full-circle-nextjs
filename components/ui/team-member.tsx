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
      <Card>
        <CardContent>
          <div className="size-80 bg-primary rounded-full">
            <Image src={image} alt={name} width={600} height={600} />
          </div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{role}</CardDescription>
        </CardContent>
      </Card>
    </li>
  );
};

export default TeamMemberCard;
