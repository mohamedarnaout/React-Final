import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack borderRadius="15px" backgroundColor="#fff" align="start">
      <Image src={imageSrc} alt={title} rounded="lg" />
      <Heading color="#000" size="md" padding="5px 13px">
        {title}
      </Heading>
      <Text color="#747373" padding="5px 13px">
        {" "}
        {description}
      </Text>
      <HStack spacing={2} color="#000" padding="5px 13px">
        <Text>see more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
