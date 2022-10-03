import Card from "../Card";
import Text from "../Text/Index";
import Image from "next/image";
import FEATURE_CARDS from "../../data/FEATURE_CARDS";

export default function Community() {
  const { title, image, text } = FEATURE_CARDS[8];

  return (
    <Card color="dark" padding="none" rounded="lg">
      <div>
        <Text>{title}</Text>
        <Text>{text}</Text>
        <foreignObject>
          <Image
            src={image}
            alt={title}
            width={800}
            height={220}
            style={{ borderRadius: 44 }}
          />
        </foreignObject>
      </div>
    </Card>
  );
}
