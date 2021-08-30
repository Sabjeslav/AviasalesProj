import React from 'react';
import cx from 'classnames'
import {makeStyles} from '@material-ui/core/styles';
import Checkbox, {CheckboxProps} from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    root: {
        padding: 0,
        margin: "10px 10px 10px 0",
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: 3,
        width: 16,
        height: 16,
        border: '2px solid #9ABBCE',
    },
    checkedIcon: {
        border: '2px solid #2196F3',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%232196F3'/%3E%3C/svg%3E\")",
            content: '""',
        },
    },
});

const StyledCheckbox = (props: CheckboxProps) => {
    const classes = useStyles();
    return (
        <Checkbox
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={cx(classes.icon, classes.checkedIcon)}/>}
            icon={<span className={classes.icon}/>}
            inputProps={{'aria-label': 'decorative checkbox'}}
            {...props}
        />
    );
};

export default StyledCheckbox;
