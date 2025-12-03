export const CARD_TYPES = Object.freeze({
  YES_NO: "YES_NO",
  RADIO_OPTIONS: "RADIO_OPTIONS",
  MULTI_SELECT: "MULTI_SELECT",
  TEXT_INPUT: "TEXT_INPUT",
});

const REQUIRED_KEYS = {
  [CARD_TYPES.YES_NO]: ["question"],
  [CARD_TYPES.RADIO_OPTIONS]: ["question", "options"],
  [CARD_TYPES.MULTI_SELECT]: ["question", "options"],
  [CARD_TYPES.TEXT_INPUT]: ["question"],
};

const ARRAY_TYPES = new Set([
  CARD_TYPES.RADIO_OPTIONS,
  CARD_TYPES.MULTI_SELECT,
]);

export function validatePayload(payload) {
  if (!payload || typeof payload !== "object") {
    throw new Error("Card payload must be a non-null object.");
  }

  const { type } = payload;
  if (!Object.values(CARD_TYPES).includes(type)) {
    throw new Error(
      `Invalid card type "${type}". Supported types: ${Object.values(CARD_TYPES).join(", ")}.`
    );
  }

  const requiredKeys = REQUIRED_KEYS[type] || [];
  const missingKeys = requiredKeys.filter((key) => payload[key] === undefined);
  if (missingKeys.length) {
    throw new Error(
      `Missing required field(s) for ${type}: ${missingKeys.join(", ")}.`
    );
  }

  if (ARRAY_TYPES.has(type)) {
    if (!Array.isArray(payload.options) || payload.options.length === 0) {
      throw new Error(`${type} payload must include a non-empty options array.`);
    }
  }

  if (payload.question && typeof payload.question !== "string") {
    throw new Error("question must be a string.");
  }

  if (payload.placeholder && typeof payload.placeholder !== "string") {
    throw new Error("placeholder must be a string when provided.");
  }

  return payload;
}
