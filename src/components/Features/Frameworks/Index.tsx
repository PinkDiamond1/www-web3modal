import Card from "../../Card";
import Text from "../../Text/Index";
import Image from "next/image";
import FEATURE_CARDS from "../../../data/FEATURE_CARDS";

const Frameworks = () => {
  const { title, image, text } = FEATURE_CARDS[6];

  return (
    <Card color="dark" padding="none" rounded="lg" width="lg">
      <div style={{ padding: "3rem" }}>
        <Text variant="heading5" color="grey">
          <Text as="span" color="white" variant="heading5">
            {title}
          </Text>
          {text}
        </Text>
      </div>
      <Image
        src={image}
        alt={title}
        layout="responsive"
        width={472}
        height={290}
      />
    </Card>
  );
};

export default Frameworks;
