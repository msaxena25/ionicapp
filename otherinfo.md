#Add Android platform
ionic cordova platform add android

#Build project
ionic cordova build android



After install Android Studio (SDK auto download with it)

Enviourement variables:

#ANDROID_HOME
C:\Users\13596\AppData\Local\Android\Sdk

After installed JDK 8 version or above: jdk-8u191-windows-x64.exe

#JAVA_HOME
C:\Program Files\Java\jdk1.8.0_191

##Below we have to add in path variable.

%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
%ANDROID_HOME%\platform-tools
%JAVA_HOME%
%ANDROID_SDK_ROOT%\tools
%ANDROID_SDK_ROOT%\tools\bin
%ANDROID_SDK_ROOT%\platform-tools

ANDROID_SDK_ROOT  -- it is required now instead of Android_home.

#ERROR:

android_sdk_root=undefined (recommended setting)  

> set same path as android_home & close cmd and run it again. (Solved)

issue with cordovaLib project > com.github.dcendents.android-maven  error 

>need to change in build.gradle file of cordovaLib project. 
add mavenCentral() into buildscript { repositories {  at last .

buildscript {
    repositories {
        google()
        jcenter()
	mavenCentral()
    }

#ERROR

platforms\android\gradlew: Command failed with exit code 1 Error output:

Failed to capture fingerprint of input files for task ':app:preDebugBuild' property 'compileManifests' during up-to-date check.

> This error occurred due to 'cordova-plugin-firebase' plugin issue. TO Check I remove this plugin:

#TO remove plugin follow below steps:

> ionic cordova platform remove android
> ionic cordova plugin rm cordova-plugin-firebase --save  (--save this is much important to remove plugin from your solution)



