interface ITsFunTest {
    base: number;
    increment: 5 | 10 | 15;
    result: string;
}
const add = ({ base, increment, result }: ITsFunTest): string => {
    return `返回值为 ${base + increment}`;
};
export default add;
