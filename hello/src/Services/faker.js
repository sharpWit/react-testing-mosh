import { faker } from "@faker-js/faker";
export function messageGenerator(count = 1) {
  const messages = [];

  do {
    messages.push({
      id: faker.datatype.uuid(),
      type: faker.datatype.boolean() ? "recive" : "sent",
      message: faker.lorem.sentence(),
      time: faker.date.recent().toLocaleTimeString(),
    });
    count--;
  } while (count);

  return messages;
}
