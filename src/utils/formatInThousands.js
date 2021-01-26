const formatInThousands = value => {
    if (typeof value !== 'number') {
        return undefined;
    }
    return value >= 1000
        ? `${(value / 1000).toFixed(1).toLocaleString()}k`
        : value.toLocaleString();
};

export default formatInThousands;