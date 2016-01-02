import plugins from './plugins';
import config  from './config';
import Game from './Game';
import Bunny from './Bunny';

let game = new Game(config);

//Add the bunny
let bunny = new Bunny();
bunny.position.set(200,150);
game.stage.addChild(bunny);

game.start();
