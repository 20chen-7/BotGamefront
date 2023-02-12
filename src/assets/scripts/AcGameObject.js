const AC_GAME_OBJECTS = [];

export class AcGameObjects {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }
    start() { // start at the beginning

    }
    update() { // update every frame

    }

    on_destroy() { // before delete

    }
    destroy() {
        this.on_destroy();

        for (let i in AC_GAME_OBJECTS){
            const obj = AC_GAME_OBJECTS[i];
            if (obj === this){
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}
let last_timestamp; // the last time update 
const step = timestamp =>{
    for (let obj of AC_GAME_OBJECTS){
        if (!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step);
}
requestAnimationFrame(step)