import {UserMessage} from "@/src/modules/channel";

export type ChannelMessage = () => {};

const mockContent = `
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
Hello world from here lorem2
`;

export const ChannelMessage = () => {
  return (
    <div className="h-full bg-dark-100 px-3">
      <UserMessage content={mockContent} />
    </div>
  );
};
