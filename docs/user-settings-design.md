# User Settings Design

## Overview

The user functions for the settings context are defined in the [voxproc-user-functions.puml](voxproc-user-functions.puml) file.

## Routing

The settings interface is routed to voxproc.com/settings. Assuming the user is logged in, the user will see their own app settings in this interface.

## Contexts

In /settings, the user will be able to access the following settings contexts via tabs:

- Account Settings
- Notification Settings
- Stream Settings
- Community Settings

## Tab Layout

Settings in each tab will be hierarchically formatted to create clear visual separation between concerns.

## Style

The settings page should match the visual style of HeaderWireframe.tsx.
