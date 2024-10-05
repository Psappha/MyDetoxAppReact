import { expect } from "detox";
describe('App', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    it('should display the initial count', async () => {
      await expect(element(by.text('You clicked 0 times'))).toBeVisible();
    });
  
    it('should increment the counter when button is clicked', async () => {
      await element(by.text('Click me')).tap();
      await expect(element(by.text('You clicked 1 times'))).toBeVisible();
    });

    it('should tap on tile 16 and verify the color change', async () => {
      await element(by.id('tileList')).scrollTo('bottom');
      await element(by.text('Tile 16')).tap();
      const attributes = await element(by.id('tile-16')).getAttributes();
      await expect(element(by.id('tile-16'))).toHaveLabel('red-tile')
    })
  });