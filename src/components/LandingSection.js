import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={3}>
      <Avatar size={150} src="https://i.pravatar.cc/150?img=8" />
      <Heading size="md">{greeting}</Heading>
      <Heading size="3xl">{bio1}</Heading>
      <Heading size="3xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
