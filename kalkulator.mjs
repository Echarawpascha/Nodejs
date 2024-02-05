import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function kalkulator() {
  input.question("Masukan Angka Pertama: ", angka1 => {
    console.info(angka1);
    input.question("Masukan Angka Kedua: ", angka2 => {
      console.info(angka2);
      input.question("Masukan Operatornya (+, -, *, /): ", operator => {
        console.info(operator);
        if (operator === "+") {
          console.info(
            `Hasil Penjumlahan adalah: ${parseFloat(angka1) +
              parseFloat(angka2)}`
          );
        } else if (operator === "-") {
          console.info(
            `Hasil Pengurangan adalah: ${parseFloat(angka1) -
              parseFloat(angka2)}`
          );
        } else if (operator === "*") {
          console.info(
            `Hasil Perkalian adalah: ${parseFloat(angka1) *
              parseFloat(angka2)}`
          );
        } else if (operator === "/") {
          if (parseFloat(angka2) === 0) {
            console.info("Pembagian Tidak Bisa Dengan Angka 0 ");
          } else {
            console.info(
              `Hasil Pembagian adalah: ${parseFloat(angka1) /
                parseFloat(angka2)}`
            );
          }
        } else {
          console.info("Operator yang dimasukkan tidak valid");
        }
        input.close();
      });
    });
  });
}

kalkulator();