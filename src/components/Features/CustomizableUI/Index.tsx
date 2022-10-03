import Card from '../../Card'
import Text from '../../Text/Index'
import Image from 'next/image'
import FEATURE_CARDS from '../../../data/FEATURE_CARDS'
import { ConnectButton, useConnectModal } from '@web3modal/react'
// import { useEffect, useState } from "react";
// import { Web3Modal } from "../../Web3Modal/Index";

const CustomizableUI = () => {
  const { isOpen, open, close } = useConnectModal()

  // useEffect(() => {
  //   console.log("isOpen", isOpen);
  //   open();
  // }, [isOpen]);

  const { title, image, text } = FEATURE_CARDS[0]
  //ToDo: Move CheckeredUI  / Use FEATURED_CARDS DATA
  // Import WebComponent only

  return (
    <Card color="dark" padding="lg" rounded="lg">
      <div style={{ padding: '2em' }}>
        <Text variant="heading5" color="grey">
          <Text as="span" color="white" variant="heading5">
            {title}
          </Text>
          {text}
        </Text>
      </div>
      <Image
        src="/CheckeredRectangle.svg"
        alt="TryBackground"
        width={720}
        height={564}
        style={{ borderRadius: 44 }}
      />

      <div style={{ position: 'relative', top: -500, left: 400 }}>
        {/* <w3m-connect-button />
        <ConnectButton /> */}
        {/* <w3m-modal open={"true"} /> */}
        {/* {console.log("web3Modal", <w3m-modal />)} */}
        {/* <Web3Modal /> */}
      </div>
    </Card>
  )
}

export default CustomizableUI
