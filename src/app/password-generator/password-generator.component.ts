import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent {
  password = '';
  charLength = 6;
  checked = 5;
  uppercaseChecked = false;
  lowercaseChecked = false;
  numbersChecked = false;
  symbolsChecked = false;

  passStrength = 0;

  characterValue(event: any) {
    this.charLength = Number(event.target.value);
  }

  checkboxCheck(event: any) {
    this.passStrength = 0;
    let value = event.target.value;
    switch (value) {
      case 'lowercase':
        this.lowercaseChecked = event.target.checked;
        break;
      case 'uppercase':
        this.uppercaseChecked = event.target.checked;
        break;
      case 'numbers':
        this.numbersChecked = event.target.checked;
        break;
      case 'symbols':
        this.symbolsChecked = event.target.checked;
        break;
    }

    let checkboxArr = [
      this.lowercaseChecked,
      this.uppercaseChecked,
      this.numbersChecked,
      this.symbolsChecked,
    ];
    let counter = 0;

    for (let i = 0; i < checkboxArr.length; i++) {
      if (checkboxArr[i] == true) {
        counter++;
      }
    }
    this.passStrength = counter;
  }

  generatePassword(passwordLength: number) {
    let numberChars = '0123456789';
    let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    let symbolChars = "!'#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    let allChars = numberChars + upperChars + lowerChars + symbolChars;
    let randPasswordArray = Array(passwordLength);

    if (
      this.uppercaseChecked &&
      this.lowercaseChecked &&
      this.numbersChecked &&
      this.symbolsChecked
    ) {
      randPasswordArray[0] = upperChars;
      randPasswordArray[1] = lowerChars;
      randPasswordArray[2] = numberChars;
      randPasswordArray[3] = symbolChars;
      randPasswordArray = randPasswordArray.fill(allChars, 4);
    } else if (
      this.uppercaseChecked &&
      this.lowercaseChecked &&
      this.numbersChecked
    ) {
      randPasswordArray[0] = upperChars;
      randPasswordArray[1] = lowerChars;
      randPasswordArray[2] = numberChars;
      randPasswordArray = randPasswordArray.fill(
        upperChars + lowerChars + numberChars,
        3
      );
    } else if (
      this.uppercaseChecked &&
      this.lowercaseChecked &&
      this.symbolsChecked
    ) {
      randPasswordArray[0] = upperChars;
      randPasswordArray[1] = lowerChars;
      randPasswordArray[2] = symbolChars;
      randPasswordArray = randPasswordArray.fill(
        upperChars + lowerChars + symbolChars,
        3
      );
    } else if (
      this.uppercaseChecked &&
      this.numbersChecked &&
      this.symbolsChecked
    ) {
      randPasswordArray[0] = upperChars;
      randPasswordArray[1] = numberChars;
      randPasswordArray[2] = symbolChars;
      randPasswordArray = randPasswordArray.fill(
        upperChars + numberChars + symbolChars,
        3
      );
    } else if (
      this.lowercaseChecked &&
      this.numbersChecked &&
      this.symbolsChecked
    ) {
      randPasswordArray[0] = lowerChars;
      randPasswordArray[1] = numberChars;
      randPasswordArray[2] = symbolChars;
      randPasswordArray = randPasswordArray.fill(
        lowerChars + numberChars + symbolChars,
        3
      );
    } else if (this.uppercaseChecked && this.lowercaseChecked) {
      randPasswordArray[0] = upperChars;
      randPasswordArray[1] = lowerChars;
      randPasswordArray = randPasswordArray.fill(upperChars + lowerChars, 2);
    } else if (this.uppercaseChecked && this.numbersChecked) {
      randPasswordArray[0] = upperChars;
      randPasswordArray[1] = numberChars;
      randPasswordArray = randPasswordArray.fill(upperChars + numberChars, 2);
    } else if (this.uppercaseChecked && this.symbolsChecked) {
      randPasswordArray[0] = upperChars;
      randPasswordArray[1] = symbolChars;
      randPasswordArray = randPasswordArray.fill(upperChars + symbolChars, 2);
    } else if (this.lowercaseChecked && this.numbersChecked) {
      randPasswordArray[0] = lowerChars;
      randPasswordArray[1] = numberChars;
      randPasswordArray = randPasswordArray.fill(lowerChars + numberChars, 2);
    } else if (this.lowercaseChecked && this.symbolsChecked) {
      randPasswordArray[0] = lowerChars;
      randPasswordArray[1] = symbolChars;
      randPasswordArray = randPasswordArray.fill(lowerChars + symbolChars, 2);
    } else if (this.numbersChecked && this.symbolsChecked) {
      randPasswordArray[0] = numberChars;
      randPasswordArray[1] = symbolChars;
      randPasswordArray = randPasswordArray.fill(numberChars + symbolChars, 2);
    } else if (this.uppercaseChecked) {
      randPasswordArray[0] = upperChars;
      randPasswordArray = randPasswordArray.fill(upperChars, 1);
    } else if (this.lowercaseChecked) {
      randPasswordArray[0] = lowerChars;
      randPasswordArray = randPasswordArray.fill(lowerChars, 1);
    } else if (this.numbersChecked) {
      randPasswordArray[0] = numberChars;
      randPasswordArray = randPasswordArray.fill(numberChars, 1);
    } else if (this.symbolsChecked) {
      randPasswordArray[0] = symbolChars;
      randPasswordArray = randPasswordArray.fill(symbolChars, 1);
    }

    this.password = this.shuffleArray(
      randPasswordArray.map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
    ).join('');
  }

  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
