import { useLayoutEffect, useState } from 'react';

const EMPTY_SIZE = { height: 0, width: 0 };
const EMPTY_RECT = { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };

const useResize = (ref: React.RefObject<Element>): [{ window: typeof EMPTY_SIZE; element: typeof EMPTY_RECT }] => {
    const [size, setSize] = useState({ element: EMPTY_RECT, window: EMPTY_SIZE });

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) {
            return;
        }

        const updateSize = (): void => {
            setSize({
                element: el.getBoundingClientRect(),
                window: { height: window.innerHeight, width: window.innerWidth },
            });
        };

        window.addEventListener('resize', updateSize);
        updateSize();

        return (): void => {
            window.removeEventListener('resize', updateSize);
        };
    }, [ref]);

    return [size];
};

export default useResize;
