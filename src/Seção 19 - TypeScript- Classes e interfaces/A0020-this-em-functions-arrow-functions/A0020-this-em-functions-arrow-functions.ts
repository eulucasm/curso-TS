export function funcao(this: Date, argumento1: string): void {
  console.log(this);
  console.log(argumento1);
}
//primeiro argumento é quem seria o this da funcão e o segundo o call
funcao.call(new Date(), 'Lucas');

funcao.apply(new Date(), ['LUcas']);
