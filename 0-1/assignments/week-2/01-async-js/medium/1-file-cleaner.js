/* 
  File Cleaner:
  Create a program that reads a file, eliminates all extra spaces, and then writes the cleaned content back to the same file.

  For instance, given the input:
  hello     world    my    name   is       raman

  After executing the program, the output should be:
  hello world my name is raman
*/

const fsPromises = require('fs').promises;

const cleanFile = async filePath => {
  try {
    // Read the file asynchronously using promises.
    const data = await fsPromises.readFile(filePath, 'utf8');

    // Remove extra spaces by replacing multiple spaces with a single space.
    const cleanedContent = data.replace(/\s+/g, ' ').trim();

    // Write the cleaned content back to the same file asynchronously using promises.
    await fsPromises.writeFile(filePath, cleanedContent);

    console.log('File cleaned and updated successfully.');
  } catch (error) {
    console.error(error);
  }
};

// Provide the path to the file you want to clean.
const filePath = './medium/file.txt';
cleanFile(filePath);

/* 
  TODO: 
  - While Running Locally ensure your working directory is /assignments/week-2/01-async-js 
  - Otherwise, you may encounter an error like <ENOENT: no such file or directory, open '/medium/file.txt'>.
*/
