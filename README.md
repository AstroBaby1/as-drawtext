# as-drawtext

![as-drawtext](https://i.imgur.com/bbTERUU.png)

## Description

as-drawtext is a simple script for displaying text messages with a key bind style.

## Usage

### Installation

1. Clone or download this repository.
2. Place the `as-drawtext` folder into your FiveM resources directory.

### Usage in other scripts

You can use the provided exports in other scripts to show and hide text messages.

```lua
-- Show 
exports['as-drawtext']:ShowText("E", "This is a sample text.")

-- Hide 
exports['as-drawtext']:HideText()
```
## Important Note
Make sure the as-drawtext resource is started in your server.cfg

