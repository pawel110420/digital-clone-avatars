import { useState } from "react";
import { Box, Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import { Play } from "lucide-react";
import { PermissionsModal } from "@/components/PermissionsModal";
import { useViewContext } from "@/contexts";

export const InitialView = () => {
  const { changeView } = useViewContext();
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePlayClick = () => {
    setModalVisible(true); // Show the modal on play click
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handlePermissionsGranted = () => {
    setModalVisible(false); // Hide the modal
    changeView("Lessons"); // Navigate to Lessons view
  };

  return (
    <Box className="appcontainer">
      <Flex justify="start" align="start" className="pt-6">
        <Heading>LimitlessMind.ai: Monetize Expertise, Empower Millions</Heading>
      </Flex>
      <Flex align="center" justify="center" className="h-[80vh] flex-col">
        <Heading size="8">Turn your knowledge into interactive experiences.</Heading>
        <Text>
          Scale your impact and connect with learners globally.
        </Text>
        <VideoWithPlayButton onPlayClick={handlePlayClick} />
      </Flex>

      {isModalVisible && (
        <PermissionsModal
          onClose={handleCloseModal}
          onPermissionGranted={handlePermissionsGranted}
        />
      )}
    </Box>
  );
};

const VideoWithPlayButton = ({ onPlayClick }: { onPlayClick: () => void }) => {
  return (
    <Box className="relative inline-block">
      <video
        className="w-[500px] h-auto"
        src="leo_gen_1.mp4"
        poster="leo_gen_1_poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />
      <IconButton
        size="4"
        variant="solid"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        onClick={onPlayClick}
      >
        <Play width="30" height="30" />
      </IconButton>
    </Box>
  );
};
