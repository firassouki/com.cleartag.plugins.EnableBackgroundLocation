#import <Cordova/CDVPlugin.h>
#import <Cordova/CDVInvokedUrlCommand.h>

@interface CDVBackgroundLocationEnabler : CDVPlugin 

- (void) enableUnlimited:(CDVInvokedUrlCommand*)command;


@end