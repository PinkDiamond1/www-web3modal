import Card from "../../Card";
import Text from "../../Text/Index";
import Image from "next/image";

const CustomizableUI = () => {
  return (
    <Card color="dark" padding="lg" rounded="lg">
      <div>
        <Text>
          Delightful, customizable UI. Choose between light and dark modes and
          accent colors, or even infuse it with your own branding{" "}
        </Text>
        <foreignObject>
          <Image
            src="/CheckeredRectangle.svg"
            alt="TryBackground"
            width={720}
            height={564}
            style={{ borderRadius: 44 }}
          />
        </foreignObject>
      </div>
    </Card>
  );
};

export default CustomizableUI;
