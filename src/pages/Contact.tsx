import { TextInput, Button, Textarea } from "@mantine/core";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <TextInput label="Name" placeholder="Name" />
      <TextInput label="Email" placeholder="Email" />
      <Textarea label="Message" placeholder="Message" />
    </div>
  );
};

export default Contact;
