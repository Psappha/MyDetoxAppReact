//@ts-expect-error
import { detox}  from "detox"
beforeAll(async () => {
  await detox.init();
});

afterAll(async () => {
  await detox.cleanup();
});
