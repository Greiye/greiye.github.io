gdjs.OverworldCode = {};
gdjs.OverworldCode.GDPlayerObjects1= [];
gdjs.OverworldCode.GDPlayerObjects2= [];
gdjs.OverworldCode.GDPlayerObjects3= [];
gdjs.OverworldCode.GDCollisionDetectObjects1= [];
gdjs.OverworldCode.GDCollisionDetectObjects2= [];
gdjs.OverworldCode.GDCollisionDetectObjects3= [];
gdjs.OverworldCode.GDAssadorthObjects1= [];
gdjs.OverworldCode.GDAssadorthObjects2= [];
gdjs.OverworldCode.GDAssadorthObjects3= [];
gdjs.OverworldCode.GDTransitionObjects1= [];
gdjs.OverworldCode.GDTransitionObjects2= [];
gdjs.OverworldCode.GDTransitionObjects3= [];
gdjs.OverworldCode.GDTextBorderObjects1= [];
gdjs.OverworldCode.GDTextBorderObjects2= [];
gdjs.OverworldCode.GDTextBorderObjects3= [];


gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDCollisionDetectObjects1Objects = Hashtable.newFrom({"CollisionDetect": gdjs.OverworldCode.GDCollisionDetectObjects1});
gdjs.OverworldCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15210260);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].activateBehavior("TopDownMovement", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects2[k] = gdjs.OverworldCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects2[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlayerObjects1[k] = gdjs.OverworldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.OverworldCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


};gdjs.OverworldCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Dialogue"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.OverworldCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.OverworldCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "Transition", 0);
}{}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Collision");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CollisionDetect"), gdjs.OverworldCode.GDCollisionDetectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.OverworldCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.OverworldCode.mapOfGDgdjs_9546OverworldCode_9546GDCollisionDetectObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.OverworldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.OverworldCode.GDPlayerObjects1[i].setZOrder((gdjs.OverworldCode.GDPlayerObjects1[i].getPointY("")));
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.OverworldCode.GDPlayerObjects1.length !== 0 ? gdjs.OverworldCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.OverworldCode.eventsList1(runtimeScene);
}


};

gdjs.OverworldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OverworldCode.GDPlayerObjects1.length = 0;
gdjs.OverworldCode.GDPlayerObjects2.length = 0;
gdjs.OverworldCode.GDPlayerObjects3.length = 0;
gdjs.OverworldCode.GDCollisionDetectObjects1.length = 0;
gdjs.OverworldCode.GDCollisionDetectObjects2.length = 0;
gdjs.OverworldCode.GDCollisionDetectObjects3.length = 0;
gdjs.OverworldCode.GDAssadorthObjects1.length = 0;
gdjs.OverworldCode.GDAssadorthObjects2.length = 0;
gdjs.OverworldCode.GDAssadorthObjects3.length = 0;
gdjs.OverworldCode.GDTransitionObjects1.length = 0;
gdjs.OverworldCode.GDTransitionObjects2.length = 0;
gdjs.OverworldCode.GDTransitionObjects3.length = 0;
gdjs.OverworldCode.GDTextBorderObjects1.length = 0;
gdjs.OverworldCode.GDTextBorderObjects2.length = 0;
gdjs.OverworldCode.GDTextBorderObjects3.length = 0;

gdjs.OverworldCode.eventsList2(runtimeScene);

return;

}

gdjs['OverworldCode'] = gdjs.OverworldCode;
