import './PhotoFrame.scss';
import cat1 from '../../asset/cat1.jpg';
import cat2 from '../../asset/cat2.jpg';
import cat3 from '../../asset/cat3.jpg';
import { useState, useEffect } from 'react';

const PhotoFrame = () => {
    const [interval, setInternalNum] = useState();
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (interval === undefined) {
            const t = setInterval(
                () =>
                    setCounter((s) => {
                        return s + 1;
                    }),
                3000
            );
            setInternalNum(t);
        }

        return () => {
            if (interval) {
                clearTimeout(interval);
            }
        };
    }, [setInternalNum, interval]);

    return (
        <>
            <div
                className="cat1 outer-frame"
                style={counter % 3 >= 0 ? { opacity: 1 } : undefined}
            >
                <div className="inner-frame">
                    <img className="frame-picture" src={cat1} alt="cat"></img>
                </div>
            </div>
            <div
                className="cat2 outer-frame"
                style={counter % 3 >= 1 ? { opacity: 1 } : undefined}
            >
                <div className="inner-frame">
                    <img className="frame-picture" src={cat2} alt="cat"></img>
                </div>
            </div>
            <div
                className="cat3 outer-frame"
                style={counter % 3 >= 2 ? { opacity: 1 } : undefined}
            >
                <div className="inner-frame">
                    <img className="frame-picture" src={cat3} alt="cat"></img>
                </div>
            </div>
        </>
    );
};

export default PhotoFrame;
