import type { W3mModal } from "@web3modal/ui";
import React from "react";
import { html, css, LitElement } from "lit";

/**
 * Component
 */
export function Web3ModalBackCard(props: JSX.IntrinsicElements["w3m-modal"]) {
  return <w3m-modal {...props} />;
}

/**
 * Types
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "w3m-modal": Partial<W3mModal>;
    }
  }
}
