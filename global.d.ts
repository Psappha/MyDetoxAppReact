import { DetoxMatchers } from 'detox';

declare global {
  namespace jest {
    interface Matchers<R> extends DetoxMatchers<R> {}
  }
}