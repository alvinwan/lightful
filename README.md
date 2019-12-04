# Lightful
**Real-Time multiplayer puzzle game in virtual reality.** Each pair of players is given a ring of orbs. The goal is to "turn on" all orbs, where an orb is "on" if it’s elevated and bright. An orb is "off" if it’s lower and dim. However, certain "dominant" orbs affect their neighbors: if it switches state, its neighbors also switch state. Player 2 can control even-numbered orbs, and player 1 can control odd-numbered orbs. This forces both players to collaborate to solve the puzzle. To toggle an orb on desktop, point the circle in the center of the screen at the orb by dragging. To toggle an orb in a VR headset, simply look at the orb. [**Play now!**](https://lightful.alvinwan.com)

This repository includes all source code for the 2-part tutorial on Smashing Magazine "How To Build A Real-Time Multiplayer Virtual Reality Game" [Part 1](https://www.smashingmagazine.com/2019/08/real-time-multiplayer-virtual-reality-game-part-1/) and [Part 2](https://www.smashingmagazine.com/2019/12/real-time-multiplayer-virtual-reality-game-part-2/), including:

- A multiplayer server and browser-based clients using websockets
- Support for both desktop and virtual reality headsets (via [A-Frame VR](http://aframe.io))
- Finished source code for *each step* in the tutorial
- Finalized game with extra bells and whistles [here](https://lightful.alvinwan.com)
- Free multiplayer server, courtesy of Glitch [glitch.com/~lightful](https://glitch.com/~lightful)

created by [Alvin Wan](http://alvinwan.com), December 2019

![This is the finished multiplayer game, synchronized across multiple clients.](https://i.imgur.com/yfvVpYv.gif)
