import PIXI from 'pixi.js';

export default class Game {
  constructor(config){
    const Renderer = (config.webgl) ? PIXI.autoDetectRenderer : PIXI.CanvasRenderer;
    this.renderer = new Renderer(config.width || 800, config.height || 600, config.rendererOptions);
    document.body.appendChild(this.renderer.view);

    this.animationLoop = new PIXI.AnimationLoop(this.renderer);
    this.animationLoop.on('prerender', this.update.bind(this));
  }

  update(){
    for(let i = 0; i < this.stage.children.length; i++){
      if(this.stage.children[i].update){
        this.stage.children[i].update(this.animationLoop.delta);
      }
    }
  }

  start(){
    this.animationLoop.start();
  }

  stop(){
    this.animationLoop.stop();
  }

  get stage(){
    return this.animationLoop.stage;
  }

  set stage(stage){
    this.animationLoop.stage = stage;
  }
}
