var programname = "Console Program Template";
function programuserinput()
{
    switch (clearType.firstWord)
    {
        //Each case is a command by the user. 

        // HOW TO USE CLEARTYPE v1.0 (Console V's user-input parsing system)
        // Example user input:
        // echo test -b -i This is a bold AND italic line!
        //  ^   ^    ^  ^  ^                             ^
        //  |   |    |  |  |------- inputAfter-----------|
        //  |   |    |  |_________         
        //  |   |    |           |
        //  |   |    firstFlag & secondFlag
        //  |   secondWord
        //firstWord
        
        // Quick Access vars Available via clearType:
        // firstWord, secondWord, thirdWord
        // firstFlag, secondFlag, thirdFlag
        // inputAfter

        // Full Access Arrays via clearType:
        // words[] = Array of all of the individual words in the input. Every piece
        //            of input parsed by spaces " "
        // flags[] = Array of all of the individual flags (including the dash). This
        //            array only includes the flags, NOT any of the other words.



        // This first case is switching on firstWord. Some recommended commands are 
        //  already pre-filled out for you. 
        // reg_error is 
        case "":
            //This is the response: Edit this.
            consoleWrite(reg_error + "No input detected!");
            break;
        case "help":
            consoleWrite("Enter your help documentation here.")
        default: 
            consoleWrite(reg_error + "Not a valid command.");
    }
}

//Control the function
function programuser(data1) {
    switch (data1)
    {
        //Each case is a command from the system, right now the only one is the "run"
        //  command. More may be added in the future. You may overwrite this and use
        //  this function to build functionality.
        case "run":
            //This is called when the user runs the first program
            consoleWrite("Welcome to Console V Program Template");
            break;
        default: 
            //
    }
}