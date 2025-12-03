import React from "react";
import YesNoCard from "../components/YesNoCard";
import RadioOptionsCard from "../components/RadioOptionsCard";
import MultiSelectCard from "../components/MultiSelectCard";
import TextInputCard from "../components/TextInputCard";
import { CARD_TYPES, validatePayload } from "../schema";

const CARD_COMPONENTS = {
  [CARD_TYPES.YES_NO]: YesNoCard,
  [CARD_TYPES.RADIO_OPTIONS]: RadioOptionsCard,
  [CARD_TYPES.MULTI_SELECT]: MultiSelectCard,
  [CARD_TYPES.TEXT_INPUT]: TextInputCard,
};

export default function renderCardFromJSON(payload) {
  const safePayload = validatePayload(payload);
  const Component = CARD_COMPONENTS[safePayload.type];

  if (!Component) {
    throw new Error(`No renderer configured for card type ${safePayload.type}.`);
  }

  return <Component {...safePayload} />;
}
