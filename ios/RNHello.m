//
//  RNHello.m
//  MyFirstProject
//
//  Created by Telebu on 02/07/21.
//

#import "RNHello.h"
#import <React/RCTLog.h>

@implementation RNHello

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
