import Card from "../../Card";
import Text from "../../Text/Index";
import Image from "next/image";
import FEATURE_CARDS from "../../../data/FEATURE_CARDS";

const Interface = () => {
  const { title, image, text, width } = FEATURE_CARDS[0];

  return (
    <Card color="dark" padding="none" rounded="lg" width="lg">
      <div style={{ padding: 30 }}>
        <Text>{title}</Text>
        <Text>{text}</Text>
      </div>
      <Image src={image} alt={title} width={472} height={290} />
    </Card>
  );
};

export default Interface;
