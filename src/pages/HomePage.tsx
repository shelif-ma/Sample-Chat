import React, { useEffect, useState } from "react";
import {
  Avatar,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Paper,
  CircularProgress,
  IconButton,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout"; // Import the Logout icon
import { useNavigate } from "react-router-dom";
import { responses } from "../algorithms/response";
import { Responses } from "../interfaces/chat.interfaces";

const HomePage: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [isWaving, setIsWaving] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { message: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const navigate = useNavigate();

  const getUserInfo = async (accessToken: string, provider: string) => {
    try {
      let url = "";
      if (provider === "google") {
        url = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`;
      } else if (provider === "facebook") {
        url = `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setUserInfo(data);

      setChatHistory([
        {
          message: `Hello ${data.name}! How can I assist you today?`,
          sender: "bot",
        },
      ]);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", "?"));
    const accessToken = params.get("access_token");

    if (accessToken) {
      if (window.location.href.includes("google")) {
        getUserInfo(accessToken, "google");
      } else if (window.location.href.includes("facebook")) {
        getUserInfo(accessToken, "facebook");
      }
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsWaving((prev) => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getResponse = (message: string): string | null => {
    for (const key in responses) {
      if (responses[key as keyof Responses].pattern.test(message)) {
        return responses[key as keyof Responses].response;
      }
    }
    return null;
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) { 
      setChatHistory((prev) => [
        ...prev,
        { message: chatMessage, sender: "user" },
      ]);

      setChatMessage("");
      setIsBotTyping(true);

      setTimeout(() => {
        setIsBotTyping(false);

        const userMessage = chatMessage.toLowerCase();

        // Basic Sentiment Analysis (simple approach)
        const positiveWords = ["good", "great", "happy", "love", "awesome"];
        const negativeWords = ["bad", "sad", "hate", "awful", "terrible"];

        const sentimentScore = (message: string) => {
          const words = message.split(" ");
          const posCount = words.filter((word) =>
            positiveWords.includes(word)
          ).length;
          const negCount = words.filter((word) =>
            negativeWords.includes(word)
          ).length;
          return posCount - negCount;
        };

        const sentiment = sentimentScore(userMessage);
        let botResponse =
          getResponse(userMessage) || "Sorry, I didn't understand that.";

        if (sentiment < 0) {
          botResponse =
            "I'm sorry to hear that you're feeling down. Is there something specific bothering you?";
        } else if (sentiment > 0) {
          botResponse =
            "I'm glad to hear you're in good spirits! How can I assist you today?";
        }

        setChatHistory((prev) => [
          ...prev,
          { message: botResponse, sender: "bot" },
        ]);
      }, 1000);
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Container sx={{ padding: 5 }}>
      <Typography variant="h4" color="white" gutterBottom>
        Welcome <span className={isWaving ? "animated-wave" : ""}>👋</span>
      </Typography>

      {userInfo && (
        <Box
          textAlign="right"
          mb={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Avatar
            alt={userInfo.name}
            src={userInfo.picture}
            sx={{ width: 56, height: 56, marginRight: 1 }}
          />
          <IconButton onClick={handleLogout} color="inherit">
            <LogoutIcon />
          </IconButton>
        </Box>
      )}

      <Paper
        sx={{
          padding: 2,
          borderRadius: 5,
          maxHeight: 500,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 150px)",
        }}
      >
        {chatHistory.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent:
                message.sender === "bot" ? "flex-start" : "flex-end",
              marginBottom: 1,
            }}
          >
            {message.sender === "bot" && (
              <Box display="flex" alignItems="center">
                <Avatar
                  alt="bot"
                  src="./assets/avatar.jpeg"
                  sx={{ width: 40, height: 40, marginRight: 1 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: "#ddf0f5",
                    padding: 1,
                    borderRadius: 1,
                    display: "inline-block",
                    maxWidth: "80%",
                  }}
                >
                  {message.message}
                </Typography>
              </Box>
            )}

            {message.sender === "user" && (
              <Box display="flex" alignItems="center" py={1}>
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: "#f5dfdf",
                    padding: 1,
                    borderRadius: 1,
                    display: "inline-block",
                    maxWidth: "80%",
                  }}
                >
                  {message.message}
                </Typography>
                <Avatar
                  alt="user"
                  src={userInfo?.picture}
                  sx={{ width: 40, height: 40, marginLeft: 1 }}
                />
              </Box>
            )}
          </Box>
        ))}

        {isBotTyping && (
          <Box textAlign="left" sx={{ marginTop: 1 }}>
            <CircularProgress size={24} />
            <Typography
              variant="body1"
              sx={{ display: "inline", marginLeft: 1 }}
            >
              The bot is typing...
            </Typography>
          </Box>
        )}
      </Paper>

      <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{ marginLeft: 1 }}
        >
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
