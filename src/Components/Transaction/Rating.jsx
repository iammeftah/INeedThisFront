import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import 'boxicons';

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons: {
    [index: string]: {
        icon: React.ReactElement;
        label: string;
    };
} = {
    1: {
        icon: <box-icon name='angry' type='solid' color='#f44336' />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <box-icon name='frown' type='solid' color='#f44336' />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <box-icon name='meh' type='solid' color='#ff9800' />,
        label: 'Neutral',
    },
    4: {
        icon: <box-icon name='smile' type='solid' color='#4caf50' />,
        label: 'Satisfied',
    },
    5: {
        icon: <box-icon name='laugh' type='solid' color='#4caf50' />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

export default function RadioGroupRating() {
    return (
        <StyledRating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value: number) => customIcons[value].label}
            highlightSelectedOnly
        />
    );
}
