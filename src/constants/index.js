export * from "./colors";

export const DebitScreenList = [
  {
    id: 0,
    title: "Top-up account",
    description: "Deposit money to your account to use with card",
    image: require("../assets/top_up.png"),
    route: "",
    showSwitch: false,
  },
  {
    id: 1,
    title: "Weekly spending limit",
    description: "Your weekly spending limit is S$ ",
    image: require("../assets/spend_limit.png"),
    route: "SpendingLimit",
    showSwitch: true,
  },
  {
    id: 2,
    title: "Freeze card",
    description: "Your debit card is currently active",
    image: require("../assets/freeze_card.png"),
    route: "",
    showSwitch: true,
  },
  {
    id: 3,
    title: "Get a new card",
    description: "This deactivates your current debit card",
    image: require("../assets/new_card.png"),
    route: "",
    showSwitch: false,
  },
  {
    id: 4,
    title: "Deactivated cards",
    description: "Your previously deactivated cards",
    image: require("../assets/transfer_block.png"),
    route: "",
    showSwitch: false,
  },
];
