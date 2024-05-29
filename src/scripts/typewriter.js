// A Svelte transition. Unveils the content of the caller node, unveiling
// its content by deleting the '█'
export function typewriter(node, { speed = 1.5 }) {
    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
        duration,
        tick: (t) => {
            const i = ~~(text.length * t);
            node.textContent = text.slice(0, i) + '█'.repeat(text.length - i);
        },
    };
}
