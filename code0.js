gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDcursorObjects1= [];
gdjs.IntroCode.GDcursorObjects2= [];
gdjs.IntroCode.GDcursorObjects3= [];
gdjs.IntroCode.GDScreenFadeObjects1= [];
gdjs.IntroCode.GDScreenFadeObjects2= [];
gdjs.IntroCode.GDScreenFadeObjects3= [];
gdjs.IntroCode.GDNewSpriteObjects1= [];
gdjs.IntroCode.GDNewSpriteObjects2= [];
gdjs.IntroCode.GDNewSpriteObjects3= [];
gdjs.IntroCode.GDNewSprite2Objects1= [];
gdjs.IntroCode.GDNewSprite2Objects2= [];
gdjs.IntroCode.GDNewSprite2Objects3= [];
gdjs.IntroCode.GDbtnGoObjects1= [];
gdjs.IntroCode.GDbtnGoObjects2= [];
gdjs.IntroCode.GDbtnGoObjects3= [];
gdjs.IntroCode.GDTransObjects1= [];
gdjs.IntroCode.GDTransObjects2= [];
gdjs.IntroCode.GDTransObjects3= [];


gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.IntroCode.GDNewSprite2Objects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Dancing on Green Grass - The Green Orbs.mp3", 1, true, 90, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDbtnGoObjects1Objects = Hashtable.newFrom({"btnGo": gdjs.IntroCode.GDbtnGoObjects1});
gdjs.IntroCode.asyncCallback10647724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.IntroCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro2", false);
}gdjs.IntroCode.localVariables.length = 0;
}
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.IntroCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.IntroCode.asyncCallback10647724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScreenFade"), gdjs.IntroCode.GDScreenFadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.IntroCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Fade");
}{for(var i = 0, len = gdjs.IntroCode.GDScreenFadeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDScreenFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 0.5, true);
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Dancing on Green Grass - The Green Orbs.mp3");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.IntroCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.IntroCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10644500);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnGo"), gdjs.IntroCode.GDbtnGoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDbtnGoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 70, 1);
}
{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDcursorObjects1.length = 0;
gdjs.IntroCode.GDcursorObjects2.length = 0;
gdjs.IntroCode.GDcursorObjects3.length = 0;
gdjs.IntroCode.GDScreenFadeObjects1.length = 0;
gdjs.IntroCode.GDScreenFadeObjects2.length = 0;
gdjs.IntroCode.GDScreenFadeObjects3.length = 0;
gdjs.IntroCode.GDNewSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewSpriteObjects2.length = 0;
gdjs.IntroCode.GDNewSpriteObjects3.length = 0;
gdjs.IntroCode.GDNewSprite2Objects1.length = 0;
gdjs.IntroCode.GDNewSprite2Objects2.length = 0;
gdjs.IntroCode.GDNewSprite2Objects3.length = 0;
gdjs.IntroCode.GDbtnGoObjects1.length = 0;
gdjs.IntroCode.GDbtnGoObjects2.length = 0;
gdjs.IntroCode.GDbtnGoObjects3.length = 0;
gdjs.IntroCode.GDTransObjects1.length = 0;
gdjs.IntroCode.GDTransObjects2.length = 0;
gdjs.IntroCode.GDTransObjects3.length = 0;

gdjs.IntroCode.eventsList2(runtimeScene);
gdjs.IntroCode.GDcursorObjects1.length = 0;
gdjs.IntroCode.GDcursorObjects2.length = 0;
gdjs.IntroCode.GDcursorObjects3.length = 0;
gdjs.IntroCode.GDScreenFadeObjects1.length = 0;
gdjs.IntroCode.GDScreenFadeObjects2.length = 0;
gdjs.IntroCode.GDScreenFadeObjects3.length = 0;
gdjs.IntroCode.GDNewSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewSpriteObjects2.length = 0;
gdjs.IntroCode.GDNewSpriteObjects3.length = 0;
gdjs.IntroCode.GDNewSprite2Objects1.length = 0;
gdjs.IntroCode.GDNewSprite2Objects2.length = 0;
gdjs.IntroCode.GDNewSprite2Objects3.length = 0;
gdjs.IntroCode.GDbtnGoObjects1.length = 0;
gdjs.IntroCode.GDbtnGoObjects2.length = 0;
gdjs.IntroCode.GDbtnGoObjects3.length = 0;
gdjs.IntroCode.GDTransObjects1.length = 0;
gdjs.IntroCode.GDTransObjects2.length = 0;
gdjs.IntroCode.GDTransObjects3.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
