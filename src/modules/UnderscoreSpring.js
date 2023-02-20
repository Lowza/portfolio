import { useSpring, animated } from '@react-spring/web';

const UnderscoreSpring = () => {
    const styles = useSpring({
        loop: { reverse: true },
        from: { opacity: 1 },
        to: { opacity: 0 },
        delay: 1000,
    });

    return (
        <animated.div style={styles}>_</animated.div>
    );
}

export default UnderscoreSpring;