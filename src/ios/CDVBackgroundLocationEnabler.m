#import "CDVBackgroundLocationEnabler.h"
#import <CoreLocation/CoreLocation.h>


@implementation CDVBackgroundLocationEnabler


- (void)enableUnlimited:(CDVInvokedUrlCommand*)command
{
    CLLocationManager* locationManager = [[CLLocationManager alloc] init];
    [locationManager startUpdatingLocation];
}

@end