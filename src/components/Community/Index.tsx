import Card from "../Card";
import Text from "../Text/Index";
import Image from "next/image";
import FEATURE_CARDS from "../../data/FEATURE_CARDS";
import Button from "../Button/Index";

export default function Community() {
  const { title, image, text } = FEATURE_CARDS[9];

  return (
    <Card color="dark" padding="none" rounded="lg">
      <div style={{ padding: "2rem" }}>
        <Text variant="heading4" color="white">
          {title}
        </Text>{" "}
        <Text variant="text2" color="grey">
          {text}
        </Text>
        <div style={{ display: "flex" }}>
          <Button variant="fill" color="grey">
            Github
          </Button>
          <Button variant="fill" color="grey">
            Discord
          </Button>
          <Button variant="fill" color="grey">
            Twitter
          </Button>
        </div>
      </div>

      <Image
        src={image}
        alt={title}
        width={800}
        height={220}
        style={{ borderRadius: 54 }}
      />
    </Card>
  );
}
