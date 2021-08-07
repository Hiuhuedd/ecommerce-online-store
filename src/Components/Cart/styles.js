import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '5%',
    },
    emptyButton: {
        minWidth: '70px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px',
        },
        color: 'black'

    },
    checkoutButton: {
        minWidth: '70px',
    },
    link: {
        textDecoration: 'none',
    },
    padding: {
        marginTop: '2%',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-between',
    },
}));