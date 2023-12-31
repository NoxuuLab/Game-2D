// IntroductionScene.js
import { commonTextStyle, headerTextStyle } from '../styles/textStyles.js';
console.log("IntroductionScene loaded");

class IntroductionScene extends Phaser.Scene {
    constructor() {
      super({ key: 'IntroductionScene' });
    }
  
    preload() {
      // Load assets for the introduction scene
      this.load.image('background', '../src/assets/introductionScene/background.png');
      this.load.image('startButton', '../src/assets/introductionScene/ButtonEnter.png');
    }
  
    create() {

      // Set up the introduction scene
    const backgroundImage = this.add.image(400, 300, 'background'); // Centered position
      // Set up text styling

     
        // Add rules text using Phaser Text object
        const rulesText = this.add.text(50, 50, 'Rules:', headerTextStyle);

        const rule1 = this.add.text(50, 150, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla at odio commodo auctor. Pellentesque maximus tellus non erat gravida porta. Suspendisse eu eleifend ex.', commonTextStyle);
        const rule2 = this.add.text(50, 250, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla at odio commodo auctor. Pellentesque maximus tellus non erat gravida porta. Suspendisse eu eleifend ex.', commonTextStyle);

        // Add the Text objects to the scene
        this.add.existing(rulesText);
        this.add.existing(rule1);
        this.add.existing(rule2);

    const startButton = this.add.sprite(600, 500, 'startButton').setInteractive();

    startButton.on('pointerdown', () => {
      this.scene.start('ChooseArticle');
    });
  
      // Add text or other elements to explain the rules
    }
  }

  export default IntroductionScene;
  