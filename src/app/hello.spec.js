import angular from 'angular';
import {HomeController} from './hello'

let controller;

describe('hello component', () => {
  beforeEach(() => {
    controller = new HomeController();
  });

  describe('getMutualFriendsCount', () => {
      it('should get count', () => {
        const line = "20 mutal friends";
        const number = controller.getMutualFriendsCount(line);
        expect(number).toBe(20);
      });
  });
  describe('parse', () => {
    it('should parse data', () => {
      const rawData = `
        Doug Neale
        10 mutual friends
        Jarrad
        5 mutual friends
        something else
        Ben
        1 mutual friend
      `
      const expectedOutput = [
        {
          "name": "Doug Neale",
          "friends": 10,
          "group": "group1"
        },
        {
          "name": "Jarrad",
          "friends": 5,
          "group": "group1"
        },
        {
          "name": "Ben",
          "friends": 1,
          "group": "group1"
        },

      ];
      const output = controller.parse(rawData);
      expect(output).toBe(expectedOutput);
      
    });
  });
    
});
