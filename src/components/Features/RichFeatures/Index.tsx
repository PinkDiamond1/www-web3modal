import Card from "../../Card";
import Text from "../../Text/Index";
import Image from "next/image";
import FEATURE_CARDS from "../../../data/FEATURE_CARDS";

const RichFeatures = () => {
  const { title, image, text } = FEATURE_CARDS[3];

  return (
    <Card color="dark" padding="none" rounded="lg" width="lg">
      <div style={{ padding: 30 }}>
        <Text>
          {title}
          <span>{text}</span>
        </Text>
      </div>
      <Image src={image} alt={title} width={472} height={290} />
    </Card>
  );
};

export default RichFeatures;
