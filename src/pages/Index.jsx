import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, VStack, HStack, Avatar, Flex, Spacer } from "@chakra-ui/react";
import { FaUser, FaPaperPlane } from "react-icons/fa";

const FlexibilityTrainer = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi there! I'm your personal flexibility trainer. How can I help you today?",
    },
  ]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { from: "user", text: inputText }]);
      setInputText("");
      // TODO: Add bot response logic here
      const botResponse = "Here are some stretches for improving your flexibility...";
      setMessages((prevMessages) => [...prevMessages, { from: "bot", text: botResponse }]);
    }
  };

  return (
    <Box maxWidth="600px" margin="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Flexibility Trainer Chatbot
      </Heading>
      <Box bg="gray.100" borderRadius="md" p={4} maxHeight="400px" overflowY="auto" mb={4}>
        {messages.map((msg, index) => (
          <Flex key={index} mb={4} alignItems="center">
            <Avatar icon={msg.from === "bot" ? <FaUser /> : undefined} bg={msg.from === "bot" ? "blue.500" : "green.500"} mr={2} />
            <Box bg={msg.from === "bot" ? "blue.100" : "green.100"} borderRadius="md" p={2}>
              <Text>{msg.text}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <HStack>
        <Input placeholder="Type your message..." value={inputText} onChange={handleInputChange} />
        <Button colorScheme="blue" onClick={handleSendMessage} leftIcon={<FaPaperPlane />}>
          Send
        </Button>
      </HStack>
    </Box>
  );
};

const Index = () => {
  return (
    <VStack spacing={8} p={8}>
      <Heading as="h1" size="2xl">
        Welcome to the Flexibility Trainer Chatbot
      </Heading>
      <Text fontSize="xl" textAlign="center">
        Get personalized advice and stretches to improve your flexibility!
      </Text>
      <FlexibilityTrainer />
    </VStack>
  );
};

export default Index;
