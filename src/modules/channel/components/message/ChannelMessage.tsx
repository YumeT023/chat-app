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
    <div className="flex h-full flex-col bg-dark-100">
      <div className="overflow-y-auto px-3">
        <UserMessage content={mockContent} />
      </div>

      <div className="h-48 bg-primary-200">
        
      </div>
    </div>
  );
};
