What the Tool Does:

This tool displays the contents of a file and searches for a specific word or phrase within the file. It also displays the lines where the word is found and counts the number of matching lines. This combines file viewing and searching into one command.

How to Run It:

The command syntax is:

node example.js <fileName> <searchWord>

For example:
node example.js sample.txt Joanna

Or:

node example.js test.txt world

The program reads the specified file, displays its contents, searches each line for the specified word or phrase, displays the matching lines, and prints the number of matching lines.

What Commands It Combines:

This tool combines functionality similar to:

cat — displays the contents of a file.
grep — searches for a specific word or phrase and displays matching lines.

The tool combines these two functions into one command and also counts the number of matching lines.

Section 2

What I asked AI:
I asked AI to help me understand my Node.js code, come up with test scenarios, identify possible edge cases, and explain how my command works.

Where AI helped:
AI helped me identify different test scenarios and edge cases, including a missing file, a missing search word, an empty file, and case sensitivity. It also helped me explain how my command combines file viewing and searching.

Where I had to think independently:
I had to test my own code and compare the expected behavior with the actual output. I also had to decide which edge cases were relevant to my program and determine whether changes were actually necessary.

What AI got wrong or missed:
AI suggested adding extra error handling for situations such as a missing file or search word, but I decided not to add those changes because my main command was already working as expected. AI also did not know exactly how I had tested my program, so I had to rely on my own testing to confirm the actual behavior.

