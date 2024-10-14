import { unsafe_createClientWithApiKey } from "@anam-ai/js-sdk";

const client = unsafe_createClientWithApiKey("YmMxZDQ0Y2MtZmVjYy00NjQyLTg4NTQtNmI2NGNhOGM5MDZhOmN6U2RyZjB5RzRKU2ZzdWpLMWZPOEdjS0d5SXlDNWhjWmlodklGMWt1ZXM9", {
  personaId: "efd3892e-0857-4777-b504-fba90797d3f8",
});

client.streamToVideoAndAudioElements(
  "my-video-element-id",
  "my-audio-element-id"
);


// evacosnult basic: efd3892e-0857-4777-b504-fba90797d3f8
// standard persona: 773a8ca8-efd8-4449-9305-8b8bc1591475