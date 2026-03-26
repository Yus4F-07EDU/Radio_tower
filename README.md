## Radio Tower (Micro:bit)
I’ve made a radio system for the Micro:bit and after testing it out, **it actually works!** You can download it and try it yourself or use it with your friends. Just keep in mind that you have to **configure** it yourself, like choosing what messages you want to send between the Micro:bits. 

**Anything you change after downloading the radio system is your own responsibility.**

The radio system can be a bit **unstable**. The messages each Micro:bit receives are stored **locally**, so if you change the messages on one Micro:bit but not on the other one that’s supposed to receive them, it won’t match up. Instead, the receiving Micro:bit will just use whatever messages it already has stored instead of what’s actually being / trying to be sent. I have a temporary fix which is to just do the configurations on both Micro:bits but that's not good enough. I will probably fix the current issues that the radio system has in the future. 

#### Current configuration:

Radio Group (frequency): 33

Message 1: Hello! :)

Message 2: Minecraft (House)

Message 3: Message3 (random patterns)

Option 4: (Not recommended)

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/yus4f-07edu/Radio_Tower-Micro-bit** and click import
