# Console-V-Programs
Programs that can run on Console V.

Check the 'Template' folder to find the js file template for creating new Console V applications.

Getting Started Guide
Jump into consoleprogram_template.js. Copy this and use this as your base to getting started on making an application for Console V. 

The first thing you should change is your 'programname' variable. This is located on line 1. 
The second thing to do is make sure you update your program_desc which can be a longer string that describes more features of your program to a user who may be unfamiliar with it,

Chronologically, the next step is to edit the 'programuser' function. In the switch case, edit the 'run' case. This will called by the system and run as soon as the user starts your program.

Finally, edit the programuserinput which is where input from the user will be sent to your program. There are certin 'protected' keywords that you do not have the ability to change. These keywords are: "exit", "e" & "clear", "c". Both are reserved by the system. 

From consoleprogram_template.js about iJD ClearType:

```
HOW TO USE CLEARTYPE v1.0 (Console V's user-input parsing system)
Example user input:
echo test -b -i This is a bold AND italic line!
 ^   ^    ^  ^  ^                             ^
 |   |    |  |  |------- inputAfter-----------|
 |   |    |  |_________         
 |   |    |           |
 |   |    firstFlag & secondFlag
 |   secondWord
firstWord
```

Quick Access vars Available via clearType:
firstWord, secondWord, thirdWord. 
firstFlag, secondFlag, thirdFlag.
inputAfter.

Full Access Arrays via clearType:
words[] = Array of all of the individual words in the input. Includes tags. Every piece
           of input parsed by spaces " "
flags[] = Array of all of the individual flags (including the dash). This
           array only includes the flags, NOT any of the other words.

After this, write your program & enjoy!
