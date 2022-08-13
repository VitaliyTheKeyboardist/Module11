//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.
//Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

function timerNumber(num1, num2) {
    let result = num1;
    const intervalId = setInterval(function() {
      console.log(result);
      result += 1;
      if (result > num2) {
        clearInterval(intervalId)
      }
    }, 1000)
  };
  
  timerNumber(5, 15);