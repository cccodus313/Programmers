function solution(num1, num2) {
  return Math.floor(num1 / num2);
}
//Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환한다.
//양의 정수일 경우 차이가 없지만, 음수의 경우 Math.floor() 는 내림으로 인식되므로 몫을 구하기(소수점을 버림)에서는 Math.trunc() 나 parseInt() 사용을 권장한다.