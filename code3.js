gdjs.FinalCode = {};
gdjs.FinalCode.localVariables = [];
gdjs.FinalCode.GDcursorObjects1= [];
gdjs.FinalCode.GDcursorObjects2= [];
gdjs.FinalCode.GDcursorObjects3= [];
gdjs.FinalCode.GDScreenFadeObjects1= [];
gdjs.FinalCode.GDScreenFadeObjects2= [];
gdjs.FinalCode.GDScreenFadeObjects3= [];
gdjs.FinalCode.GDNewSpriteObjects1= [];
gdjs.FinalCode.GDNewSpriteObjects2= [];
gdjs.FinalCode.GDNewSpriteObjects3= [];
gdjs.FinalCode.GDNewSprite2Objects1= [];
gdjs.FinalCode.GDNewSprite2Objects2= [];
gdjs.FinalCode.GDNewSprite2Objects3= [];
gdjs.FinalCode.GDyesBtnObjects1= [];
gdjs.FinalCode.GDyesBtnObjects2= [];
gdjs.FinalCode.GDyesBtnObjects3= [];
gdjs.FinalCode.GDnoBtnObjects1= [];
gdjs.FinalCode.GDnoBtnObjects2= [];
gdjs.FinalCode.GDnoBtnObjects3= [];
gdjs.FinalCode.GDStars2Objects1= [];
gdjs.FinalCode.GDStars2Objects2= [];
gdjs.FinalCode.GDStars2Objects3= [];


gdjs.FinalCode.asyncCallback13721428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinalCode.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "victory.mp3", 1, true, 90, 1);
}gdjs.FinalCode.localVariables.length = 0;
}
gdjs.FinalCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.FinalCode.asyncCallback13721428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDyesBtnObjects1Objects = Hashtable.newFrom({"yesBtn": gdjs.FinalCode.GDyesBtnObjects1});
gdjs.FinalCode.asyncCallback13735100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinalCode.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}gdjs.FinalCode.localVariables.length = 0;
}
gdjs.FinalCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.FinalCode.asyncCallback13735100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDnoBtnObjects1Objects = Hashtable.newFrom({"noBtn": gdjs.FinalCode.GDnoBtnObjects1});
gdjs.FinalCode.userFunc0x9d8e70 = function GDJSInlineCode(runtimeScene) {
"use strict";
window.location.href = "https://sesiescolas.fiemg.com.br/";
//window.top.location.href = "https://sesiescolas.fiemg.com.br/";

};
gdjs.FinalCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


gdjs.FinalCode.userFunc0x9d8e70(runtimeScene);

}


};gdjs.FinalCode.asyncCallback13737484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FinalCode.localVariables);

{ //Subevents
gdjs.FinalCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.FinalCode.localVariables.length = 0;
}
gdjs.FinalCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FinalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.FinalCode.asyncCallback13737484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FinalCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScreenFade"), gdjs.FinalCode.GDScreenFadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.FinalCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDcursorObjects1[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Fade");
}{for(var i = 0, len = gdjs.FinalCode.GDScreenFadeObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDScreenFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 0.7, true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sucess.mp3", false, 100, 1);
}
{ //Subevents
gdjs.FinalCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.FinalCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.FinalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.FinalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("yesBtn"), gdjs.FinalCode.GDyesBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDyesBtnObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press2.mp3", false, 70, 1);
}
{ //Subevents
gdjs.FinalCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("noBtn"), gdjs.FinalCode.GDnoBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FinalCode.mapOfGDgdjs_9546FinalCode_9546GDnoBtnObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press2.mp3", false, 70, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents
gdjs.FinalCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalCode.GDcursorObjects1.length = 0;
gdjs.FinalCode.GDcursorObjects2.length = 0;
gdjs.FinalCode.GDcursorObjects3.length = 0;
gdjs.FinalCode.GDScreenFadeObjects1.length = 0;
gdjs.FinalCode.GDScreenFadeObjects2.length = 0;
gdjs.FinalCode.GDScreenFadeObjects3.length = 0;
gdjs.FinalCode.GDNewSpriteObjects1.length = 0;
gdjs.FinalCode.GDNewSpriteObjects2.length = 0;
gdjs.FinalCode.GDNewSpriteObjects3.length = 0;
gdjs.FinalCode.GDNewSprite2Objects1.length = 0;
gdjs.FinalCode.GDNewSprite2Objects2.length = 0;
gdjs.FinalCode.GDNewSprite2Objects3.length = 0;
gdjs.FinalCode.GDyesBtnObjects1.length = 0;
gdjs.FinalCode.GDyesBtnObjects2.length = 0;
gdjs.FinalCode.GDyesBtnObjects3.length = 0;
gdjs.FinalCode.GDnoBtnObjects1.length = 0;
gdjs.FinalCode.GDnoBtnObjects2.length = 0;
gdjs.FinalCode.GDnoBtnObjects3.length = 0;
gdjs.FinalCode.GDStars2Objects1.length = 0;
gdjs.FinalCode.GDStars2Objects2.length = 0;
gdjs.FinalCode.GDStars2Objects3.length = 0;

gdjs.FinalCode.eventsList4(runtimeScene);
gdjs.FinalCode.GDcursorObjects1.length = 0;
gdjs.FinalCode.GDcursorObjects2.length = 0;
gdjs.FinalCode.GDcursorObjects3.length = 0;
gdjs.FinalCode.GDScreenFadeObjects1.length = 0;
gdjs.FinalCode.GDScreenFadeObjects2.length = 0;
gdjs.FinalCode.GDScreenFadeObjects3.length = 0;
gdjs.FinalCode.GDNewSpriteObjects1.length = 0;
gdjs.FinalCode.GDNewSpriteObjects2.length = 0;
gdjs.FinalCode.GDNewSpriteObjects3.length = 0;
gdjs.FinalCode.GDNewSprite2Objects1.length = 0;
gdjs.FinalCode.GDNewSprite2Objects2.length = 0;
gdjs.FinalCode.GDNewSprite2Objects3.length = 0;
gdjs.FinalCode.GDyesBtnObjects1.length = 0;
gdjs.FinalCode.GDyesBtnObjects2.length = 0;
gdjs.FinalCode.GDyesBtnObjects3.length = 0;
gdjs.FinalCode.GDnoBtnObjects1.length = 0;
gdjs.FinalCode.GDnoBtnObjects2.length = 0;
gdjs.FinalCode.GDnoBtnObjects3.length = 0;
gdjs.FinalCode.GDStars2Objects1.length = 0;
gdjs.FinalCode.GDStars2Objects2.length = 0;
gdjs.FinalCode.GDStars2Objects3.length = 0;


return;

}

gdjs['FinalCode'] = gdjs.FinalCode;
