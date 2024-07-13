export const HeavyComponentA = () => {
    const calc = () => {
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) {
            sum += i;
        }
        return sum;
    };
    return (
        <div>
            <h1>HeavyComponentA</h1>
            <p>sum: {calc()}</p>
        </div>
    );
}

export const HeavyComponentB = () => {
    const calc = () => {
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) {
            sum += i;
        }
        return sum;
    };
    return (
        <div>
            <h1>HeavyComponentB</h1>
            <p>sum: {calc()}</p>
        </div>
    );
}