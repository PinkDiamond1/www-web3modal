import Card from "../../Card";
import Text from "../../Text/Index";
import Image from "next/image";

const MultiChain = () => {
  return (
    <Card color="dark" padding="none" rounded="md" width="md">
      <div style={{ padding: 30 }}>
        <Text>
          Multi-chain ready. Easily set up support for EVM and non-EVM chains
        </Text>
      </div>
      <Image
        src="/icons/Networks.svg"
        alt="TryBackground"
        layout="responsive"
        width={300}
        height={250}
      />
    </Card>
  );
};

export default MultiChain;
