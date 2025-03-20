gdjs.Intro2Code = {};
gdjs.Intro2Code.localVariables = [];
gdjs.Intro2Code.GDcursorObjects1= [];
gdjs.Intro2Code.GDcursorObjects2= [];
gdjs.Intro2Code.GDScreenFadeObjects1= [];
gdjs.Intro2Code.GDScreenFadeObjects2= [];
gdjs.Intro2Code.GDNewSpriteObjects1= [];
gdjs.Intro2Code.GDNewSpriteObjects2= [];
gdjs.Intro2Code.GDbtnBackObjects1= [];
gdjs.Intro2Code.GDbtnBackObjects2= [];
gdjs.Intro2Code.GDplayObjects1= [];
gdjs.Intro2Code.GDplayObjects2= [];
gdjs.Intro2Code.GDNewSprite2Objects1= [];
gdjs.Intro2Code.GDNewSprite2Objects2= [];


gdjs.Intro2Code.mapOfGDgdjs_9546Intro2Code_9546GDbtnBackObjects1Objects = Hashtable.newFrom({"btnBack": gdjs.Intro2Code.GDbtnBackObjects1});
gdjs.Intro2Code.asyncCallback10674764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}gdjs.Intro2Code.localVariables.length = 0;
}
gdjs.Intro2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.40), (runtimeScene) => (gdjs.Intro2Code.asyncCallback10674764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro2Code.mapOfGDgdjs_9546Intro2Code_9546GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.Intro2Code.GDplayObjects1});
gdjs.Intro2Code.asyncCallback10675956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}gdjs.Intro2Code.localVariables.length = 0;
}
gdjs.Intro2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.40), (runtimeScene) => (gdjs.Intro2Code.asyncCallback10675956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScreenFade"), gdjs.Intro2Code.GDScreenFadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Intro2Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.Intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Intro2Code.GDcursorObjects1[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Fade");
}{for(var i = 0, len = gdjs.Intro2Code.GDScreenFadeObjects1.length ;i < len;++i) {
    gdjs.Intro2Code.GDScreenFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 0.5, true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Intro2Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.Intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Intro2Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Intro2Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnBack"), gdjs.Intro2Code.GDbtnBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Intro2Code.mapOfGDgdjs_9546Intro2Code_9546GDbtnBackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 70, 1);
}
{ //Subevents
gdjs.Intro2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Intro2Code.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Intro2Code.mapOfGDgdjs_9546Intro2Code_9546GDplayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 70, 1);
}
{ //Subevents
gdjs.Intro2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Intro2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro2Code.GDcursorObjects1.length = 0;
gdjs.Intro2Code.GDcursorObjects2.length = 0;
gdjs.Intro2Code.GDScreenFadeObjects1.length = 0;
gdjs.Intro2Code.GDScreenFadeObjects2.length = 0;
gdjs.Intro2Code.GDNewSpriteObjects1.length = 0;
gdjs.Intro2Code.GDNewSpriteObjects2.length = 0;
gdjs.Intro2Code.GDbtnBackObjects1.length = 0;
gdjs.Intro2Code.GDbtnBackObjects2.length = 0;
gdjs.Intro2Code.GDplayObjects1.length = 0;
gdjs.Intro2Code.GDplayObjects2.length = 0;
gdjs.Intro2Code.GDNewSprite2Objects1.length = 0;
gdjs.Intro2Code.GDNewSprite2Objects2.length = 0;

gdjs.Intro2Code.eventsList2(runtimeScene);
gdjs.Intro2Code.GDcursorObjects1.length = 0;
gdjs.Intro2Code.GDcursorObjects2.length = 0;
gdjs.Intro2Code.GDScreenFadeObjects1.length = 0;
gdjs.Intro2Code.GDScreenFadeObjects2.length = 0;
gdjs.Intro2Code.GDNewSpriteObjects1.length = 0;
gdjs.Intro2Code.GDNewSpriteObjects2.length = 0;
gdjs.Intro2Code.GDbtnBackObjects1.length = 0;
gdjs.Intro2Code.GDbtnBackObjects2.length = 0;
gdjs.Intro2Code.GDplayObjects1.length = 0;
gdjs.Intro2Code.GDplayObjects2.length = 0;
gdjs.Intro2Code.GDNewSprite2Objects1.length = 0;
gdjs.Intro2Code.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['Intro2Code'] = gdjs.Intro2Code;
