import { Suspense, useState } from "react";
import { lazily } from "react-lazily";

export const Lazy = () => {
    const [isAShow, setIsAShow] = useState(false);
    const [isBShow, setIsBShow] = useState(false);
    const { HeavyComponentA, HeavyComponentB } = lazily(() => import("./heavy"));
    return (
        <div>
            <h1>Lazy</h1>
            <button onClick={() => setIsAShow((isShow) => !isShow)}>Toggle A</button>
            <Suspense fallback={<div>loading...</div>}>
                {isAShow && <HeavyComponentA />}
            </Suspense>
            <button onClick={() => setIsBShow((isShow) => !isShow)}>Toggle B</button>
            <Suspense fallback={<div>loading...</div>}>
                {isBShow && <HeavyComponentB />}
            </Suspense>
        </div>
    )
}