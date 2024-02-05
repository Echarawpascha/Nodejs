
import readline from "readline"

//console.info(os.cpus)

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    input.close();
});
