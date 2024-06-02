import ora from 'ora'; // cli spinner library
import { oraPromise } from 'ora';

export const spinner = ora({
  text:"loading Debajyati's info ...",
  spinner: "aesthetic"
});

export async function stopSpinner(spinner) {
  try {
    const promise = oraPromise( () => {
      if (spinner.isSpinning === true) {
        spinner.stop();
      }
    }, {
        successText: "Here's my info :",
        failText: "Sorry! :( ... Unexpected error occured!\n\t Time to open a issue at https://github.com/Debajyati/debajyati-npm/issues"
      });
    return promise;
  } catch (error) {
      console.error(error);
  }
}

